import React, { createContext, useContext, useState } from "react";
import { DigitContext } from "./Digits";

function Operator() {
  // write operators logic using switch case
  // NOTE: % will find percentage instead of remainder in my calculator app
  const [operator, setOperator] = useState("");
  const OperatorContext = createContext();

  const { display, setDisplay } = useContext(DigitContext);

  function handleClick(optr) {
    let newDisplay;
    if (optr === "R") {
      newDisplay = display === "0" ? "R" : display + optr;
    } else {
      newDisplay = display === "0" ? <p>Invalid</p> : display + optr;
    }
    setDisplay(newDisplay);
  }
  return (
    <OperatorContext.Provider value={{ operator }}>
      <div className="operator-buttons">
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("^")}>^</button>
        <button className="square-root-button" onClick={() => handleClick("R")}>
          <img
            className=""
            src="https://www.clipartmax.com/png/small/159-1593700_square-root-math-green-mathematics-student-study-square-root-clip-art.png"
            alt="R"
          />
        </button>

        {/* Think of sqrt Operator */}
      </div>
    </OperatorContext.Provider>
  );
}

export default Operator;
