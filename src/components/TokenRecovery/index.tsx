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

    setTerminal((terminal: any) => [
      ...terminal,
      "Token recovery, in progress...",
    ]);

    fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token%20%20&client_secret=${clientSecret}&access_token=${code}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
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
