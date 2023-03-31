const analyzeArray = (arr)=>{

    if(typeof arr === 'object'){
        let total = arr.reduce((sum,val)=>{
            return sum + val;
        }, 0);
    
        if(typeof total === 'number'){
            let average = total/arr.length;

            let length = arr.length;

            let min = arr.reduce(function(minVal, arrVal){
                if(arrVal < minVal){
                    minVal = arrVal;
                }
                return minVal;
            }, arr[0]);

            let max = arr.reduce((maxVal, arrVal)=>{
                    if(arrVal > maxVal){
                        maxVal = arrVal;
                    }
                    return maxVal;
                }, arr[0]);

            return {average:average, min:min, max:max, length:length};
        }else{
            return 'not an array';
        }
    }else{
        return 'not an array';
    }
}

console.log(analyzeArray('123'));
export {analyzeArray};