// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;   
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    let x = 0;
    let y = 1;
    if (number == 0) {
        return number;
    }
    for (let i = 1; i <= number; i++) {
        let sum = x + y;
        x = y;
        y = sum;
    }
    return y;
    }

}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

    var result = 0;
    expression = expression.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
    while(s.length) {
        result += parseFloat(expression.shift());
    }
    return result;
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
