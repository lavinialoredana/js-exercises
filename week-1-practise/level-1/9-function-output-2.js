function s(w1, w2) {
    return w1.concat(w2);
    //return (w1 + w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
// - How many parameters does the function take? A: the function takes 2 parameters: w1 & w2
// - What is the function name? A: the function's name is s
// - Where is the function called? with what parameters? A: the function is called in the variable result and its parameters "code" & "your" (better called arguments as their value has now been defined)
// - What does the function return? A: returns astring that contain the concatenation of two strings: w1 & w2
// - How can this function be improved? A: return (w1+w2);