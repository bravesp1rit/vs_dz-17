'use strict';

const numberFromUser = +prompt('Input number');
const degreeFromUser = +prompt('Input degree');
const exponentiation = function (num, degree = 1){
    if (isNaN(num) || isNaN(degree)){
        return 'error, nan';
    }
    let result = num ** degree;
    return result;
};

alert(exponentiation(numberFromUser, degreeFromUser));
