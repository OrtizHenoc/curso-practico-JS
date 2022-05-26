//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado +"cm^2");
console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 =6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1
    +"cm, "
    +ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: "+alturaTriangulo+"cm");
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo mide: "+perimetroTriangulo+"cm");
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo mide: "+areaTriangulo+"cm ^2" );
console.groupEnd();


//Codigo del circulo
console.group("Circulos");
//radio
const radioCirculo = 4;
console.log("El radio del Circulo es: "+ radioCirculo+"cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo es: "+ diametroCirculo+"cm");
//pi
const PI = Math.PI;
console.log("PI es igual a: "+ PI);
//circunferencia
const perimetroCircunferencia = diametroCirculo * PI;
console.log("El perimetro del Circulo es: "+ perimetroCircunferencia+"cm")

//Area

const areaCirculo =  (radioCirculo*radioCirculo)*PI;
console.log("El area del Circulo es: "+ areaCirculo+"cm ^ 2")
console.groupEnd();