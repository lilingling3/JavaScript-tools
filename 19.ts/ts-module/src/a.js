"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function whatsYourName(name) {
    console.log(name);
}
exports.whatsYourName = whatsYourName;
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
exports.default = ZipCodeValidator;
//# sourceMappingURL=a.js.map