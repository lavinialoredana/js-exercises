//Using a switch statement call the matching operative system function for each system:

// windows
// linux
// osx
// Consider also the case where other values can be passed to the init function, if the system is not supported call the function prompt

function startWindows() {
    console.log("Windows has started");
  }
  function startLinux() {
    console.log("Linux has started");
  }
  function startOSX() {
    console.log("OSX has started");
  }
  function prompt() {
    console.log("The OS provided is not supported");
  }
  
  function init(os) {
    // write your code here
    switch(os){
        case "windows":
            startWindows();
            break;
        case "linux":
            startLinux();
            break;
        case"osx":
             startOSX();
             break;
         default:
             prompt();
             break;
    }

  }
  
  init("linux");
  init("osx");
  init("other");


//Expected output
// Linux has started
// OSX has started
// The OS provided is not supported
