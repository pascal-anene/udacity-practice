/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

// your code goes here

// Logical and Conditional expressions for "S" or small sizes
let smallShirtWidthOkay = shirtWidth >= 18 && shirtWidth < 20 ; 
let smallShirtLengthOkay = shirtLength >= 28 && shirtLength < 29;
let smallShirtSleeveOkay = shirtSleeve >= 8.13 && shirtSleeve < 8.38;

let smallShirtOkay = smallShirtWidthOkay && smallShirtLengthOkay && smallShirtSleeveOkay; 

//Logical and Conditional expressions for "M" or medium sizes
let mediumShirtWidthOkay = shirtWidth >= 20 && shirtWidth < 22 ; 
let mediumShirtLengthOkay = shirtLength >= 29 && shirtLength < 30;
let mediumShirtSleeveOkay = shirtSleeve >= 8.38 && shirtSleeve < 8.63;

let mediumShirtOkay = mediumShirtWidthOkay && mediumShirtLengthOkay && mediumShirtSleeveOkay; 

// Logical and Conditional expressions for "L" or large sizes
let largeShirtWidthOkay = shirtWidth >= 22 && shirtWidth < 24 ; 
let largeShirtLengthOkay = shirtLength >= 30 && shirtLength < 31;
let largeShirtSleeveOkay = shirtSleeve >= 8.63 && shirtSleeve < 8.88;

let largeShirtOkay = largeShirtWidthOkay && largeShirtLengthOkay && largeShirtSleeveOkay; 

// Logical and Conditonal expressoins for "XL" or xtra large sizes
let xlargeShirtWidthOkay = shirtWidth >= 24 && shirtWidth < 26 ; 
let xlargeShirtLengthOkay = shirtLength >= 31 && shirtLength < 33;
let xlargeShirtSleeveOkay = shirtSleeve >= 8.88 && shirtSleeve < 9.63;

let xlargeShirtOkay = xlargeShirtWidthOkay && xlargeShirtLengthOkay && xlargeShirtSleeveOkay; 

// Logical and Conditional expressions for "2XL" or xtra-xtra large sizes
let xxlargeShirtWidthOkay = shirtWidth >= 26 && shirtWidth < 28 ; 
let xxlargeShirtLengthOkay = shirtLength >= 33 && shirtLength < 34;
let xxlargeShirtSleeveOkay = shirtSleeve >= 9.63 && shirtSleeve < 10.13;

let xxlargeShirtOkay = xxlargeShirtWidthOkay && xxlargeShirtLengthOkay && xxlargeShirtSleeveOkay;

// Logical and Conditional expressions for "3XL" or xtra-xtra-xtra large sizes
let xxxlargeShirtWidthOkay = shirtWidth >= 28; 
let xxxlargeShirtLengthOkay = shirtLength >= 34;
let xxxlargeShirtSleeveOkay = shirtSleeve >= 10.13;

let xxxlargeShirtOkay = xxxlargeShirtWidthOkay && xxxlargeShirtLengthOkay && xxxlargeShirtSleeveOkay;


if(smallShirtOkay === true) {
    console.log("S");
} else if (mediumShirtOkay === true) {
    console.log("M");
} else if (largeShirtOkay === true) {
    console.log("L");
} else if (xlargeShirtOkay === true) {
    console.log("XL");
} else if (xxlargeShirtOkay === true) {
    console.log("2XL");
} else if (xxxlargeShirtOkay === true) {
    console.log("3XL");
} else {
    console.log("NA");
}