// Assignment Code 
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
 // choose password criteria
var pwLength = prompt("How many characters would you like? Between 8 and 128");

// validation for length between 8 and 128
var pwLength = parseInt(prompt("How many characters would you like? Between 8 and 128"));
  // prompt("Select between 8 and 128 characters");
  if (!pwLength) {
          alert("This needs a value");
      } else if (enter < 8 || enter > 128) {
  
          pwLength = parseInt(prompt("You must choose between 8 and 128"));
      
// confirm if upper case letters should be included
if (confirm("Would you like to include upper case letters?")); 
//
// confirm if lower case letters should be included
if (confirm("Would you like to include lower case letters?"));

// confirm if numbers should be included
if (confirm("Would you like to include numbers?"));

// confirm if special characters should be included
if (confirm("Would you like to include special characters?"));


      };
 
var password = "Password to be generated" // this should be generated dynamically from the above code
return pwLength;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





















// arrays for characters
// function generatePassword() {
//   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//   var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// }

// var passwordLength = prompt ("How many characters do you want your password to be?");
// var passwordUpper = prompt ("Do you want your password to contain upper case letters?");
// var passwordLower = prompt ("Do you want your password to contain lower case letter?");
// var passwordSpecial = prompt ("Do you want your password to contact special characters?");
// var passwordNumber = prompt ("Do you want your password to contain numbers?");



// function lowerCase () {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  
  // }
  
  // function upperCase () {
  //   return String.fromCharCode(Math.floor(Math.random() * 65) + 97);
  
  // }
  
  // function specialCharacter () {
  //   return String.fromCharCode(Math.floor(Math.random() * 33) + 15)
  //   return String.fromCharCode(Math.floor(Math.random() * 58) + 7)  
    
  
  // }
  
  // function number () {
  //   return String.fromCharCode(Math.floor(Math.random() * 48) + 10);
  
  // }
  
  
  // console.log(specialCharacter());