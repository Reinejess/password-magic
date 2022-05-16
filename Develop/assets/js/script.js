// Assignment code here
// set variables //
var password = []
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialChar = "!@#$%^&*<>?{}-+"
var num = "0123456789"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var length = prompt("Please choose how many characters you would like your password to contain. You can choose between 8 and 128 characters.");
}
  if (length < 8 || length > 128) {
    alert("Not within the password criteria. Try again.");
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
