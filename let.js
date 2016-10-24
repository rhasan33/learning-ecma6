"use strict";

/**
 * let's see what is the purpose of using let
 *
 * this is a way of variable declaration in ECMAScript 6
 * it is changed from the "var" things
 * it will work only within one scope or block
 *
 * now let's check the use of "let" :-)
 */

let name = "Rakib Hasan Amiya";

/**
 * here name is declared outside any block or scope
 *
 * it can be accessible from any part of the code base
 */

function myName() {
    let name = "Modon Kumar Lal";

    return name;
}

/**
 * let's do some console log
 *
 * the first one will show the value which is acquired from the global name scope
 *
 * so the value will be "Rakib Hasan Amiya"
 */
console.log(name);

/**
 * what do you expect now?
 *
 * it will show the value that is assigned in the function named myName as expected
 *
 */
console.log(myName());

/**
 * now comes the funny matter.
 *
 * the value for the variable "name" changed in the myName function
 * but it will show the value "Rakib Hasan Amiya". why?
 *
 * let works in a specific scope
 * so the value we are getting is from the global variable "name" (the first one)
 */
console.log(name);

/**
 * check out the "letPuzzle" function
 *
 * here I write two variables in root scope first
 * then do some change the value in the if statement
 *
 * hope you understand why it's behaving like that. :-)
 */
function letPuzzle() {
    let male = true;
    let quote = "I am a man";

    console.log('\nBefore the if statement: ', quote);

    if(male) {
        /**
         * commenting out the redeclaration will show the value set in the global scope.
         */
        let quote = "I have already told you I am a man";
        console.log("\nInside if statement: ", quote);
    }

    console.log("\nOutside if statement: ", quote);
}

letPuzzle();