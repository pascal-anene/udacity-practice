/*
 * Programming Quiz: Laugh it Off 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()`
 *
 * 
 * * REFACTORING REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */




// your code goes here

// function declaration with parameter

//change the functon to an anonymous functon by storing in a variable called laugh

let laugh = function(num){

    // variable to build the number of ha's
    let laughter = "";

    //variable to hold the final output
    let finalSound ="";

    for(let i = 1; i <= num; i++){

        laughter += "ha";

    }

    finalSound = laughter + "!";

    return finalSound;

};

// test code
console.log(laugh(0)) 
console.log(laugh(3)) 
console.log(laugh(4)) 
console.log(laugh(8)) 

// laugh(0);
// laugh(3);
// laugh(4);
// laugh(8);

