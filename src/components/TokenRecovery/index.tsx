import { useState } from "react";
//import fetch from "isomorphic-fetch";

const TokenRecovery = ({ setTerminal, code }: any) => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [clientId, setClientId] = useState("");

  const getLongLivedToken = (shortLivedToken: string) => {
    console.log("client_id: " + clientId);
    console.log("client_secret: " + clientSecret);
    console.log("Shortlivedtk", shortLivedToken);

    fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token%20%20&client_secret=${clientSecret}&access_token=${shortLivedToken}`
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
          "You can now use it in your application.",
          "Please, don't forget to save it in a safe place.",
          "Process Over."
        ]);
      })
      .catch((err) => {
        console.error(err);
        setTerminal((terminal: any) => [...terminal, "Error: " + err]);
      });
  };

  const getShortLivedToken = (e: any) => {
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
        if (response.code && response.code === 400) {
          return setTerminal((terminal: any) => [
            ...terminal,
            `Error: ${response.error_type} - ${response.error_message}`,
          ]);
        }
        setTerminal((terminal: any) => [
          ...terminal,
          "",
          "********* access_token short-lived *********",
          response.access_token,
          "********************************************",
        ]);
        getLongLivedToken(response.access_token);
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
          getShortLivedToken(e);
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
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default TokenRecovery;
