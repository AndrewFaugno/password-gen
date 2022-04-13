// button location
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")


var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "~`! @#$%^&*()_-+={[}]|:\;\"'<,>.?/";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var combineAll = numbers.concat(lowerCase, special, upperCase);


// generate password with different options
function writePassword() {
  var passwordLength = window.prompt("Enter Password Length (8-128)");
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * combineAll.length);
    password += combineAll.substring(randomNumber, randomNumber + 1);
  }  

  // asigns print location to var
  var passwordText = document.querySelector("#password");

  // prints password in box
  passwordText.value = password;

}

// copies password to clipboard
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  window.alert("Copied to Clipboard!");
}

// run function on generate password button click
generateBtn.addEventListener("click", writePassword);
// run function on copy button click
copyBtn.addEventListener("click", copyPassword)





