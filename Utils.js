
const lodashModule = require("./lodashModule");

const uppercaseSpecial_ = (data) => {
    let  withoutRepetitions = lodashModule.withoutRepetitions_(data).split(" ")
    let uppercaseSpecial = withoutRepetitions.map((ele) => ele.toUpperCase());
    uppercaseSpecial = uppercaseSpecial.join(" ");
    return uppercaseSpecial;
  };
  
  const vowels_ = (data) => {
      let  withoutRepetitions = lodashModule.withoutRepetitions_(data).split(" ")
      let vowels = withoutRepetitions.map((ele) => {
          return { word: ele, vowelCount: ele.match(/[aeiou]/gi).length };
        });
        return vowels
  }

  module.exports = {uppercaseSpecial_, vowels_};