function reverseString() {
    const str = document.getElementById("stringInput").value;
    const reversedString = str.split("").reverse().join("");
    document.getElementById("reversedString").innerHTML = reversedString;
  }