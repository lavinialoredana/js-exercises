//for LOOPS =  similar to the previous exercise A-while
//Log the Apollo 11 countdown, use the message provided as the last output. It starts from 8 t
//Alternatively we could use a for loop, which will do the same as the while do but in a shorter way:


var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;


for (var countdown = 8; countdown >= 0; countdown -= 1) {
    console.log(countdown);
  }



console.log(apolloCountdownMessage);


// Expected output

//8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// all engine running... LIFT-OFF!
