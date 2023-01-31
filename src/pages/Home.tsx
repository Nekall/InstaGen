import { useEffect, useState } from "react";

// Components
import LinkBuilder from "../components/LinkBuilder";
import Terminal from "../components/Terminal";

// Styles
import "../index.css";

const Home = () => {
  const [terminal, setTerminal] = useState<any>([]);
  
  console.log(terminal)
  return (
    <div>
      <h1>InstaGen</h1>
      <hr />
      <LinkBuilder setTerminal={setTerminal} />
      <Terminal terminal={terminal} />
    </div>
  );
};

export default Home;
