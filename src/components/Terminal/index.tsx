// Styles
import React from "react";
import "./styles.css";

const Terminal = ({ terminal }: any) => {
  return (
    <div className="terminal">
      {terminal &&
        terminal.map((item: any, index: number) => (
          <React.Fragment key={`line-numb-${index}`}>
            <code>{item}</code>
            <br />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Terminal;
