// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  console.log(str);
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
var lettersArray = str.split("");
console.log(lettersArray);
lettersArray[0] = lettersArray[0].toUpperCase();
console.log(lettersArray);
var output =lettersArray.join("")
return output;

  // complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
console.log(mentors);

var mentorsTidy = mentors.map(tidyUpString);
console.log(mentors);
var mentorsTidyAndCapitalised = mentorsTidy.map(captialise);


/*console.log(captialise("antoniu"));
console.log(captialise("Antonio"));*/

console.log(captialise(mentors[1]));

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
