// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","#","$","%","&","*","(",")","@"];
var characterCodes = Array.from(Array(26)).map((_,i) => i +97);
console.log(characterCodes);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
console.log(lowercaseLetters);
console.log(uppercaseLetters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
