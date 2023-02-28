const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

const valueMorse = {
  10: ".",
  11: "-",
  "**": "*",
  "00": "",
};
function decode(expr) {
  let size = 10;
  const res = [];
  let resultString = "";
  for (let x = 0; x < expr.length / size; x++) {
    res[x] = expr.slice(x * size, x * size + size);
  }
  console.log(res);

  res.forEach((str) => {
    const replacedString = replaceZeroAtStart(str);
    const resplacedCode = replaceNumbersToCode(replacedString);
    resultString += MORSE_TABLE[resplacedCode];
  });
  return resultString;
}

function replaceZeroAtStart(str) {
  if (str.startsWith("00")) {
    return replaceZeroAtStart(str.slice(2));
  }
  return str;
}

function replaceNumbersToCode(str) {
  let tempSymbol = "";
  let start = "";
  let end = str;
  for (let i = 0; i < str.length; i += 2) {
    start = end.slice(0, 2);
    end = end.slice(2);
    tempSymbol += valueMorse[start];
  }
  return tempSymbol;
}

module.exports = {
  decode,
};
