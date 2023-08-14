const fs = require("fs");
const lodash = require("lodash");
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
  console.log(wordsLength(data));
  console.log(reverseData_(data));
  console.log("          -----------------               ");
  console.log(withoutRepetitions_(data));
  console.log(lengthWithoutRepetitions_(data));
  console.log(uppercaseSpecial_(data));
  console.log(vowels_(data));
});

const wordsLength = (data) => {
  return lodash.words(data).length;
};

const reverseData_ = (data) => {
  let reverseData = data.split(" ");
  reverseData = lodash.reverse(reverseData);
  reverseData = reverseData.join(" ");
  return reverseData;
};
const withoutRepetitions_ = (data) => {
  return lodash.uniq(lodash.words(data)).join(" ");
};
const lengthWithoutRepetitions_ = (data) => {
  return lodash.words(withoutRepetitions_(data)).length;
};

const uppercaseSpecial_ = (data) => {
  let  withoutRepetitions = withoutRepetitions_(data).split(" ")
  let uppercaseSpecial = withoutRepetitions.map((ele) => ele.toUpperCase());
  uppercaseSpecial = uppercaseSpecial.join(" ");
  return uppercaseSpecial;
};

const vowels_ = (data) => {
    let  withoutRepetitions = withoutRepetitions_(data).split(" ")
    let vowels = withoutRepetitions.map((ele) => {
        return { word: ele, vowelCount: ele.match(/[aeiou]/gi).length };
      });
      return vowels
}
