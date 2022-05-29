function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElement ){
            return valorAcumulado + nuevoElement;   
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista
}
function esPar(numerito){
    if(numerito % 2 === 0){
        return true ;
    }else{
        return false;
    }
}
const lista1 = [
    100,
    200,
    500,
    800,
    900,
    1000,
    1500,
    400000000,
]
//------------------------------------------------------------
function calcularMediana (listaDesordenada){
    console.log(listaDesordenada)
    const lista=listaDesordenada.sort(function (a,b){return a-b;})
    console.log(lista)
    const mitadLista = parseInt(lista.length/2);
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        console.log("Elemento1:" +elemento1 + " Elemento2:" +elemento2)
        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana
}
