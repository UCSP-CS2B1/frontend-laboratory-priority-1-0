// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) { // La funcion recibe un arreglo en el siguiente formato para poder funcionar [1,2,3,4,5]
    let n = numbers.length; // n se vuelve el largo de el arreglo que se introduce 
    for (let i = 1; i < n; i++) { // Mientras que i sea menor que el tamaño del arreglo entonces el loop for se ejecuta
        let current = numbers[i]; // Esta linea elije el segundo elemento del arreglo igualandolo a current, por la naturaleza de este arreglo se considera al segundo elemento del arrelgo como el punto de partida
        let j = i - 1; // J es igualado al primer elemento del arreglo es decir array[0]. Por la naturaleza del algortimo se considera que el primer elemento del arreglo ya esta en su posicion adecuada
        while ((j > -1) && (current < numbers[j])) { // Esta parte del while revisa que j no esta "out of bounds" es decir que i no sea el primer elemento del arreglo y tambien revisa que el valor del arreglo en la posicion j sea mayor al valor current
                                                      // es decir que por ejemplo arreglo[2] < arreglo[1]. Lo que este while logra es "abrir" un elemento hacia la derecha para poder insertar el valor de "current". 
            numbers[j + 1] = numbers[j]; // Lo que busca el codigo es abrir un espacio en el arreglo para poder insertar current, y esto se logra dado que cada vez que se cumplen las condiciones de el while el valor current se mueve hacia la derecha
                                           // el espacio de la izquierda se llena con un valor menor a current (no se llegaria a este paso si current fuese menor), y se regresa al while para nuevamente revisar si current es mayor al numero a su derecha. 
            j--;
        }
        numbers[j + 1] = current; // Una vez que se determina que el valor de current o el valor de j no son menor al valor separado para insertar, se igual el valor de la derecha a current
    }                              // Es importante recordar que el while revisar todo el arreglo "sorted" que se encuentra en la izquierda cada vez que se itera el while 
    return numbers;                // Devuelve el arreglo original ordenado de menor a mayor numero
}


// Param number: single integer
// Returns a single integer
function factorial(number) { // Recibe un valor entero positivo
    if (number < 0) // Si es valor es un numero negativo entonces devuelve un -1 para hacer saber al usuario que se ingreso un valor invalido
        return -1; //  retorno de valor invalido 
    else if (number == 0) // Si el valor es 0, por definicion se devuelve un 1 por que 0! es 1, pero tambien sirve para la recursividad dentro de factorial
        return 1; // Devuelve el valor de 1 si es que el numero original es de 0 o si es la ultima iteracion de la funcion recursiva 
    else { // Si el numero es un valor mayor a 1 se entra en la recursividad de la funcion 
        return (number * factorial(number - 1)); // La recursividad funciona diciendo que el numero se multiplicara por la funcion - 1, y hasta que el numero dentro de la funcion no se vuelva 0 entonces se restara uno del valor del numero y se volver a multiplicar
                                                 // Si el valor fuese 5, seria 5 * 5 - 1 * 5 - 1 - 1,5-1-1-1 * 5-1-1-1-1 * 0, claro que si se multiplica por 0 entonces el valor final seria 0, pero dentro del if si el valor es 0 hay un return de 1. 
                                                 // Pero el valor no sera de 1, dado que este return esta dentro de la primera iteracion de la recursividad, entonces el valor seria 5*4*3*2*1*1 = 120
    }
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
    return eval(expression);
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
