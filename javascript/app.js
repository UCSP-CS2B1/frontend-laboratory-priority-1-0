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
function factorial(number) {
 
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
