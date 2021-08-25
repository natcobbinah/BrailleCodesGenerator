export declare class BrailleCodeGenerator {
    brailleCodesMap: Map<any, any>;
    userEnteredBrailleCodes: Map<any, any>;
    outputResult: string;
    static brailleCodeCount: number;
    constructor();
    output(): void;
    convertToBraille(message: string): void;
    addBrailleCode(brailleCodeExpression: [string, string, string]): this;
    space(): this;
    converToCharacterString(): this;
}
