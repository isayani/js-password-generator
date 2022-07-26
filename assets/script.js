// Query selector for the button
var generateBtn = document.querySelector("#generate");

// Password character arrays
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","#","$","%","&","*","(",")","@"];
var characterCodes = Array.from(Array(26)).map((_,i) => i +97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

// Function to generate random password
function generateRandom(arr) {
  let randomValue = arr[Math.floor(Math.random() * arr.length)];

  var randomIndex = Math.floor(Math.random() * arr.length);

  return {
    randomValue,
    randomIndex
  };
}

// Conditional Parameters
var createPassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) =>{
  var availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []), 
    ...(hasLowercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : []),
  ];

  var hiddenPassword = "";
  
  if(availableCharacters.length === 0) return "";

  for(var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    hiddenPassword += availableCharacters[randomIndex];
  }

  return hiddenPassword;
}

// Function to generate prompts and password with parameters
function generatePassword() {
  var lengthChar = prompt("Please enter a password length between 8 and 128");
  

  if(!lengthChar ) {
    alert("You must enter a value");
  } else if (isNaN(lengthChar) || lengthChar < 8 || lengthChar > 128){
    alert("Password must be between 8 and 128!");
  } else {
    var confirmNum = confirm("Do you want numbers in your password?");
    var confirmUpper = confirm("Do you want uppercase letters in your password?");
    var confirmLower = confirm("Do you want lowercase letters in your password?");
    var confirmSpecial = confirm("Do you want special characters in your password?");
  };
  
  if (lengthChar > 8 && lengthChar < 128 && !confirmNum && !confirmUpper && !confirmLower && !confirmSpecial) {
    alert("You must choose at least one criteria!");
  } else {
    return  createPassword(lengthChar, confirmNum, confirmSpecial, confirmLower, confirmUpper);
}}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate function on button click
generateBtn.addEventListener("click", writePassword);
