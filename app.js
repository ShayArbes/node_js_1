// const fs = require('fs');
// const lodash = require('lodash');
// fs.readFile('data.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   let reverseData = lodash.reverse(data);
//   let withoutRepetitions = lodash.uniq(data);
//   console.log(data);
//   console.log(data.length);
//   console.log(reverseData);
//   console.log(withoutRepetitions);
  


// });
const fs = require('fs');
const lodash = require('lodash');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let reverseData = data.split(" ");
  console.log(reverseData);
  let lengthData = reverseData.length
  reverseData =lodash.reverse(reverseData);
  reverseData =reverseData.join(' ');
  let withoutRepetitions = lodash.uniq(data.split(" "));
  withoutRepetitions = withoutRepetitions.join(' ');
  console.log(data);
  console.log(lengthData);
  console.log(reverseData);
  console.log(withoutRepetitions);
});

