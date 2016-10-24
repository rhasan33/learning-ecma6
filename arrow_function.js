"use strict";

/**
 * arrow function
 *
 * for this use case we will use Newton's second law
 * gravitational force is declared by the variable "g"
 * the value of g is constant, that will never gonna change
 */
const g = 9.81;

/**
 * here Force is a function that require a numeric param "m"
 *
 * here m stands for mass
 * now let's make the function work
 * even though it is old way to call a function
 */
function Force1(m) {
    return m * g;
}

console.log('\n', Force1(5));

/**
 * first thing is we declare the Force function that uses one parameter
 * here we can see the fat arrow operator
 * the fat operator refers to the "function" word declaration
 *
 * you can pass multiple params inside the parenthesis separated by commas
 */

let Force2 = (m) => {
    return m * g;
};

console.log("\n", Force2(5));

/**
 * here comes the most interesting part
 * you actually can declare your function in a single line.
 * remember two things, never code like that if
 *
 * 1. your function requires more than one params
 * 2. you need multiple lines of code in your function
 */
let Force3 = (m) => m * g;

console.log("\n", Force3(5));