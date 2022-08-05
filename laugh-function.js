/*
 * Programming Quiz: Laugh it Off 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()`
 */

// your code goes here

// function declaration with parameter
function laugh(num){

    // variable to build the number of ha's
    let laughter = "";

    //variable to hold the final output
    let finalSound ="";

    for(let i = 1; i <= num; i++){

        laughter += "ha";

    }

    finalSound = laughter + "!";

    return finalSound;

}

// test code
console.log(laugh(0)) 
console.log(laugh(3)) 
console.log(laugh(4)) 
console.log(laugh(8)) 
