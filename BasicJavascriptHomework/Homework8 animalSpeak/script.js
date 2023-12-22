



let greet = prompt("What should the dogs greet you with");

class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
    speak(greet) {
        console.log(`The ${this.kind} named ${this.name} is saying ${greet}`);
    }


}

const animal1 = new Animal("Marko", "lion");
const animal2 = new Animal("Mario", "dog");
const animal3 = new Animal("Marie", "cat");
const animal4 = new Animal("Anthony", "worm");
const animal5 = new Animal("George", "tiger");

console.log(animal1);
console.log(animal2);
console.log(animal3);
console.log(animal4);
console.log(animal5);

animal1.speak(greet);
animal2.speak(greet);
animal3.speak(greet);
animal4.speak(greet);
animal5.speak(greet);

