import { useState } from "react";

// Asssets
import redirectUri from "../assets/image/redirect-uri.png";

// Components
import LinkBuilder from "../components/LinkBuilder";
import Terminal from "../components/Terminal";

// Styles
import "../index.css";

const Home = () => {
  const [terminal, setTerminal] = useState<any>([
    "Welcome to InstaGen, a tool to generate access_token for Instagram API",
    "Please, follow the instructions below",
    "Make sure you put the right redirection uri in your Instagram application",
    "https://instagen.vercel.app/auth/",
    "",
    <img src={redirectUri} alt="prerequisites" />,
    "",
  ]);

  return (
    <div>
      <h1>InstaGen</h1>
      <hr />
      <Terminal terminal={terminal} />
      <LinkBuilder setTerminal={setTerminal} />
    </div>
  );
};

export default Home;
