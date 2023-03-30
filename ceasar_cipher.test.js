import {cipher} from './ceasar_cipher';

test.skip('text wrap from z to a', ()=>{
    expect(cipher('z', 1).transformText()).toMatch('a');
})

test.skip('keeping the punctuation', ()=>{
    expect(cipher('Abc!', 1).transformText()).toMatch('bcd!');
})

test.skip('all text are lowercase', ()=>{
    expect(cipher('defend the east wall of the castle', 5).transformText()).toMatch('ijkjsi ymj jfxy bfqq tk ymj hfxyqj');
})