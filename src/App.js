import { useState } from "react";
import "./styles.css";

export default function App() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, newTime1] = useState(newTime);
  const update = () => {
    let newTime = new Date().toLocaleTimeString();
    newTime1(newTime);
  };
  return (
    <>
      <div className="App">
        <h1>{ctime}</h1>
        <button onClick={update}>Get time</button>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
