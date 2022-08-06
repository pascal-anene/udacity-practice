/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here

// remove "Blackberry"
const removeBlackBerry = rainbow.splice(2,1);

console.log(rainbow);

// add "Yellow" and "Green"
rainbow.splice(2,0,"Yellow","Green");

console.log(rainbow);

// This method call is similar to adding an element at a specific index;
// The second arg must be equal to 0
rainbow.splice(5,0,"Purple");

console.log(rainbow);


