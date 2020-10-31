const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(str, key) {
      if (typeof str === 'undefined' || typeof key === 'undefined') {
        throw new Error();
      }
      let data = {
          result: [],
          index: 0,
      };
      for (let i = 0; i < str.length; i++) {
          if (str[i].match(/[A-Za-z]/)) {
              let codeCharSymbol = str[i].toUpperCase().charCodeAt();
              data.result[i] = String.fromCharCode(
                  ( codeCharSymbol + (key[data.index % key.length].toUpperCase().charCodeAt())
                      - 65 * 2) % 26 + 65);
              data.index++;
          } else {
              data.result[i] = str[i];
          }
      }
      if (this.bool) {
          return data.result.join('');
      } else {
          return data.result.reverse().join('');
      }
  }
  decrypt(newStr, key) {
      if (typeof newStr === 'undefined' || typeof key === 'undefined') {
        throw new Error();
      }
      let data = {
          result: [],
          index: 0,
      };
      for (let i = 0; i < newStr.length; i++) {
          if (newStr[i].match(/[A-Za-z]/)) {
              let codeCharSymbol = newStr[i].toUpperCase().charCodeAt();
              data.result[i] = String.fromCharCode(Math.abs(
                  codeCharSymbol - (key[data.index % key.length].toUpperCase().charCodeAt())
                  + 26) % 26 + 65);
              data.index++;
          } else {
              data.result[i] = newStr[i];
          }
      }
      if (this.bool) {
          return data.result.join('');
      } else {
          return data.result.reverse().join('');
      }
  }
}

module.exports = VigenereCipheringMachine;
