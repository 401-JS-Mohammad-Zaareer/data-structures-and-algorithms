'use strict';
const Queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Queue;

class AnimalShelter {
    constructor(){
        this.cats = new Queue();
        this.dogs = new Queue();
    }    
    enqueue(animal){
        if(animal.type === 'cat') {
            this.cats.enqueue(animal);
        } else if(animal.type === 'dog') {
            this.dogs.enqueue(animal);
        } else {
            throw new Error('Cats and Dogs only!');
        }
    };
    dequeue(pref) {
        let dequeued;
        if(pref === 'cat') {
            dequeued = this.cats.dequeue();
        } else if(pref === 'dog') {
            dequeued = this.dogs.dequeue();
        } else {
            return null;
        }
        return dequeued;
    };
}

class Animal {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
}

module.exports = {
    Animal, AnimalShelter
}

const animal1 = new Animal('FoFo', 'whit', 'cat');
const animal2 = new Animal('LoLo', 'black', 'cat');
const animal3 = new Animal('KoKo', 'Cinnamon', 'cat');
const animal4 = new Animal('SoSo', 'fawn', 'dog');
const animal5 = new Animal('ZoZo', 'honey', 'dog');

const shelter = new AnimalShelter();

shelter.enqueue(animal1);
shelter.enqueue(animal2);
shelter.enqueue(animal3);
shelter.enqueue(animal4);
shelter.enqueue(animal5);

console.log(shelter.dequeue('cat')); // Animal { name: 'FoFo', color: 'whit', type: 'cat' }
console.log(shelter.dequeue('dog')); // Animal { name: 'SoSo', color: 'fawn', type: 'dog' }