"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIdValue = void 0;
function* generateIdValue(index) {
    let i = index;
    while (true) {
        yield i;
        i += 1;
    }
}
exports.generateIdValue = generateIdValue;
//# sourceMappingURL=randomGen.js.map