const cipher = (text, shift)=>{
    const characterMap=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cipheredText = '';
    
    const transformText = ()=>{
        for(let i=0; i<text.length; i++){
            cipheredText += findCharIndex(text[i].toLowerCase());
        }
        return cipheredText;
    }

    const findCharIndex = (char)=>{
        for(let i=0; i<characterMap.length; i++){
            if(characterMap[i] === char){
                return makeCipher(i);
            }
        }
        return char;
    }

    const makeCipher=(index)=>{
        return characterMap[((index+shift)%(characterMap.length))];
    }

    return {transformText};
}

export {cipher};