import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import TokenRecovery from "../components/TokenRecovery";
import Terminal from "../components/Terminal";

// Styles
import "../index.css";

const Auth = () => {
  let [searchParams] = useSearchParams();
  const [code] = useState(searchParams.get("code"));
  const [terminal, setTerminal] = useState<any>([
    "Successful code recovery ✔",
    "******************* Code *******************",
    `${code}`,
    "********************************************",
  ]);
  //const [token, setToken] = useState(searchParams.get("token"));

  return code ? (
    <div>
      <h1>InstaGen</h1>
      <hr />
      <TokenRecovery setTerminal={setTerminal} code={code} />
      <Terminal terminal={terminal} />
    </div>
  ) : (
    <>
      <h1>InstaGen</h1>
      <p className="error">client_id not found</p>
    </>
  );
};

export default Auth;
