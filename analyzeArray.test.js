import {analyzeArray} from './analyzeArray';

test('result', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})

test("array with string [1,2,'3']", ()=>{
  expect(analyzeArray([1,2,'3'])).toBe('not an array');
})

test('string is not an array', ()=>{
  expect(analyzeArray('123')).toBe('not an array');
})