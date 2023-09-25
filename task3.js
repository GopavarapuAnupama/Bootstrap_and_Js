function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    const result = num1 * num2;
    displayResult(result);
}
function divideNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }
    const result = num1 / num2;
    displayResult(result);
}
function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "The Result is: " + result;
}