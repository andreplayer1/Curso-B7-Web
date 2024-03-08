class Person {

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number'){
        this.age = newAge
    } else {
        console.log('Idade deve conter somente números.')
    }
    }
}

let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

p1.setAge('abc');

console.log(`${p1.name} tem ${p1.age} anos de idade`)