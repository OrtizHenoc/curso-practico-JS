//helpers
function esPar(numero){
    return (numero % 2 ===0);
}
function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElement ){
            return valorAcumulado + nuevoElement;   
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personaMitad1 = lista [mitad-1];
        const personaMitad2 = lista [mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2])
        return mediana;
    } else {
        const personaMitad = lista [mitad];
        return personaMitad;
    }
}
//MedianaGeneral
const  salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
//Mediana del top 10%

//const arrayEjemplo = [0,1,2,3,4,5||||,6,7,|||8,9,10]
//const EJEMPLO = arrayEjemplo.splice(5,2); El primer argumento indica la posicion para iniciar a tomar elementos de ese array, el segundo
//Indica la cantidad de elementos a partir del primer argumento
//EJEMPLO = [6,7] 

const spliceStart= parseInt((salariosColSorted.length * 90)/100);
const spliceCount= salariosColSorted.length - spliceStart;
const salarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);
console.log({
    medianaGeneralCol,
    medianaTop10Col
}); 