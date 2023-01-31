import { useState } from "react";

const TokenRecovery = ({ setTerminal, code }: any) => {
  const [clientSecret, setClientSecret] = useState<string>("");

  const getTokenAccess = (e: any) => {
    e.preventDefault();
    if (!clientSecret) {
      return setTerminal((terminal: any) => [
        ...terminal,
        "client_secret not found",
      ]);
    }

    fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token%20%20&client_secret=${clientSecret}&access_token=${code}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          setTerminal((terminal: any) => [
            ...terminal,
            "Try to retrieve the access_token...",
          ]);
        } else {
          setTerminal((terminal: any) => [
            ...terminal,
            response.statusText + " " + response.status,
          ]);
        }
        console.info(response);
        response.json();
      })
      .then((data) => {
        console.info(data);
        console.log(data);
      })
      .catch((err) => {
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
