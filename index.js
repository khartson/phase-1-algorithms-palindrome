function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split("").reverse().join('')) 
    return true;  
  return false; 
}

/* 
  Add your pseudocode here
  reverse argument string with string.split.reverse.join
  if string === reverse string
  return true

  return false
*/

/*
  Add written explanation of your solution here
  Reverse the string using a built in method or string iteration. Then,
  compare the string to its original value, returning true or false depending 
  on if they match 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
