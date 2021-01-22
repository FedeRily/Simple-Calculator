console.log("Testing");
let num1;
let num2;
let resultado;

function readData(){
    num1 = parseFloat((document.getElementById("numero1").value));
    num2 = parseFloat((document.getElementById("numero2").value));
}
function suma(){
    readData();
    if(checkNum(num1, num2)) return 0;
    resultado = num1 + num2;
    setResultField(resultado);
}
function resta(){
    readData();
    if(checkNum(num1, num2)) return 0;
    resultado = num1 - num2;
    setResultField(resultado);
}
function multip(){
    readData();
    if(checkNum(num1, num2)) return 0;
    resultado = num1 * num2;
    setResultField(resultado);
}
function divi(){
    readData();
    if(checkNum(num1, num2)) return 0;
    resultado = num1 / num2;
    setResultField(resultado);
}
function resto(){
    readData();
    if(checkNum(num1, num2)) return 0;
    resultado = num1 % num2;
    setResultField(resultado);
}
function checkNum(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        setResultField("Ingresar un numero valido");
        return true;
    }
    else{
        return false;
    }
}
function setResultField(resultado){
    document.getElementById('resultado').value = resultado;
}
/* function checkNum1(){
    readData();
    let num1Array = Array.from(num1);
    console.log(num1Array);
    if(!num1Array[num1Array.length-1]==/^[0-9]$/){
    setResultField("Ingrese un numero correcto");
    num1Array.pop();
    document.getElementById("numero1").value = num1Array;
    }
}
function checkNum2(){
    console.log("h2");
    readData();
    let num2Array = Array.from(num2);
    if(!num2Array[num2Array.length-1]==/^[0-9]$/){
    setResultField("Ingrese un numero correcto");
    num2Array.pop();
    document.getElementById("numero1").value = num2Array;
    } 
}*/