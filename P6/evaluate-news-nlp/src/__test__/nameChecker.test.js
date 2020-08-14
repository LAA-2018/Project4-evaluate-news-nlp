import { checkForName } from "../client/js/nameChecker"


    test("Testing the checkForName() function", () => {
        const url = 'https://markmanson.net/self-awareness';
        expect(checkForName(url)).toBe(true);
});