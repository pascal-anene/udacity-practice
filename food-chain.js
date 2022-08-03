/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
const eatsPlants = false;
const eatsAnimals = false;
let category;


/*
    Refactoring Chunks for Ternary Operator:

     eatsPlants ? "herbivore" : undefined;
     eatsAnimals ? "carnivore" : undefined;
     eatsAnimals && eatsPlants ? "omnivore" : undefined;

*/

// Control Flow for Organism Classification 
category = eatsPlants  ? "herbivore" : eatsAnimals ? "carnivore" : eatsAnimals && eatsPlants ? "omnivore" : undefined ;



console.log(category);

/**
 * Another Possible Solution is:
 * category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")

    Notice the nesting logic eliminates the need for the logical && operator
 */