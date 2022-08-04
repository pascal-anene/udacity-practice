/*
 * Programming Quiz: Countdown, Liftoff!
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output
 */

// your code goes here
// count time for the last 60 seconds of Space Shuttle liftoff
let countTime = 60;

//initialize variable to hold task message 
let taskMessage = "";


while (countTime >= 0){

    // first we try an if___else approach 

    // Prints out message for T-50
    if(countTime === 50){

        taskMessage = "Orbiter transfers from ground to internal power";
        console.log(taskMessage);

    // Prints out message for T-31
    } else if(countTime === 31){

        taskMessage = "Ground launch sequencer is go for auto sequence start";
        console.log(taskMessage);

    // Prints out message for T-16
    } else if(countTime === 16){

        taskMessage = "Activate launch pad sound suppression system";
        console.log(taskMessage);

    // Prints out message for T-10
    } else if(countTime === 10){

        taskMessage = "Activate main engine hydrogen burnoff system";
        console.log(taskMessage);

    // Prints out message for T-6
    } else if(countTime === 6){

        taskMessage = "Main engine start";
        console.log(taskMessage);

    // Prints out message for T-1, to handle singular "second" (UX/UI best practice)
    } else if(countTime === 1){

        taskMessage = `T-${countTime} second`;
        console.log(taskMessage);

    // Prints out message for T-0
    } else if (countTime === 0){

        taskMessage = "Solid rocket booster ignition and liftoff!";
        console.log(taskMessage);

    // Prints out message for other time counts
    } else {

        taskMessage = `T-${countTime} seconds`;
        console.log(taskMessage);

    }

    countTime--;
}




 
