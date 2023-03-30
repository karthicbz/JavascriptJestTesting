const calculator = function(){
    function addition(a,b){
        return a+b;
    }

    function subtraction(a,b){
        return a-b;
    }

    function multiplication(a,b){
        return a*b;
    }

    function division(a,b){
        return a/b;
    }

    return {addition, subtraction, multiplication, division};
}

export {calculator};