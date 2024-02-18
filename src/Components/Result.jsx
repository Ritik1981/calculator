import React, { useContext, useState, useEffect } from "react";
import { DigitContext } from "./Digits";

function Result() {
  const { display, isClicked } = useContext(DigitContext);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (isClicked) {
      setResult(calculateResult(display));
    }
  }, [display, isClicked]);

  function calculateResult(expression) {
    const tokens = expression.match(/\d+(\.\d+)?|\+|\-|\*|\/|\%|\^|\.|\R/g);
    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "%": 2,
      "^": 3,
    };

    const applyOperator = (a, operator, b) => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        case "%":
          return a % b;
        case "^":
          return Math.pow(a, b);
        default:
          return NaN;
      }
    };

    const numbers = [];
    const operators = [];

    // console.log(tokens);
    let nextElement;
    for (let token of tokens) {
      if (!isNaN(parseFloat(token))) {
        if (parseFloat(token) === parseFloat(nextElement)) {
          // console.log("Called");
          continue;
        }
        numbers.push(parseFloat(token)); // it executes when token is a no.
      } else if (token === "R") {
        // console.log("Hii");
        const currentIndex = tokens.indexOf(token);
        nextElement = tokens[currentIndex + 1];
        numbers.push(Math.sqrt(parseFloat(nextElement)));
        // console.log(numbers);
      } else {
        // console.log(operators.length);
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          const operator = operators.pop();
          const b = numbers.pop();
          const a = numbers.pop();
          numbers.push(applyOperator(a, operator, b));
        }
        operators.push(token);
      }
    }

    while (operators.length > 0) {
      const operator = operators.pop();
      const b = numbers.pop();
      const a = numbers.pop();
      numbers.push(applyOperator(a, operator, b));
    }

    return numbers.pop();
  }

  return (
    <div style={{ fontSize: "20px", fontFamily: "initial" }}>
      {isClicked && result}
    </div>
  );
}

export default Result;
