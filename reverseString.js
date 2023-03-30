const reverseString = (text)=>{
    let i = text.length-1;
    let reversedString = ''
    while(i>=0){
        reversedString += text[i];
        i--;
    }
    return reversedString;
}

export {reverseString};