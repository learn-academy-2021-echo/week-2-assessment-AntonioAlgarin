// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

//create test cases with describe, it, and expect statements
describe("divBy3", () => {
  it ("decides if the number is evenly divisible by three or not", () => {
      //set expect to check if the variable being passed is divisible by 3
      expect(divBy3(num1)).toEqual("15 is divisible by three")
      expect(divBy3(num2)).toEqual("0 is divisible by three")
      expect(divBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.

//creates function divBy3
const divBy3 = (number) => {
  //set conditional to check if argument is evenly divisible by 3
  if (number % 3 === 0){
    //if number modulo 3 equals 0, return number is divisble by three
    //else, return number is not divisible by three
    return `${number} is divisible by three`
  } else {
      return `${number} is not divisible by three`
  }
}

//verified function and test cases passed

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//create test cases with describe, it, and expect statements
describe("capFirst", () => {
  it("returns an array with all the words capitalized", () => {
    //set expect to return an array with the first letter capitalized
    expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.

//creates function capFirst
const capFirst = (array) => {
  //use .map() method to iterate the length of the array
  //use .toUpperCase() method to capitalize the first letter
  //use .substring() method to return the remainder of the string
  return array.map(value => value[0].toUpperCase() + value.substring(1, value.length))
}

//verified function and test cases passed

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//create test cases with describe, it, and expect statements
describe("firstVowel", () => {
  it("logs the index of the first vowel", () => {
    //set expect to return the index location of the first vowel
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})
// b) Create the function that makes the test pass.

const firstVowel = (string) => {
  //create for loop to iterate the length of the string
  for (var i = 0; i < string.length; i++){
    //set conditional statement to check for the index of the first vowel
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
    //return index location
    //we only care to check for the first vowel in the string
    return string.indexOf(string[i])
    }
  }
}
////verified function and test cases passed
