//Place your javascript code related with HTML and CSS here

function insertion_sort(numbers) { 
    let n = numbers.length; 
    for (let i = 1; i < n; i++) { 
        let current = numbers[i]; 
        let j = i - 1; 
        while ((j > -1) && (current < numbers[j])) {                                              
            numbers[j + 1] = numbers[j];                                  
            j--;
        }
        numbers[j + 1] = current; 
    }                               
    return numbers;                
}

function factorial(number) { 
    if (number < 0) 
        return -1;  
    else if (number == 0) 
        return 1; 
    else { 
        return (number * factorial(number - 1)); 
    }
}

function fibonacci(number) { 
    let a = 0, b = 1, nextTerm; 
    if (number < 2) { 
                      
        return number;
    }
    else {
        for (let i = 1; i < number; i++) { 
            nextTerm = a + b; 
            a = b; 
            b = nextTerm; 
        }
        return nextTerm; 
    }
}

function evaluation(expression) {

    return parseInt(eval(expression)); 
                                       
}

//aqui empieza el codigo para el html

//Los form pueden usar action="" en la que pongo javascript:(myfuncion) para usar my funcion
//cada form tiene un action diferente (validate1,validate2,validate3,validate4)
//todas esas funciones estan aqui abajo y son similares

var array,factor,fibo,math;
var resultinsert,resultfactor,resultfibo,resultmath;

function validate1(){
    array=document.forms["form1"]["array"].value; //consigo el valor de array de form1

    resultinsert=insertion_sort(array.split(",")); //hago la funcion y cambio el texto del html

    document.getElementById('resultinsert').innerHTML = resultinsert; //busco el id de resultinsert para cambiar el texto del html
    
}

function validate2(){
    factor=document.forms["form2"]["factor"].value; 
    if (isNaN(factor))   // Me aseguro que factor no sea una letra (esto no se puede en evaluation 1 y 4 porque 
    // se ingresan simbolos como: *,/,+,etc.)
    {resultfactor="Debe ingresar un numero";} 
    else if (factor<1)      // me aseugro de que el numero sea entre 1 y 6
    resultfactor="El numero es menor a 1";
    else if (factor>6)
    resultfactor="El numero es mayor a 6";
    else
    resultfactor=factorial(factor)

    document.getElementById('resultfactor').innerHTML = resultfactor;
}

function validate3(){
    fibo=document.forms["form3"]["fibo"].value;
    if (isNaN(fibo))
    resultfibo="Debe ingresar un numero";
    else
    resultfibo=fibonacci(fibo);

    document.getElementById('resultfibo').innerHTML = resultfibo;
}

function validate4(){
    math=document.forms["form4"]["math"].value;

    resultmath=evaluation(math);

    document.getElementById('resultmath').innerHTML = resultmath;
}


function openFunction() {

    document.getElementById("sidebar").style.left="0px";
    var left = document.getElementsByClassName("btn")[0];
    left.style.setProperty("left", "calc(150px + 1vw + 15px)");
    var closeleft = document.getElementsByClassName("closebtn")[0];
    closeleft.style.setProperty("left", "calc(150px + 1vw + 15px)");
    document.getElementsByTagName("body")[0].style.marginLeft = "calc(150px + 1vw)";
    document.getElementById("topbar").style.marginLeft = "calc(150px + 1vw)";
    document.getElementById("logo").style.marginLeft = "calc(-120px - 0.5vw)";
    
}
function closeFunction() {
    document.getElementById("sidebar").style.left="-260px";
    document.getElementById("btn").style.left="15px";
    document.getElementById("closebtn").style.left="-45px";
    document.getElementsByTagName("body")[0].style.marginLeft = "0";
    document.getElementById("topbar").style.marginLeft = "0";
    document.getElementById("logo").style.marginLeft = "0";
    document.getElementById("sideTeam").style.color= "#ffffff";
    document.getElementById("sideTeam").style.background= "none";
    document.getElementById("sideTeam").style.fontWeight= "400";
    document.getElementById("sideAlgorithms").style.color= "#ffffff";
    document.getElementById("sideAlgorithms").style.background= "none";
    document.getElementById("sideAlgorithms").style.fontWeight= "400";
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName == "Team") {
        document.getElementById("sideTeam").style.color= "#000000";
        document.getElementById("sideTeam").style.background= "#ecece3";
        document.getElementById("sideTeam").style.fontWeight= "600";
        document.getElementById("sideAlgorithms").style.color= "#ffffff";
        document.getElementById("sideAlgorithms").style.background= "none";
        document.getElementById("sideAlgorithms").style.fontWeight= "400";
    }
    else if (tabName == "Algorithms") {
        document.getElementById("sideAlgorithms").style.color= "#000000";
        document.getElementById("sideAlgorithms").style.background= "#ecece3";
        document.getElementById("sideAlgorithms").style.fontWeight= "600";
        document.getElementById("sideTeam").style.color= "#ffffff";
        document.getElementById("sideTeam").style.background= "none";
        document.getElementById("sideTeam").style.fontWeight= "400";
    }
}
