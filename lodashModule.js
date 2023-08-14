
const lodash = require('lodash');
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

  module.exports = {wordsLength, reverseData_, withoutRepetitions_, lengthWithoutRepetitions_};