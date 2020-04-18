// An array of mentor names has been provided to you, as well as a function to tidy up strings.
// Declare a  new array (`mentorsTidy`) containing:
// - every item from `mentors` run through the `tidyUpString` function
// TIP: Use the .map() method

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
//var Daniel= tidyUpString(mentors[0]);

var mentorsTidy = mentors.map(tidyUpString); // ONLY EDIT THIS LINE

console.log(mentorsTidy);

/* 
  EXPECTED RESULT
  ---------------
  ["daniel", "irina", "gordon", "ashleigh"]
*/


   //LEARNING:

 // .MAP is a method that always receives a FUNCTION as a parameter and so it calls the function to each of the items in the Array.
// one only provides the name of the function ex: tidyUpString, not CALLS it ex: tidyUpString(str)

//var Daniel= tidyUpString(mentors[0])  - this is how you indicate one specific item within an array 