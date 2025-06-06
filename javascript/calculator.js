function calculator(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      return "Cannot divide by zero!";
    }
  } else {
    return "Invalid operator!";
  }

  return result;
}

console.log(calculator(100, 5, "+")); 
console.log(calculator(23, 3, "-")); 
console.log(calculator(40, 40, "*")); 
console.log(calculator(10, 5, "/")); 
