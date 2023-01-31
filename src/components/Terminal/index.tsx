// Styles
import "./styles.css";

const Terminal = ({ terminal }: any) => {
  return (
    <div className="terminal">
      {terminal &&
        terminal.map((item: any, index: number) => (
          <>
            <code key={`line-numb-${index}`}>{item}</code>
            <br />
          </>
        ))}
    </div>
  );
};

export default Terminal;
