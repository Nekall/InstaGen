import { useState } from "react";

// helpers
import { sleep } from "../../helpers/sleep";

// Styles
import "./styles.css";

const LinkBuilder = ({ setTerminal }: any) => {
  const [clientId, setClientId] = useState("");

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const getTheCode = (e: any) => {
    e.preventDefault();

    if (!clientId) {
      return setTerminal((terminal: any) => [
        ...terminal,
        "client_id not found",
      ]);
    }

    setTerminal((terminal: any) => [
      ...terminal,
      "Link creation, in progress...",
    ]);
    sleep(2000).then(() => {
      openInNewTab(
        `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=https://instagen.vercel.app/auth/&scope=user_profile,user_media&response_type=code`
      );
    });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          getTheCode(e);
        }}
      >
        <input
          onChange={(e) => setClientId(e.target.value)}
          type="text"
          placeholder="client_id"
        />
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default LinkBuilder;
