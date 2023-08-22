export const generatePassword = () => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+{}[]~-";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  for (let i = 4; i < 8; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
};
