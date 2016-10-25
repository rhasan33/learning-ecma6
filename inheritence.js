"use strict";

class Food {

    constructor(name, calorie) {

        this.name = name;
        this.calorie = calorie;

    }

    getFoodInfo() {

        console.log(`
        This is: ${this.name}.
        The total got total of ${this.calorie} calories food value.
        `)

    }

    getJouleValue() {

        let juole = 4.184;

        console.log(`${this.name}'s the joule value is: ${juole * this.calorie}`)
    }

}

class FastFood extends Food {

    constructor(name, calorie, ingredients) {

        super(name, calorie);

        this.components = ingredients;

    }

    getComponents() {

        console.log(`${this.name} needs ${this.components} to make it ready.`)

    }

}

let rice = new Food('Rice', 130);
rice.getFoodInfo();
rice.getJouleValue();

console.log("..........");

let burger = new FastFood('Ham Burger', 295, 'Beef, Lettuce etc');
burger.getFoodInfo();
burger.getJouleValue();
burger.getComponents();