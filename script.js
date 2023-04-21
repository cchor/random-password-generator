// Assignment Code (button)
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var pwReturn = "";

function generatePassword(length) {

  // var password ="";
  // var passwordCharacter ="";
  // var randomPw = "";
  // var pwReturn = "";
var minlength = 8;
var maxlength = 128;

  // how many characters
  prompt("How many characters? 8 to 128")
  // verify character count found on https://www.w3resource.com/javascript/form/string-length.php
  function stringlength(inputtxt, minlength, maxlength)
  { 
  var field = inputtxt.value; 
  var mnlen = minlength;
  var mxlen = maxlength;
  
  if(field.length< 8 || field.length> 128)
  { 
  alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
  return false;
  }

}
}
  // uppercase?
  var upperCaseconfirm = ("Include upper case?");
  // lowercase?
  var lowerCaseconfirm = ("Include lower case?");
  // numbers?
  var numbersConfirm = ("Include numbers?");
  // special characters?
  var specialCharactersconfirm = ("Include special characters?");

//   if (upperCaseconfirm) {
//     pwReturn += upperCase;
// }

//   if (lowerCaseconfirm) {
//     pwReturn += lowerCase;
// }

// if (numbersConfirm) {
//   pwReturn += number;
// }

// if (specialCharactersconfirm) {
//   pwReturn += specialCharacter;
// }

// // Generates a random password based on the criteria that have been selected
// for (var i = 0; i < passwordLength; i++) {
//     // Continues to select a random character value from the string until it is the desired length
//     randomPw += pwReturn.charAt(Math.floor(Math.random() * pwReturn.length));
// }
// password.value = pwReturn;

// return "generated" 

// }


// Write password to the #password input - given info
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
