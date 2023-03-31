
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ';', ':', '"', ',', '<', '.', '>', '/', '?', '[', '{', ']', '}', '|'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passwordLenght = 8;
var userChoice = [];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var rightPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
    var getPassword = generatePassword();
    passwordText.value = getPassword;
  } else {
    passwordText.value = '';
  }
}

function getPrompts() {
  userChoice = [];
  characterLenght = parseInt(prompt('!!! Choose an amount of characters desired for your password !!!'));

  if (isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {
    alert('!!! Your Password must be between 8 and 128 characters. !!!');
    return false;
  }

  if (confirm('Would you like UPPERcase letters ???')) {
    userChoice = userChoice.concat(upperCase);
  }
  if (confirm('Would you like lowercase letters ???')) {
    userChoice = userChoice.concat(lowerCase);
  }
  if (confirm('Would you like symbols ???')) {
    userChoice = userChoice.concat(symbols);
  }
  if (confirm('Would you like numbers ???')) {
    userChoice = userChoice.concat(numbers);
  }
  return true;
}

function generatePassword() {
  var password = '';

  for (var i = 0; i < characterLenght; i++) {
    var random = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[random];
  }
  return password;
}