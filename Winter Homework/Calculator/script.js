const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");


function calculateExpression(exp) {
  let tokens = exp.split(/([+\-*/])/);
  let total = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    let nextNum = parseFloat(tokens[i + 1]);

    switch (operator) {
      case '+': total += nextNum; break;
      case '-': total -= nextNum; break;
      case '*': total *= nextNum; break;
      case '/':

        if (nextNum !== 0) total /= nextNum;
        else alert("Cannot divide by zero");
        break;
      default: break;
    }
  }
  return total;
}

buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = this.value;
    let text = display.textContent.trim();
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {

      display.textContent = calculateExpression(text);
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});
