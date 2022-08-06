/*
 * Programming Quiz: Building the Crew (6-2)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - The variable `crew` should be an array containing the Serenity\'s crew
 * - Your code should print `crew` to the console as an array. Do not iterate over the elements. 
 * 
    const captain = "Mal";
    const second = "Zoe";
    const pilot = "Wash";
    const companion = "Inara";
    const mercenary = "Jayne";
    const mechanic = "Kaylee";
 * 
 */
 
 
 

// your code goes here


//Array declaration using literal syntax 
 const crewNames = [
                "Mal",
                "Zoe",
                "Wash",
                "Inara",
                "Jayne",
                "Kaylee"];


//Array declaration using constructor syntax 
const crewNamesSame = new Array(
                "Mal",
                "Zoe",
                "Wash",
                "Inara",
                "Jayne",
                "Kaylee"
);

// Print all names from array, crewNames, created with literal syntax 
for (let index = 0; index < crewNames.length; index++){
    // console.log(crewNames[index] + "\n\n"); // add new line to create spacing :)
}

// Print all names from array, crewNamesSame, created with constructor
for(let index = 0; index < crewNamesSame.length; index++){
    // console.log(crewNamesSame[index] + "\n\n");
}

/**
 * Repeating the same steps above for the roles of each of the actors
 */

//Array declaration using literal syntax 
 const crewRoles = [
            "captain",
            "second",
            "pilot",
            "companion",
            "mercenary",
            "mechanic"];


//Array declaration using constructor syntax 
const crewRoleSame = new Array(
            "captain",
            "second",
            "pilot",
            "companion",
            "mercenary",
            "mechanic"
);



// Print all names from array, crewRoles, created with literal syntax 
for (let index = 0; index < crewRoles.length; index++){
    // console.log(crewRoles[index] + "\n\n"); // add new line to create spacing :)
}

// Print all names from array, crewRolesSame, created with constructor
for(let index = 0; index < crewRoleSame.length; index++){
    // console.log(crewRoleSame[index] + "\n\n");
}

/**
 * combining both crew role and name by using the variables directly
 * 
 */

 const captain = "Mal";
 const second = "Zoe";
 const pilot = "Wash";
 const companion = "Inara";
 const mercenary = "Jayne";
 const mechanic = "Kaylee";

 const crew = [
                captain,
                second,
                pilot,
                companion,
                mercenary,
                mechanic
              ];

// Log or Print the Array
 console.log(crew);

//Print each value of the Array
for(let index = 0; index < crew.length; index++){
    console.log(crew[index]);
}