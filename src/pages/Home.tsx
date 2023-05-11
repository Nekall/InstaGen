import { useState } from "react";

// Asssets
import redirectUri from "../assets/image/redirect-uri.png";

// Components
import LinkBuilder from "../components/LinkBuilder";
import Terminal from "../components/Terminal";
import Header from "../components/Header";

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
    "Check that you have ACTIVATED the demo on cors-anywhere",
    "https://cors-anywhere.herokuapp.com",
    "",
  ]);

  return (
    <div className="container">
      <Header />
      <LinkBuilder setTerminal={setTerminal} />
      <Terminal terminal={terminal} />
    </div>
  );
};

export default Home;
