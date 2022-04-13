// button location
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// checkboxes locations
var upperCb = document.querySelector("#check-upper");
var lowerCb = document.querySelector("#check-lower");
var numberCb = document.querySelector("#check-number");
var specialCb = document.querySelector("#check-special");

// password length number location (above slider)
var output = document.getElementById("counter");

// changes number when slider is moved
var slider = document.getElementById("myRange").oninput = function() {
  var value = (this.value - this.min)/(this.max - this.min)*100;
  output.innerHTML = this.value;
}

// generate password with different options
function writePassword() {

    // check if checkboxes are checked then either add them or not to passwordString
    if (upperCb.checked) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      var upperCase = "";
    }
  
    if (lowerCb.checked) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      var lowerCase = "";
    }
  
    if (numberCb.checked) {
      var numbers = "0123456789";
    } else {
      var numbers = "";
    }
  
    if (specialCb.checked) {
      var special = "~`!@#$%^&*_-+=|',.?/";
    } else {
      var special = "";
    }

    // final passwordString var
    var passwordString = lowerCase.concat(upperCase, special, numbers);

    // picks a random char from string n times
    var password = "";
    for (var i = 0; i < counter.textContent; i++) {
      var randomNumber = Math.floor(Math.random() * passwordString.length);
      password += passwordString.substring(randomNumber, randomNumber + 1);
      
      // assigns print location to var
      var passwordText = document.querySelector("#password");

      // prints password in box
      passwordText.value = password;
    }
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
copyBtn.addEventListener("click", copyPassword);

