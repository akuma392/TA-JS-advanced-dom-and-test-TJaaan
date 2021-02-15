function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function palindrome(number) {
  let temp = number;
  let final;

  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }

  if (number == final) {
    return true;
  } else {
    return false;
  }
}

// const pi = 3.14;

// function getCircumfrence(rad) {
//   return `The circumference is ${2 * pi * rad}`;
// }

// function getArea(rad) {
//   return `The area is ${pi * rad * rad}`;
// }

// function average(a, b) {
//   return a + b / 2;
// }

// function longestWord(arr) {
//   let longWord = '';

//   arr.forEach((elm, i) => {
//     if (elm.length > longWord.length) {
//       longWord = elm;
//     }
//   });
//   return longWord;
// }

// module.exports = getFullName;
module.exports = {
  palindrome,
  getFullName,
  // getArea,
  // average,
  // longestWord,
  // getCircumfrence,
};
// module.exports = getCircumfrence;
// module.exports = getArea;
// module.exports = average;
// module.exports = longestWord;
