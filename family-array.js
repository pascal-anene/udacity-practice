/*
 * Programming Quiz: UdaciFamily (6-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 */


// your code goes here

//Declaration using an array literal syntax
// const udaciFamily = ["Julia","James","Pascal"];

//Declaration using an array constructor 
const udaciFamily = new Array("Julia","James","Pascal");


for(let index = 0; index < udaciFamily.length; index++){

    let familyMember = "";

    familyMember = udaciFamily[index];

    console.log(familyMember);

}

