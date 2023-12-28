//問題：重構這段程式碼並說明原因

//因為單純要將firstName 和 lastName串起來，所以不需要用到if
//或者說在原本的程式碼裡，if不管放什麼string都算true，所以if顯得很多餘

function formatName(firstName, lastName) {
  let formattedName = "";
  formattedName = firstName + " " + lastName;

  return formattedName;
}

console.log(formatName("Wilson", "Ren"));
