// const person = {
//     name: 'afsara',
//     age: 24
// };

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}
module.exports = Person;