const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';

  for (let i = 0; i < expr.length; i+=10) {
    let char = '';
    const substr = expr.slice(i, i + 10);

    if (substr === '**********') {
      result += ' ';
    } else {
      for (let j = 0; j < substr.length; j+=2) {
        const subchar = substr.slice(-j - 2, substr.length - j);
        char += subchar === '11' ? '-' : subchar === '10' ? '.' : '';
      }

      char = char.split('').reverse().join('');
      result += MORSE_TABLE[char];
    }
  }

  return result;
}

module.exports = {
    decode
}