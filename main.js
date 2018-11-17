/************************************
 * 1. Write a function that rounds a number to given decimal places.
 */
const roundToNearest = (n, roundTo) => n.toFixed(roundTo);
console.log(roundToNearest(5.678, 2));

/************************************
 * 2. Write a function that merges multiple given arrays
 */
let mergedArray = [];
const mergeArrays = (arr1, arr2) => (mergedArray = [...arr1, ...arr2]);
mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(mergedArray);

/************************************
 * 3. Write a function to sum the content of an array.
 */
let addedArr = 0;
const arraySum = arr => {
  arr.forEach(n => {
    addedArr += n;
  });
};
arraySum([1, 2, 3]);
console.log(addedArr);

/************************************
 * 4. Write a forEach function that works with Objects.
 */
const obj = {
  firstName: 'Jesus',
  title: 'King of Kings'
};
const objectForEach = object => {
  for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
};
objectForEach(obj);

/************************************
 * 5. Write a function that reverse a string.
 */
const revString = str =>
  str
    .split('')
    .reverse()
    .join('');
console.log(revString('Mikey'));

/************************************
 * 6. Write a function that checks if a word is a palindrome
 */
const isPalendrome = word =>
  word
    .split('')
    .reverse()
    .join('') === word
    ? 'true'
    : 'false';
console.log(isPalendrome('racecar'));

/************************************
 * 7. Write a function that checks if a number is multiple of another number
 */
const isMultipleOf = (n, nOf) => (n % nOf === 0 ? 'true' : 'false');
console.log(isMultipleOf(15, 3));

/************************************
 * 8. Write a function that returns the longest word of a sentence
 */
const findLongestWord = sentence => {
  let longestWord;
  //  convert sentence into array then loop over each word to find largest
  sentence.split(' ').forEach(word => {
    longestWord = word;
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  console.log(longestWord);
};
findLongestWord('I eat bread');

/************************************
 * 9. Write a function that capitalizes the beginning of each word in a sentence
 */
const capWords = sentence => {
  let cappedSentence;
  sentence.split(' ').forEach(word => {
    cappedSentence += `${word.charAt(0).toUpperCase()}${word.slice(1)} `;
  });
  console.log(cappedSentence);
};
capWords('happy happy joy joy');

/************************************
 * 10. Write a function that count vowel in a sentence
 */
const vowelCount = word => {
  let numOfVowels = 0;

  word.split('').forEach(ltr => {
    if (
      ltr === 'a' ||
      ltr === 'e' ||
      ltr === 'i' ||
      ltr === 'o' ||
      ltr === 'u'
    ) {
      numOfVowels++;
    }
  });
  console.log(numOfVowels);
};
vowelCount('eater');

/************************************
 * 11. Get the most used char in a sentence
 */
const mostUsed = sentence => {
  let count = {};
  let maxChar = '';
  let maxCharVal = 0;

  // loop through each letter and get count, store in an object
  sentence.split('').forEach(char => {
    count[char] ? count[char]++ : (count[char] = 1);
  });

  // Find the largest value and assign it to variables
  for (letter in count) {
    if (count[letter] > maxCharVal) {
      maxCharVal = count[letter];
      maxChar = letter;
    }
  }
  console.log(`${maxChar} : ${maxCharVal}`);
};
mostUsed('hello world'); // -> l : 3

/************************************
 * 12.  Fizz Buzz game, generate number from 0 to 100 and if the number is multiple of 3 print "Fizz",
 *      if mutliple of 5 print "Buzz", if is multiple of both print "FizzBuzz" else print the number
 */
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} : FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`${i} : Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} : Fizz`);
  } else {
    console.log(i);
  }
}

/************************************
 * 13. Write a function that sums all numbers from 0 to the given number.
 */
const addToNum = num => {
  const numArr = [...Array(num + 1).keys()];
  let sumOfNum = 0;

  numArr.forEach(num => {
    sumOfNum += num;
  });
  console.log(sumOfNum);
};
addToNum(3);

/************************************
 * 14. Transform an array into a tree like object
 */
const arrayToTree = (...arr) => {
  let result = [],
    container = { result };

  arr.forEach(path => {
    path.reduce((r, name, i) => {
      if (!r[name]) {
        let o = {
            name
          },
          children = [];

        r[name] = {
          result: children
        };

        if (path[i + 1]) {
          o.children = children;
        }

        r.result.push(o);
      }
      return r[name];
    }, container);
  });

  console.log(result);
};
arrayToTree(['folder', 'subfolder', 'file.txt']); //=> [{name: 'folder', children: [ { name: 'subfolder', children: [ {name: 'file.txt'} ]} ]}]

/************************************
 * 15. Write a function that can be used into an Array.sort() for sorting items alphabetically
 */
const arr = ['Italy', 'Canada', 'Germany'];
const sortedArr = arr.sort();
console.log(sortedArr);

/************************************
 * 16. Write a function that returns the furst recurring character in a string
 */
const firstRecurringChar = str => {
  const firstLetter = str.charAt(0);
  console.log(firstLetter);
};
firstRecurringChar('Jesus');

/************************************
 * 17. Write a function that returns an object that includes all given objects
 */
const user = [{ first: 'John' }, { last: 'Smith' }];

const objectMerge = input => {
  let finalObj = {};

  input.forEach((obj, i) => {
    finalObj[i] = obj;
  });
  console.log(finalObj);
};
objectMerge(user);
