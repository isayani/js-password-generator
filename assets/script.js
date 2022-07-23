// Query selector for the button
var generateBtn = document.querySelector("#generate");

// Password character arrays
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","#","$","%","&","*","(",")","@"];
var characterCodes = Array.from(Array(26)).map((_,i) => i +97);
console.log(characterCodes);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


// Write password to the #password input
function writePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}








// Conditional Operator Statements
var writePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) =>{
  var availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : []),
  ];

  var hiddenPassword = "";
  
  if(availableCharacters.length === 0) return "";
  
  for(var i = 0; i <length; i++){
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    hiddenPassword += availableCharacters[randomIndex];
  }
  return hiddenPassword;
}

console.log(writePassword(12, true, true, true, true));
   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
