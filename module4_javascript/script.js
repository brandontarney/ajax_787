// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1 (DONE):
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function(window) {
  var script = {}
  script.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10 (DONE):
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  // See Lecture 50, part 1
  for (idx in script.names) {
    // console.log(script.names[idx]);

    // STEP 11 (DONE):
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    // var firstLetter =
    var firstLetter = script.names[idx].charAt(0).toLowerCase();
    // console.log(firstLetter);

    // STEP 12 (DONE):
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter === "j") {
      window.byeSpeaker.speak(script.names[idx])

    } else {
      window.helloSpeaker.speak(script.names[idx])
      script.greetings = script.names.map(window.helloSpeaker.speakSimple);
    }
  }

  //Extra stuff using Array.prototype.map()
  function makeGreeting(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      return (window.byeSpeaker.speakSimple(name));
    } else {
      return (window.helloSpeaker.speakSimple(name));
    }
  }
  script.greetings = script.names.map(makeGreeting)
  console.log(script.greetings)

  //Extra stuff using Array.prototype.reduce()
  script.splitGreetings = script.greetings.reduce(function(prevVal, elem) {
    var firstLetter = elem.charAt(0).toLowerCase();
    if (firstLetter === "g") {
      prevVal.bye.push(elem);
    } else {
      prevVal.hello.push(elem);
    }
    return prevVal;
  }, {
    hello: [],
    bye: []
  });

  console.log(script.splitGreetings.hello)
  console.log(script.splitGreetings.bye)


  window.script = script

})(window);
