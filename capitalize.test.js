import {capitalize} from './capitalize';

test.skip('capitalize first letter', ()=>{
    expect(capitalize('apple')).toMatch('Apple');
})

test.skip('text with hypen', ()=>{
    expect(capitalize('an-Apple')).toMatch('An-Apple');
})

test.skip('uppercase to be uppercase', ()=>{
    expect(capitalize('Aeroplane')).toMatch('Aeroplane');
})