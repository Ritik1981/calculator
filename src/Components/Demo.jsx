import React, { useContext, useState } from "react";
import { DigitContext } from "./Digits";

function Result() {
  const { display, isClicked } = useContext(DigitContext);
  const [result, setResult] = useState();
  function calculateResult(display) {
    // Split the expression into tokens
    const tokens = display.match(/\d+|[\+\-\*\/\%\^\R]/g);
    console.log(tokens);
    // \d+: Matches one or more digits.
    // |: Alternation, allowing the regular expression to match either the pattern on the left or the pattern on the right.
    // [\+\-\*\/]: A character class that matches any of the specified arithmetic operators (+, -, *, /). The backslashes (\) are used to escape the special characters so they are treated literally within the character class.
    // The g flag at the end of the regular expression stands for "global" and ensures that all matches in the string are returned, not just the first one.

    // So, this regular expression will match all sequences of digits and arithmetic operators in the expression and return them as an array of tokens.

    // Helper function to apply an operator to two operands
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
        default:
          return NaN;
      }
    };

    // Operator precedence
    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "%": 2,
      "^": 3,
    };

    // Stack to hold numbers and operators
    const numbers = [];
    const operators = [];

    // Process each token
    for (let token of tokens) {
      console.log(token);
      if (!isNaN(parseFloat(token))) {
        // If token is a number, push it to the numbers stack
        // NaN is false means it is a number.
        numbers.push(parseFloat(token));
      }
      //   else if(){

      //   }
      else {
        // If token is an operator, apply precedence rules
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          const operator = operators.pop();
          const b = numbers.pop();
          const a = numbers.pop();
          numbers.push(applyOperator(a, operator, b));
        }
        // Push current operator to the operators stack
        operators.push(token);
      }
    }

    // Evaluate remaining operators
    while (operators.length > 0) {
      const operator = operators.pop();
      const b = numbers.pop();
      const a = numbers.pop();
      numbers.push(applyOperator(a, operator, b));
    }

    // Result is the only number remaining in the numbers stack
    return numbers.pop();
  }
  setResult(calculateResult(display));

  return <div>{isClicked && result}</div>;
}

export default Result;
