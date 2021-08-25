export declare class BrailleCodeGenerator {
    brailleCodesMap: Map<any, any>;
    userEnteredBrailleCodes: Map<any, any>;
    outputResult: string;
    static brailleCodeCount: number;
    constructor();
    /**
     * @returns String output after encoded or decoded operation
     */
    output(): void;
    /**
     *
     * @param message Pass a sentence or word as an arugment to the fxn(convertToBraille)
     * and have it converted to BrailleCode Characters
     */
    convertToBraille(message: string): void;
    /**
     *
     * @param brailleCodeExpression Array argument which takes (3) strings to
     * and add it to a Map which would be decoded to to Alphabetic Character
     * @returns  A Map of String Array
     */
    addBrailleCode(brailleCodeExpression: [string, string, string]): this;
    /**
     * @returns An Map of empty String array to allow for
     * formatting output
     */
    space(): this;
    /**
     * @returns  Alphabetic Character of keyed in BrailleCodes
     */
    converToCharacterString(): this;
}
