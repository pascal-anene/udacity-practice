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

    // first we try an if___else approach (check commit on Github)
    //Now we refactor to Swith Statement

    switch(countTime){

        case 50:
            taskMessage = "Orbiter transfers from ground to internal power";
            console.log(taskMessage);
            break;
        
        case 31:
            taskMessage = "Ground launch sequencer is go for auto sequence start";
            console.log(taskMessage);
            break;

        case 16:
            taskMessage = "Activate launch pad sound suppression system";
            console.log(taskMessage);
            break;

        case 10:
            taskMessage = "Activate main engine hydrogen burnoff system";
            console.log(taskMessage);
            break;

        case 6:
            taskMessage = "Main engine start";
            console.log(taskMessage);
            break;

        case 1:
            taskMessage = `T-${countTime} second`;
            console.log(taskMessage);
            break;

        case 0:
            taskMessage = "Solid rocket booster ignition and liftoff!";
            console.log(taskMessage);
            break;

        default:
            taskMessage = `T-${countTime} seconds`;
            console.log(taskMessage);


    }

    --countTime;

}




 
