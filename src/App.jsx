import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Digits from "./Components/Digits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Digits />
    </div>
  );
}

export default App;
