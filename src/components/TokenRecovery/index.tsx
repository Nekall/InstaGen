import { useState } from "react";

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
        "content-type": "multipart/form-data",
        host: "graph.instagram.com",
      },
      body: form,
    };

    fetch("https://api.instagram.com/oauth/access_token", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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
