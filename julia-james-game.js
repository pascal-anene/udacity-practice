/*
 * Programming Quiz: JuliaJames
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 */
 
let x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames

    if (x % 3 === 0){
        console.log("Julia");
    } else if(x % 5 === 0){
        console.log("James");
    } else if((x % 3 === 0) && (x % 5 === 0)){
        console.log("JuliaJames");
    }else {
        console.log(x);
    }

    // increment x
    x = x + 1;
}

