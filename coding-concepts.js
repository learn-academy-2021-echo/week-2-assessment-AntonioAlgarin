// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: I'm expecting the code to split the string and return [E,c,h,o, , 2,0,2,1]
// b) Verify and explain: This is true because the .split() method takes a string and turns it into an array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
  console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: Oops. This will return undefined because it's missing a return statement.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: 8, 10, 12, 14, 16
// b) Verify and explain: This is true because .map() will iterate the length of the array and multiply each value by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: This is true because .filter() will iterate the length of the array and return the values that match the conditional


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: This is true because you're logging the 0th index of the value located at the key "languages", within the myCodingSkills object which in this case returns "JavaScript"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: George, cohort: Delta, year: 2021}
// b) Verify and explain: Interesting, I didn't think Learn would be returned before the object values. It's a good way to verify what class what called so you can verify the output is returning what you expected.
