function sortString() {
    const inputElement = document.getElementById("inputString");
    const inputString = inputElement.value;
    if (inputString.trim() === "") {
        alert("Please enter a valid string.");
        return;
    }
    const sortedString = inputString.split("").sort().join("");
    const sortedStringElement = document.getElementById("sortedString");
    sortedStringElement.textContent = "Sorted String: " + sortedString;
}