"use strict";
/**
 * ES6 classes
 * its another cool feature of es6
 * here we can create a class named Programmer
 * inside that we create a constructor method that acquires some params
 *
 * we can assign the param values to the class scope using "this"
 * now this values can be accessible by any function within the class.
 *
 * later on I created two objects that will assign the param value for the Programmer class
 * and call the getInfo() function as we know how to call. :-P
 */

class Programmer{

    constructor(name, position, age, proficiency) {

        this.name = name;
        this.position = position;
        this.age = age;
        this.languages = proficiency;

    }

    getInfo() {

        console.log(`
        Your name is ${this.name}.
        Your position st Inovio is ${this.position}.
        Your age is ${this.age}.
        You know ${this.languages}.
        `);

    }
}

let rakib = new Programmer('Rakib', 'Software Engineer', 26, 'PHP, Python, JS');
rakib.getInfo();

let anis = new Programmer('Anis', 'Frontend Dev', 29, 'React, Angular');
anis.getInfo();