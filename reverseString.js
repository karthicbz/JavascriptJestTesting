const reverseString = (text)=>{
    let reversedString = Array.from(text).reduce((start, t)=>{
        return t+start;
    }, '');
    return reversedString;
}

// reverseString('karthick');

export {reverseString};