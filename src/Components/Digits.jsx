import React, { createContext, useState } from "react";
import Num from "./Num";
import Operator from "./Operator";
import Result from "./Result";
import Clear from "./Clear";
// import "./index.css";

export const DigitContext = createContext();
function Digits() {
  const [isClicked, setIsClicked] = useState(false);
  const [display, setDisplay] = useState("0");
  const [clickedButton, setClickedButton] = useState(null);
  const [isCleared, setisCleared] = useState(false);

  function handleKey(e) {
    if (e.key === "Enter") {
      handleResult();
    }
  }
  function handleClick(btn) {
    const newDisplay = display === "0" ? btn : display + btn.toString(); // concatenating using +
    setDisplay(newDisplay);
    setClickedButton(btn);
  }

  function handleResult() {
    if (display === "0") {
      return <p>Error</p>; // make use of alert after trying
    }
    const inValidChars = ["+", "-", "*", "/", "%", "^", ".", "R"];
    const lastChar = display.charAt(display.length - 1);
    if (inValidChars.includes(lastChar)) return <p>Error: Invalid Last Char</p>;

    // finding whether there is any operator in the string or not
    const chars = ["+", "-", "/", "*", "%", "^"];
    function containsAnyOperator(display, chars) {
      for (let char of chars) {
        if (display.includes(char)) {
          return true;
        }
      }
      return false;
    }
    containsAnyOperator(display, chars);
    if (!containsAnyOperator) {
      return <p>Error: No Operator</p>;
    }
    setIsClicked(true);
    // thereafter splitting the display string from whereever operator is find
  }
  return (
    <DigitContext.Provider
      value={{
        display,
        setDisplay,
        isClicked,
        setIsClicked,
        isCleared,
        setisCleared,
      }}
    >
      <div className="calculator">
        <Num />
        {isClicked && <Result />}
        <div className="clear-button-container">
          <Clear />
        </div>
        {/* <Clear className="clear-button" /> */}
        {/* <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button> */}
        <div className="digit-buttons" onKeyPress={handleKey}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].map((digit) => (
            <button key={digit} onClick={() => handleClick(digit)}>
              {digit}
            </button>
          ))}
          <button onClick={() => handleResult()}>=</button>{" "}
          {/* To take separately*/}
        </div>
        <Operator />
      </div>
    </DigitContext.Provider>
  );
}

export default Digits;
