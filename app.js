
const Utils = require("./utils")
const lodashModule = require("./lodashModule");
const fs = require("fs")

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  let uppercaseSpecial  = Utils.uppercaseSpecial_(data)
  let lengthWithoutRepetitions  = lodashModule.lengthWithoutRepetitions_(data)
  let vowels  = Utils.vowels_(data);

  console.log(data);
  console.log(lodashModule.wordsLength(data));
  console.log(lodashModule.reverseData_(data));
  console.log("          -----------------               ");
  console.log(lodashModule.withoutRepetitions_(data));
  console.log(lengthWithoutRepetitions);
  console.log(uppercaseSpecial);
  console.log(vowels);
  
     

    fs.writeFile('message.txt',uppercaseSpecial +"\n" +lengthWithoutRepetitions +"\n" + JSON.stringify(vowels) , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });
});










// const wordsLength = (data) => {
//   return lodash.words(data).length;
// };

// const reverseData_ = (data) => {
//   let reverseData = data.split(" ");
//   reverseData = lodash.reverse(reverseData);
//   reverseData = reverseData.join(" ");
//   return reverseData;
// };
// const withoutRepetitions_ = (data) => {
//   return lodash.uniq(lodash.words(data)).join(" ");
// };
// const lengthWithoutRepetitions_ = (data) => {
//   return lodash.words(withoutRepetitions_(data)).length;
// };

// const uppercaseSpecial_ = (data) => {
//   let  withoutRepetitions = withoutRepetitions_(data).split(" ")
//   let uppercaseSpecial = withoutRepetitions.map((ele) => ele.toUpperCase());
//   uppercaseSpecial = uppercaseSpecial.join(" ");
//   return uppercaseSpecial;
// };

// const vowels_ = (data) => {
//     let  withoutRepetitions = withoutRepetitions_(data).split(" ")
//     let vowels = withoutRepetitions.map((ele) => {
//         return { word: ele, vowelCount: ele.match(/[aeiou]/gi).length };
//       });
//       return vowels
// }
