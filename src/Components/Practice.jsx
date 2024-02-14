// As soon as user clicks on the = button control goes to handleResult() function.

// import { useEffect } from "react";

// function handleResult(){
//     if(display === '0'){
//         throw new Error;
//     }

//     const inValidChars = ['+', '-', '*', '/', '%', '^', 'R']
//     const lastChar = display.charAt(display.length-1)
//     if(inValidChars.includes(lastChar)){
//         throw new Error
//     }

//     const chars = ['+', '-', '*', '/', '%', '^','R']
//     const containesAnyOperator = () => {
//         for(let char of chars){
//             if(dis.includes(char)){
//                 return true
//             }

//         }
//         return false
// }

//     if(!containesAnyOperator){
//         throw new Error
//     }

//     setISClicked(true)
// }

// useEffect(() => {
//     if(isClicked)
//         setResult(calculateResult(display))
// }, [display, isClicked])

// function calculateResult(expression){
//     const tokens = expression.match(['\/+|']);

//     const precedence = {
//         "+": 1,
//         "-": 1,
//         // and so on.
//     }

//     const applyOperators = (a, operator, b){
//         switch (operator){
//             case '+':
//                 return a+b
//         } // and son on for others
//     }
//     const numbers=[]
//     const opeartors = []
//     let nextElement;
//     for(let token of tokens){
//         if(!isNaN(parseFloat(token))){
//             if(parseFloat(token) === parseFloat(nextElement)){
//                 continue
//             }
//             numbers.push(parseFloat(token))
//         }
//         else if(token === 'R'){
//             const index=tokens.indexOf(token)
//             nextElement=tokens[index+1]
//             numbers.push(Math.sqrt(parseFloat(nextElement)))
//         }
//         else{
//             while(opeartors.length > 0 && precedence[opeartors[opeartors.length -1]] >= precedence(token)){
//                 const operator = opeartors.pop()
//                 const b = numbers.pop()
//                 const a=numbers.pop()
//                 numbers.push(applyOperators(a,operator,b))
//             }
//             opeartors.push(token)
//         }
//     }
//     return numbers.pop()
// }
