import {cipher} from './ceasar_cipher';

test('text wrap from z to a', ()=>{
    expect(cipher('z', 1).transformText()).toMatch('a');
})

test('keeping the punctuation', ()=>{
    expect(cipher('Abc!', 1).transformText()).toMatch('bcd!');
})

test('all text are lowercase', ()=>{
    expect(cipher('defend the east wall of the castle', 5).transformText()).toMatch('ijkjsi ymj jfxy bfqq tk ymj hfxyqj');
})