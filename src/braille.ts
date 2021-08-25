export class BrailleCodeGenerator {
  brailleCodesMap = new Map();
  userEnteredBrailleCodes = new Map();
  outputResult: string = "";
  static brailleCodeCount = 0;

  constructor() {
    this.brailleCodesMap
      .set("a", ["● .", ". .", ". ."])
      .set("b", ["● .", "● .", ". ."])
      .set("c", ["● ●", ". .", ". ."])
      .set("d", ["● ●", ". ●", ". ."])
      .set("e", ["● .", ". ●", ". ."])
      .set("f", ["● ●", "● .", ". ."])
      .set("g", ["● ●", "● ●", ". ."])
      .set("h", ["● .", "● ●", ". ."])
      .set("i", [". ●", "● .", ". ."])
      .set("j", [". ●", "● ●", ". ."])
      .set("k", ["● .", ". .", "● ."])
      .set("l", ["● .", "● .", "● ."])
      .set("m", ["● ●", ". .", "● ."])
      .set("n", ["● ●", ". ●", "● ."])
      .set("o", ["● .", ". ●", "● ."])
      .set("p", ["● ●", "● .", "● ."])
      .set("q", ["● ●", "● ●", "● ."])
      .set("r", ["● .", "● ●", "● ."])
      .set("s", [". ●", "● .", "● ."])
      .set("t", [". ●", "● ●", "● ."])
      .set("u", ["● .", ". .", "● ●"])
      .set("v", ["● .", "● .", "● ●"])
      .set("x", ["● ●", ". .", "● ●"])
      .set("y", ["● ●", ". ●", "● ●"])
      .set("z", ["● .", ". ●", "● ●"]);
  }

  output() {
    return console.log(this.outputResult);
  }

  convertToBraille(message: string) {
    let sentence = message.split("");
    sentence.forEach((letter) => {
      this.brailleCodesMap.forEach((brailleCode, alphabetCharacter) => {
        if (letter === alphabetCharacter) {
          console.log(`${letter}`);
          brailleCode.forEach((codeSymbol: any) => {
            console.log(`${codeSymbol}`);
          });
        }
      });
      console.log("");
    });
  }

  addBrailleCode(brailleCodeExpression: [string, string, string]) {
    this.userEnteredBrailleCodes.set(
      BrailleCodeGenerator.brailleCodeCount++,
      brailleCodeExpression
    );
    return this;
  }

  space() {
    this.userEnteredBrailleCodes.set("", "  ");
    return this;
  }

  converToCharacterString() {
    let brailleCharactersArray: Array<String> = [];
    let spaceChar = "";

    this.userEnteredBrailleCodes.forEach((brailleCode, index) => {
      this.brailleCodesMap.forEach((value, value_Letter) => {
        if (JSON.stringify(brailleCode) == JSON.stringify(value)) {
          brailleCharactersArray.push(value_Letter.toLowerCase());
        }
      });
      brailleCharactersArray.push(spaceChar);
    });
    this.outputResult = brailleCharactersArray.join(" ");
    return this;
  }
}

let braille = new BrailleCodeGenerator();
braille.convertToBraille("you and me");

braille
  .addBrailleCode(["● .", "● ●", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", ". ●", "● ."])
  .space()
  .addBrailleCode(["● ●", "● .", ". ."])
  .addBrailleCode(["● .", "● ●", "● ."])
  .addBrailleCode([". ●", "● .", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● ●", ". ●", "● ."])
  .addBrailleCode(["● ●", ". ●", ". ."])
  .addBrailleCode([". ●", "● .", "● ."])
  .converToCharacterString()
  .output();
