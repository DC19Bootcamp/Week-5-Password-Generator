// Function to generate a password
function generatePassword() {
  // Set of characters to choose from based on user criteria
  const characterSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>/?'
  };

  // Prompt user for password length
  let passwordLength = parseInt(prompt('How many characters should the password contain?'));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Please enter a number between 8 and 128.'));
  }

  // Prompt user for character set criteria
  let includeLowercase = confirm('Include lowercase letters?');
  let includeUppercase = confirm('Include uppercase letters?');
  let includeNumeric = confirm('Include numeric characters?');
  let includeSpecial = confirm('Include special characters?');

  // Build character set based on user criteria
  let characterSet = '';
  if (includeLowercase) {
    characterSet += characterSets.lowercase;
  }
  if (includeUppercase) {
    characterSet += characterSets.uppercase;
  }
  if (includeNumeric) {
    characterSet += characterSets.numeric;
  }
  if (includeSpecial) {
    characterSet += characterSets.special;
  }

  // Generate password by randomly selecting characters from the character set
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  return password;
}

// Call the function to generate a password and log the result to the console
let password = generatePassword();
console.log(password);
