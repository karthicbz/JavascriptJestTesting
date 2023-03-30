const analyzeArray = (arr)=>{

    let total = arr.reduce((sum,val)=>{
            return sum + val;
        }, 0);

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
}

// console.log(analyzeArray([1,8,3,4,2,6]));
export {analyzeArray};