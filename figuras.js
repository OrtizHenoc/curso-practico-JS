
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
//Cuadrado
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
//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangle1");
    const lado1 = Number(input1.value)
    const input2 = document.getElementById("InputTriangle2");
    const lado2 = Number(input2.value)
    const input3 = document.getElementById("InputTriangle3");
    const base =  Number(input3.value); 

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangle3");
    const base =  Number(input1.value); 
    const input2 = document.getElementById("InputTriangle4");
    const h =  Number(input2.value); 

    const area = areaTriangulo(h,base);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const radio =  Number(input1.value); 

    const perimetro = perimetroCircunferencia(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const radio =  Number(input1.value); 

    const perimetro = areaCirculo(radio);
    alert(perimetro);
}