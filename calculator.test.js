import {calculator} from './calculator';

test.skip('addition', ()=>{
    expect(calculator().addition(1,2)).toBe(3);
})

test.skip('subtraction', ()=>{
    expect(calculator().subtraction(1,2)).toBe(-1);
})

test.skip('multiplication', ()=>{
    expect(calculator().multiplication(1,2)).toBe(2);
})

test.skip('division', ()=>{
    expect(calculator().division(1,2)).toBe(0.5);
})
