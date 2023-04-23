// Assignment Code (button)
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// character variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var newPassword = [];

function generatePassword() {

  // variables for question prompts
  var charCount = prompt("How many characters? 8 to 128");
  var upperChoice = confirm("Would you like to include upper case letters?"); 
  var lowerChoice = confirm("Include lower case letters?");
  var symbolChoice = confirm("Include symbols?");
  var numberChoice = confirm("Include numbers?");

if(charCount < 8 || charCount > 128) {
  charCount = parseInt(prompt("How many characters? 8 to 128"));

  return;
}
  // conditional statements for questions
  if (upperChoice) {
    newPassword = newPassword.concat(upperCase);
  }

  if (lowerChoice) {
    newPassword = newPassword.concat(lowerCase);
  }

  if (symbolChoice){
    newPassword = newPassword.concat(specialCharacter);
}

if (numberChoice){
  newPassword = newPassword.concat(number);
}

if (number){
  newPassword = newPassword.concat(number);
}



return newPassword;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var pwLength = "";
for(var i = 0; i < pwLength; i++) {
  var pwLength = Math.floor(Math.random *charCount.length);
  pwLength = pwLength + charCount[random];
}


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
