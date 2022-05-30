const lista1 = [
    "gato",
    "Perro",
    "Conejo",
    "Perro",
    "Perro",
    "gato",
    "gato",
    "gato",
    "Conejo",
    "Conejo",
    "Perro",
    "Perro",
    "Perro",
];

function calcularModa(lista){

    const listaCount = {};
    
    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] +=1; 
            }else{
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listArray = Object.entries(listaCount).sort(
        function (a,b){
            return a[1]-b[1];
        }
    )
    
    const moda = listArray[listArray.length-1]
    return moda
}