import React, { useContext } from "react";
import { DigitContext } from "./Digits";
import "./Style.css";
function Clear() {
  const { setDisplay, setIsClicked } = useContext(DigitContext);
  function handleClear() {
    setIsClicked(false);
    setDisplay("0");
    // setResult();
  }
  return (
    <div className="clear-button-container">
      <button onClick={() => handleClear()} className="clear-button">
        CLR
      </button>
    </div>
  );
}

export default Clear;
