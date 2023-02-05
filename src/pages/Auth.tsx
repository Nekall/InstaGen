import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import TokenRecovery from "../components/TokenRecovery";
import Terminal from "../components/Terminal";
import Header from "../components/Header";

// Styles
import "../index.css";

const Auth = () => {
  let [searchParams] = useSearchParams();
  const [code] = useState(searchParams.get("code"));
  const [terminal, setTerminal] = useState<any>([
    "",
    "Successful code recovery.",
    "",
    "******************* Code *******************",
    `${code}`,
    "********************************************",
  ]);

  return (
    <div className="container">
      {code ? (
        <>
          <Header />
          <TokenRecovery setTerminal={setTerminal} code={code} />
          <Terminal terminal={terminal} />
        </>
      ) : (
        <>
          <Header />
          <p className="error">client_id not found</p>
        </>
      )}
    </div>
  );
};

export default Auth;
