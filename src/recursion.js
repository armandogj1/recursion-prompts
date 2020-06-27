/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // edge cases
  // if n is less than zero
    // return null as it is not a factorial
  if (n < 0) {
    return null;
  }
  // if it is 0 return one
  if (n === 0) {
    // makes sure that it doesn't recurse infinitely
    return 1;
  }
  // if it makes it pass the edge cases return current value times the function decrease by one

  return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  // check array length is one
  if (array.length === 1) {
    // return result
    return array[0];
  } else {
  // otherwise
    // add the last value to the second to last
    var result = array.slice(0, array.length - 1);
    result[result.length - 1] += array[array.length - 1];
    // return function with modified array
    return sum(result);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // if array length is zero
  if (array.length === 0) {
    return 0;
    // return zero
  }

  if (array.length === 1 && !array.some(value => Array.isArray(value))) {
    // if length is 1 and index value is not a nested array
    // return index 0
    return array[0];
  }

  // if the array has nested values
  if (array.some(value => Array.isArray(value))){
    return arraySum([].concat(...array));
  }
    // otherwise
    // copy the array using concat
    var result = array.slice();
    // remove last and add to second last
    var last = result.pop();
    result[result.length - 1] += last;
    // return arraySum with modified array
    return arraySum(result);
};

// 4. Check if a number is even.
var isEven = function(n) {
  // if zero return true
  if (n === 0) {
    return true;
  }
  // if one return false
  if (n === 1) {
    return false;
  }
  // call function with n - 2 if negative call it with a double negative
  return n < 0 ? isEven(-n) : isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // if n is 0
  if (n === 0) {
    return 0;
  }
  // if n is less than zero
  if (n < -1) {
    return (n+1) + sumBelow(n+1);
  }
  if (n === -1) {
    return 0;
  }
  // if n equal to one
  if (n === 1) {
    return 0;
  }
  // recurse with
  return (n-1) + sumBelow(n-1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (!Array.isArray(x)) {
    if (x === y || x + 1 === y || x - 1 === y) return [];
    // set x to array
    x = [x];
  }
  var temp = x[x.length - 1];

  if (temp === y) {
    return x.slice(1, x.length - 1);
  }

  if (temp > y) {
    return range(x.concat(temp - 1), y);
  }

  return range(x.concat(temp + 1), y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // if base is zero
  if (base === 0) {
    return 0;
  }
  // if exp is 0 return one
  if (exp === 0) {
    return 1;
  }

  // if exp negative divide
  if (exp < 0) {
    // get the divisor
    return 1 / exponent(base, - exp);
  }

  // otherwise call base times function base and exp--
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // if it is one
  if (n === 1) {
    return true;
  }
  // if n less than one
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // if string is empty
  if (string.length < 1) {
    return '';
  }
  // if string is one char
  if (string.length === 1) {
    return string;
  }
  // takes a string
  var last = string.slice(-1);
  //returns a string the last char in the front
  return last + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // if string empty
  if (string.length === 0) {
    return 'false';
  }
  // if string is one char
  if (string.length === 1) {
    return true;
  }
  string = string.toLowerCase();
  string = string.split(" ").join("");
  var first = string.charAt(0);
  var last = string.slice(-1);
  // compares first and last
  if (first !== last) {
    // if not equal returns false
    return false;
  }
  // recurse minus first last
  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
//if the y cannot be substracted evenly
//if x equal 0
//return call x decreased by y and y
// x is negative call it with a negative outside the function
// if y is negative set it to positive
var modulo = function(x, y) {
  if (x < 0) {
    return -modulo(-x, y);
  }
  if (y < 0) {
    y = -y;
  }
  if (x < y) {
    return x;
  }
  if (y === 0) {
    return Number.NaN;
  }
  if (x === y) {
    return 0;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// if x or y is zero
// if y is 1
// if both are negative
// if x is negative
// if y is negative
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (x < 0 && y < 0) {
    return multiply(-x, -y);
  }
  if (x < 0) {
    return -multiply(-x, y);
  }
  if (y < 0) {
    return -multiply(x, -y)
  }
  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// How many times y fit into x
var divide = function(x, y) {
  if (y === 0) {
    return Number.NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (y > x) {
    return 0;
  }
  if (x < 0) {
    return -divide(-x, y);
  }
  if (y < 0) {
    return -divide(x, -y);
  }
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // if x is zero
  if (x === 0) {
    return 1;
  }
  // if y is zero
  if (y === 0) {
    return x;
  };
  // if negative return null
  if (x < 0 || y < 0) {
    return null;
  }
  // if theres a remainder
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // if both strings are empty
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  // if first chars don't match
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false;
  }
  // pass strings minus one
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // if str is a string create array
  if (typeof str === 'string') {
    // if string is empty
    if (str.length === 0) {
      return [];
    }
    // push the first char and the rest of string
    var stringArr = [].concat(str.charAt(0), str.slice(1));
    return createArray(stringArr);
  }
  // otherwise
  // pop last index and turn it back to a string
  var remainingStr = str.pop();
  // is last char is empty
  if (remainingStr.length === 0) {
    // return array
    return str;
  }
  // otherwise
  // take first char from the string push it to array
  // concat remainder
  str = str.concat(remainingStr.charAt(0), remainingStr.slice(1));
  // return createArray with array
  return createArray(str);
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // if the array is empty return empty array
  if (array.length === 0) {
    return [];
  }
  // if the length is one
  if (array.length === 1) {
    return array;
  }
  // otherwise return last with the function concatenated
  return array.slice(-1).concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // if length is zero return empty array
  if (length === 0) {
    return [];
  }
  // if length is one return [value]
  if (length === 1) {
    return [value];
  }
  // otherwise return value plus concat the function call
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var current = n.toString();
  // if n equal 1
  if (n === 1) {
    return current;
  }
  // if n multiple of 3
  if (n % 3 === 0) {
    current = "Fizz";
  }
  // if n multiple of 5
  if (n % 5 === 0) {
    // if it already has Fizz concat Buzz
    current = current === 'Fizz' ? current.concat("Buzz") : "Buzz";
  }

  // return concated invocation with n - 1 and current
  return [].concat(fizzBuzz(n - 1), current);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  // if length is zero return count
  if (array.length === 0) {
    return count;
  }
  // check first index matches and add to count
  if (array[0] === value) {
    count++;
  }
  // return count
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length < 1) {
    return [];
  }
  // if length is one return modified value
  if (array.length === 1) {
    return callback(array[0]);
  }
  // otherwise return the modified plus concated recursion
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  // iterate over the properties
  for (let currentKey in obj) {
    // if key is present add to count
    if (currentKey === key) {
      count++;
    }
    // if value is an object
    if (!Array.isArray(obj[currentKey]) && typeof obj[currentKey] === 'object') {
      // recurse and add to count
      count += countKeysInObj(obj[currentKey], key);
    }
  }
  // return count
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  // iterate over obj
  for (let key in obj) {
    // if value is present add to count
    if (obj[key] === value) {
      count++;
    }
    // if value is an object recurse
    if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  // if array length is zero
  if (array.length === 0) {
    return [];
  }
  // if array is flat
  if (array.every(value => !Array.isArray(value))){
    return array;
  }
  // if array is a nested array
  //split array and concat them together
  var first = array.slice(0, Math.floor(array.length / 2));
  var second = array.slice(Math.floor(array.length / 2));
  var result = [].concat(...first, ...second);
  return flatten(result);
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
