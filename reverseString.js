const reverseString = (text)=>{
    if(typeof text === 'string'){
        let reversedString = Array.from(text).reduce((start, t)=>{
            return t+start;
        }, '');
        return reversedString;
    }else{
        return 'not a string';
    }
}

// reverseString(12345);

export {reverseString};