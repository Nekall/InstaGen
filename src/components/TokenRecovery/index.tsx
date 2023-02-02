import { useState } from "react";
import fetch from "isomorphic-fetch";

const TokenRecovery = ({ setTerminal, code }: any) => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [clientId, setClientId] = useState("");

  const getTokenAccess = (e: any) => {
    e.preventDefault();
    if (!clientSecret) {
      return setTerminal((terminal: any) => [
        ...terminal,
        "client_secret not found",
      ]);
    }

    const form = new FormData();
    form.append("client_id", clientId);
    form.append("client_secret", clientSecret);
    form.append("grant_type", "authorization_code");
    form.append("redirect_uri", "https://instagen.vercel.app/auth/");
    form.append("code", code);

    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: form,
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTerminal((terminal: any) => [
          ...terminal,
          "",
          "********* access_token short-lived *********",
          response.access_token,
          "********************************************",
        ]);

        fetch(
          `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${clientSecret}&client_secret=${response.access_token}`,
          { method: "GET" }
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setTerminal((terminal: any) => [
              ...terminal,
              "",
              "********* access_token long-lived *********",
              response.access_token,
              "********************************************",
              "",
              "Your long life token generation is complete.",
            ]);
          })
          .catch((err) => {
            console.error(err);
            setTerminal((terminal: any) => [...terminal, "Error: " + err]);
          });
      })
      .catch((err) => {
        console.error(err);
        setTerminal((terminal: any) => [...terminal, "Error: " + err]);
      });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          getTokenAccess(e);
        }}
      >
        <input
          onChange={(e) => setClientId(e.target.value)}
          type="text"
          placeholder="client_id"
        />
        <input
          onChange={(e) => setClientSecret(e.target.value)}
          type="text"
          placeholder="client_secret"
        />
        <br />
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default TokenRecovery;
