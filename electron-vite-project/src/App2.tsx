import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App2() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/App3");
  };

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ini 3</h1>
      <div className="card">
        <button onClick={handleNext}>prev</button>
        <button onClick={handleNext}>next</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App2;
