const lodash = require("lodash");
var moment = require("moment");

moment().format();

let charcater = ["a","b","c","d"];

let chunked = lodash.chunk(charcater,2);



console.log(chunked);

console.log(moment.locale()); 

console.log(moment().format('LT'));