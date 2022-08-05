/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as described above
 */


// creates a line of * for a given length
function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}


// your code goes here.  Make sure you call makeLine() in your own code.

// Uses the makeLine() helper function to fomr the full triangle
function buildTriangle(widthNum) {

    // Empty string to hold the final triangle 
    let finalTriangle = "";

    // the topmost line will start from one
    let firstLineNum = 1;

    //Initialize the starting point with firstLineNum 
    for(let i = firstLineNum; i <= widthNum; i++){
        finalTriangle += makeLine(i);
    }

    return finalTriangle;
}


// test your code 
console.log(buildTriangle(10));