export declare function whatsYourName(name: string): void;
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export declare const numberRegexp: RegExp;
declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
export default ZipCodeValidator;
