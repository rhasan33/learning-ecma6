"use strict";

/**
 * learning template literals
 * we all use this concatenation for javascript for ages
 *
 * here a variable called "name" declared and concatenated
 */
let name = "Rakib Hasan Amiya";

console.log(name + " is a one hell of a learner");

/**
 * instead of using single quote or double quote, we gonna use backticks
 * first put a dolor sign and then wrap the variable with curly braces
 * and that will do the concatenation task for you.
 *
 * really cool. :-)
 */
console.log(`${name} is a one hell of a learner`);

/**
 * we all find it messy when need to add new lines in js
 * now ES6 comes with a feature where a single enter will understand the new line.
 *
 * easy peasy. :-)
 */
console.log(`${name} is a one hell of a learner.
Also try to be a good guy.`);