/*
 * Programming Quiz: 99 Bottles of Juice
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output
 */


let num = 99;

// declare variable to handle edge cases for bottle(s) pluralization
let vesselPlural = "bottles";
let vesselSingular = "bottle";

// to avoid hard coding strings in the loop, each part of the message is stored in a string (Plurals)
let messageFirstPartPlural = `${vesselPlural} of juice on the wall!`;
let messageSecondPartPlural = `${vesselPlural} of juice! Take one down, pass it around...`;
let messageThirdPartPlural = `${vesselPlural} of juice on the wall!`;

// to avoid hard coding strings in the loop, each part of the message is stored in a string (Singular)
let messageFirstPartSingular = `${vesselSingular} of juice on the wall!`;
let messageSecondPartSingular = `${vesselSingular} of juice! Take one down, pass it around...`;
let messageThirdPartSingular = `${vesselSingular} of juice on the wall!`;

// initialize an empty string to hold the final message
let finalMessage = "";


while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num

    // This will account for the last iteration with occurences of: bottle, bottle, bottleS
    if (num === 1){

        finalMessage = `${num} ${messageFirstPartSingular} ${num} ${messageSecondPartSingular} ${num - 1} ${messageThirdPartPlural}`;
        console.log(finalMessage);

    
    }// This will account for the second to last iteration with occurences of: bottleS, bottleS, bottle
    else if(num === 2){

        finalMessage = `${num} ${messageFirstPartPlural} ${num} ${messageSecondPartPlural} ${num - 1} ${messageThirdPartSingular}`;
        console.log(finalMessage);


    }// This will account for iteration with normal occurences: bottleS, bottleS, bottleS
    else{

        finalMessage = `${num} ${messageFirstPartPlural} ${num} ${messageSecondPartPlural} ${num - 1} ${messageThirdPartPlural}`;
        console.log(finalMessage);

    }

    num--;

}