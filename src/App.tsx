import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./index.css";

const App = () => {
  let [searchParams] = useSearchParams();
  const [code, setCode] = useState(searchParams.get("code"));

  return code ? (
    <div>
      <h1>InstaGen</h1>
      <p>Redirection site token generation for Instagram.</p>
      <hr />
      <p>Here is your code:</p>
      <code>{code}</code>
    </div>
  ) : (
    <>
      <h1>InstaGen</h1>
      <p className="error">client_id not found</p>
    </>
  );
};

export default App;
