import hello from '/hello.js';
import w from '/w.js';
// w() imports the other letters and returns world
console.log(hello( w() ));