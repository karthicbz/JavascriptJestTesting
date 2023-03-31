import {reverseString} from './reverseString';

test('reverse the string', ()=>{
    expect(reverseString('minivan')).toBe('navinim');
})

test('reverse the string', ()=>{
    expect(reverseString('oil can')).toBe('nac lio');
})