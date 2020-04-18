
//Log the Apollo 11 countdown, use the message provided as the last output. It starts from 8 till 0!

var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;


while (countdown >= 0){
    console.log( countdown);
    countdown -= 1;
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





