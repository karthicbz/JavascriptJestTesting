import {reverseString} from './reverseString';

test.skip('reverse the string', ()=>{
    expect(reverseString('minivan')).toBe('navinim');
})

test.skip('spaces should be included', ()=>{
    expect(reverseString('oil can')).toBe('nac lio');
})

test.skip("don't reverse numbers", ()=>{
    expect(reverseString(12345)).toBe('not a string');
})