
const fs = require('fs');
const lodash = require('lodash');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let reverseData = data.split(" ");
  console.log(reverseData);
  let lengthData = reverseData.length
  reverseData =lodash.reverse(reverseData);
  reverseData =reverseData.join(' ');
  let withoutRepetitions = lodash.uniq(lodash.words(data));
  let uppercaseSpecial = withoutRepetitions.filter((ele)=>{
    if(ele.length>5){
        return ele;
    }
})
uppercaseSpecial = uppercaseSpecial.map((ele) => ele.toUpperCase());
  withoutRepetitions = withoutRepetitions.join(' ');
  console.log(data);
  console.log(lodash.words(data).length);
  console.log(reverseData);
  console.log("          -----------------               ");
  console.log(withoutRepetitions);
  console.log(lodash.words(withoutRepetitions).length);
  console.log(uppercaseSpecial.join(' '));
  
});

