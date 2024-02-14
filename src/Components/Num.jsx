import React from "react";
import { useContext } from "react";
import { DigitContext } from "./Digits";
function Num() {
  const { display } = useContext(DigitContext);

  return <div style={{ fontSize: "20px" }}>{display}</div>;
}

export default Num;
