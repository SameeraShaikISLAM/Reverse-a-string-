

ffunction reverseString(str) {
    return str.split("").reverse().join("");
  }
  var sayIt = prompt("Enter a string")
  console.log(reverseString(sayIt))