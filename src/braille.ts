export class BrailleCodeGenerator {
  //used [method chaining] to implement addBrailleCode

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

  /**
   * @returns String output after encoded or decoded operation
   */
  output() {
    return console.log(this.outputResult);
  }

  /**
   *
   * @param message Pass a sentence or word as an arugment to the fxn(convertToBraille)
   * and have it converted to BrailleCode Characters
   */
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

  /**
   *
   * @param brailleCodeExpression Array argument which takes (3) strings to
   * and add it to a Map which would be decoded to to Alphabetic Character
   * @returns  A Map of String Array
   */
  addBrailleCode(brailleCodeExpression: [string, string, string]) {
    this.userEnteredBrailleCodes.set(
      BrailleCodeGenerator.brailleCodeCount++,
      brailleCodeExpression
    );
    return this;
  }

  /**
   * @returns An Map of empty String array to allow for
   * formatting output
   */
  space() {
    this.userEnteredBrailleCodes.set("", "  ");
    return this;
  }

  /**
   * @returns  Alphabetic Character of keyed in BrailleCodes
   */
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
