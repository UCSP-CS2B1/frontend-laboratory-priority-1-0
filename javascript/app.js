// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
    let n = numbers.length;
        for (let i = 1; i < n; i++) {
            let current = numbers[i]; // Primer elemento de array original 
            let j = i-1; // Ultimo elemento del arreglo nuevo (Arreglado valga la redundancia)
            while ((j > -1) && (current < numbers[j])) { // Mientras el valor actual sea menor que i-1 entonces el while sigue tambien j debe ser mayor a -1
                numbers[j+1] = numbers[j];
                j--;
            }
            numbers[j+1] = current;
        }
    return numbers;
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

    return eval(expression);
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
