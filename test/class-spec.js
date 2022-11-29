const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let akhar = new Word("kuchnhi");
      expect(akhar).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      let akhar = new Word("KuchTaHaiga");
      expect(akhar.word).to.equal("KuchTaHaiga");

    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let akhar = new Word("KuchtaHaiga");
      expect(akhar.removeVowels()).to.equal("KchtHg");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word = new Word("TheWord");
      expect(word.removeConsonants()).to.equal("eo")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word = new Word("TheNewWord");
      let otherWord = new Word("eNew");
      expect(word.pigLatin()).to.equal("eNewWordThay");
      expect(otherWord.pigLatin()).to.equal("eNewyay")
    });
  });
});