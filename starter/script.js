function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Create an object to store the password options
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
  var password = "";
  var availableChars = "";

  // Define the character sets to use in the password based on the user's input
  if (options.hasSpecialCharacters) {
    availableChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  if (options.hasNumericCharacters) {
    availableChars += "0123456789";
  }
  if (options.hasLowerCasedCharacters) {
    availableChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.hasUpperCasedCharacters) {
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Generate the password using the selected character sets
  for (var i = 0; i < options.length; i++) {
    password += availableChars.charAt(
      Math.floor(Math.random() * availableChars.length)
    );
  }

  return password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
});
