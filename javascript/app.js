// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    //Write your code here

    return [-1];
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
    // Base case
    if (number == 0) {
        return number;
    }
    // Not equal to zero
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

    //Write your code here

    return -1
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
