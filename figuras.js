
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;

} 

function areaCuadrado(lado){
    return lado* lado;
}

console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");


// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1,lado2,base){
    return lado1 +lado2 + base;
}

function areaTriangulo(altura,base){
    return (base*altura)/2;
}
console.groupEnd();


//Codigo del circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
}
//pi
const PI = Math.PI;
console.log("PI es igual a: "+ PI);
//circunferencia
function perimetroCircunferencia (radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();


//Interaccion con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");//Obtenes el elemento con document.getElementById y lo guardas
    const value = input.value;//Obtenes el valor que se escribio en ese elemento y tambien lo guardas

    const perimetro = perimetroCuadrado(value);//Con el valor obtenido llamas tu funcion que calcula el perimetro del cuadrado
    alert(perimetro);//con un alert muestras el calculo del perimetro que hizo la funcion.
}
function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}