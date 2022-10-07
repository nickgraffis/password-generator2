// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]


function getRandomInt(max) {
  return Math.ceil(Math.random() * max)
}

// Function to generate password
function generatePassword() {
  // Step 1 Ask if how many characters does the user want the password to be?
  var passwordLength = prompt('How many characters would you like your password to be? (8 - 128)', '12')
  // Step 2 Ask if the user wants to use uppercase
  var useUppercase = confirm('Would you like to include uppercase letters?')
  // Step 3 Ask if the user wants to use lowercase
  var useLowercase = confirm('Would you like to include lowercase letters?')
  // Step 4 Ask if the user wants to use numbers
  var useNumbers = confirm('Would you like to include numbers?')
  // Step 5 Ask if the user wants to use special chars
  var useSpecialChars = confirm('Would you like to include special characters?')

  // Arrange the proper characters and letters and numbers, into a data structure, that we can extract 
  // a random character for each number of the length.

  // Create the structure of potential characters
  var potentialChars = []
  if (useUppercase) {
    potentialChars = potentialChars.concat(uppercase)
  } 

  if (useLowercase) {
    potentialChars = potentialChars.concat(lowercase)
  }

  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers)
  }

  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special)
  }

  // Create the password of "passwordLength" length

  var password = ''
  for (var i = 0; i < passwordLength; i++) {
    password = password + potentialChars[getRandomInt(potentialChars.length)]
  }

  return password
}