const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should take a string as an argument and return a new reversed version of the string", () => {
      let str = "hello";
      let revStr = "olleh";
      let result = new Algo().reverse(str);
      expect(result).toEqual(revStr);

    });
  });

  describe("isPalindrome", () => {
   it("should take a string as an argument and return the boolean value 'true' if the provided string is a palindrome", () => {
      let str = "racecar";
      let result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
   });

   it ("should take a string as an argument and return the boolean value 'false' if the provided string is not a palindrome", () => {
      let str = "hello";
      let result = new Algo().isPalindrome(str);
      expect(result).toEqual(false);
   });
  });

  describe("capitalize", () => {
    it("should take a string as an argument and return a new string with the first letter of each word capitalized", () => {
      let str = "hello world";
      let capitalized = "Hello World";
      let result = new Algo().capitalize(str);
      expect(result).toEqual(capitalized);
    });
  });
});