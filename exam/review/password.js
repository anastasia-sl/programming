// Generate random password

const generatePassword = (alphabet, length = 8) => {
  if (!Array.isArray(alphabet) && typeof alphabet !== 'string') {
    throw new Error('Argument [alphabet] is not an Array or String');
  }

  if (typeof length !== 'number') {
    throw new Error('Argument [length] is not number');
  }

  const MAX = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    password += alphabet[index];
  }

  return password;
};

console.log(generatePassword('ASDFGHJKLasdfghjkl123456789'));
console.log(generatePassword('ASDFGHJKLasdfghjkl123456789', 6));
console.log(generatePassword(['a', 'b', 'c', 'd', '1','2','3', '4', '5'], 6));
