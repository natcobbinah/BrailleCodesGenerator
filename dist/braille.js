"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrailleCodeGenerator = void 0;
const randomGen_1 = require("./randomGen");
class BrailleCodeGenerator {
    constructor() {
        //used [method chaining] to implement addBrailleCode
        this.brailleCodesMap = new Map();
        this.userEnteredBrailleCodes = new Map();
        this.outputResult = "";
        this.randomNumberiterator = randomGen_1.generateIdValue(Math.random() * 1009723);
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
    convertToBraille(message) {
        let sentence = message.split("");
        sentence.forEach((letter) => {
            this.brailleCodesMap.forEach((brailleCode, alphabetCharacter) => {
                if (letter === alphabetCharacter) {
                    console.log(`${letter}`);
                    brailleCode.forEach((codeSymbol) => {
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
    addBrailleCode(brailleCodeExpression) {
        this.userEnteredBrailleCodes.set(BrailleCodeGenerator.brailleCodeCount++, brailleCodeExpression);
        return this;
    }
    /**
     * @returns An Map of empty String array to allow for
     * formatting output
     */
    space() {
        this.userEnteredBrailleCodes.set(this.randomNumberiterator.next().value, [" ", " ", " "]);
        return this;
    }
    /**
     * @returns  Alphabetic Character of keyed in BrailleCodes
     */
    converToCharacterString() {
        let brailleCharactersArray = [];
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
exports.BrailleCodeGenerator = BrailleCodeGenerator;
BrailleCodeGenerator.brailleCodeCount = 0;
//# sourceMappingURL=braille.js.map