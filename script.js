// Assignment Code (button)
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var pwReturn = "";

function generatePassword() {
  var userChoice = window.prompt("How many characters? 8 to 128");
  // if (userChoice< 8 || userChoice> 128);
  // alert("Please choose between 8 and 128 characters");
  
  // } else if {
    // if (userChoice> 8 || userChoice< 128);
    confirm("Would you like to include upper case letters?"); 
 
    confirm("Include lower case letters?");

    confirm("Include numbers?");

    confirm("Include symbols");

}
 



// Write password to the #password input - given info
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button - given info
generateBtn.addEventListener("click", writePassword);
