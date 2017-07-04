/* eslint-disable no-param-reassign */
class Calculator {
  calc(inputStr) {
    while (/\(/.test(inputStr)) {
      inputStr = inputStr.replace(/\(([^()]+)\)/, (str, p1) => this.calc(p1));
    }

    if (/\+/.test(inputStr)) {
      return inputStr.split(/\+/).reduce((ret, part) => ret + this.calc(part), 0);
    }

    if (/-/.test(inputStr)) {
      return inputStr.split(/-/).reduce((ret, part, idx) => (
        idx === 0
          ? ret + this.calc(part)
          : ret - this.calc(part)
      ), 0);
    }

    if (/\*/.test(inputStr)) {
      return inputStr.split(/\*/).reduce((ret, part, idx) => (
        idx === 0
          ? ret + this.calc(part)
          : ret * this.calc(part)
      ), 0);
    }
    if (/\//.test(inputStr)) {
      return inputStr.split(/\//).reduce((ret, part, idx) => (
        idx === 0
          ? ret + this.calc(part)
          : ret / this.calc(part)
      ), 0);
    }

    return Number(inputStr);
  }
  calcWithVars(inputList) {
    const defined = {};

    return inputList.map((input) => {
      const [, variable, expression] = input.match(/^([a-z]+) = (.+)$/);

      const replaced = Object.keys(defined).reduce((ret, key) =>
        ret.replace(new RegExp(`\\b${key}\\b`), defined[key])
      , expression);

      defined[variable] = this.calc(replaced);

      return defined[variable];
    });
  }
}

export default Calculator;
