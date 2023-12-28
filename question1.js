function reverseString(str) {
  let reverseStr = "";

  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(reverseString("Hello"));
