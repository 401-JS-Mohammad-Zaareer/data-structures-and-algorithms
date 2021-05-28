'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Testing multi-brackt validation function', ()=> {
    it('should return valide output', ()=>{
        expect(multiBracketValidation('{}')).toBeTruthy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('{}(){}')).toBeTruthy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('[({}]')).toBeFalsy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('(](')).toBeFalsy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('{(})')).toBeFalsy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('{')).toBeFalsy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation(')')).toBeFalsy();
    });
    it('should return valide output', ()=>{
        expect(multiBracketValidation('[}')).toBeFalsy();
    });
})