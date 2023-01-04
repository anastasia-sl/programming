// Replace substring with newstr

const replace = (str, substr, newstr) => {
  if (typeof str !== 'string' || typeof substr !== 'string' || typeof newstr !== 'string') {
    throw new Error('Arguments must be type String');
  }

  if (substr === '') {
    return str;
  }

  let result = str;

  do {
    const startIndex = result.indexOf(substr);

    if (startIndex === -1) {
      return result;
    }

    const startSubstr = result.substring(0, startIndex);
    const endSubstr = result.substring(startIndex + substr.length, result.length);
    result = startSubstr + newstr + endSubstr;
  } while (true);
};


console.log(replace('Hello <username> and bye!', '<username>', 'Marcus') === 'Hello Marcus and bye!');
console.log(replace('Hello X and bye!', 'X', 'Marcus') === 'Hello Marcus');
console.log(replace('Hello X', 'Y', 'Marcus') === 'Hello X');
