'use strict';

const {Animal, AnimalShelter} = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('Testing AnimalShelter class interface', ()=>{
    const animalShelter = new AnimalShelter();
    it('Can enqueue cats', ()=>{
        const newCat1 = new Animal('FoFo', 'whit', 'cat');
        const newCat2 = new Animal('LoLo', 'black', 'cat');
        animalShelter.enqueue(newCat1);
        animalShelter.enqueue(newCat2);
        expect(animalShelter.cats.size).toEqual(2);
    });
    
    it('Can enquee dogs', ()=> {
        const newDog1 = new Animal('DoDo', 'brown', 'dog');
        const newDog2 = new Animal('GoGo', 'black', 'dog');
        animalShelter.enqueue(newDog1);
        animalShelter.enqueue(newDog2);
        expect(animalShelter.dogs.size).toEqual(2);
    });
    it('Can dequeue cats', ()=>{
        animalShelter.dequeue('cat');
        expect(animalShelter.cats.size).toEqual(1);
    });
    it('Can dequeue dogs', ()=>{
        animalShelter.dequeue('dog');
        expect(animalShelter.dogs.size).toEqual(1);
    });
    it('Should return null when trying to enueue another animal', ()=> {
        expect(animalShelter.dequeue('kitten')).toBe(null);
    })
});