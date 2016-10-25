"use strict";

/**
 * spread operator
 *
 * think about a function that takes four params as number and return the sum of them
 * now instead of having three separate values, we pass an array named array
 *
 * to pass the array to the sum function we needed to break down the array and pass the value one by one
 * for example sum(array[0], array[1], array[2] ....)
 *
 * with the new ES6 feature we can just put three dots before the array variable and pass it to the function
 * this is called spread operator
 *
 * that will separate the array value and pass it to the function
 * no need to break down the array anymore. sweet. :-)
 */
let sum = (a, b, c, d) => a + b + c + d;

let array = [2, 4, 6, 8];

console.log(sum(...array));

/**
 * while building frontend things sometimes we need to push array elements to another array's specific element
 * for that we needed to do one heck of stuffs
 *
 * for example first we needed to slice the array to get the desired property
 * after that take the position of the property and push the new array after that property
 * and last combine the array
 *
 * in es6 this is a very easy game
 * thank to the spread operator for that
 *
 * just need to add the array after the selected property with spread operator
 *
 * see the example below.
 *
 * here is an array lang1 that holds three values
 * in second array named combine I want to push the first array after php
 *
 * so it looks like this:
 */

let lang1 = ['js', 'python', 'java'];

let combine = ['php', ...lang1, 'scala', 'ruby'];

console.log(combine);