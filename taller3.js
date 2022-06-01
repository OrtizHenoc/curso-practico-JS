//selecciono el input number por el id
input = document.getElementById('datos');
//escucho el evento keyup
input.addEventListener('keyup', validar);
//funcion donde valido mi lógica
function validar(event){
    input.style.backgroundColor = "#488ba0";
}
function conversorArray(stringsDeNumeros){
    if(stringsDeNumeros.includes(",")){
        alert("Los valores no estan separados por comas (,)")
        return;
    }
    let array = stringsDeNumeros.split(',');
    let arrayNumber = parseInt(array);
    
    return arrayNumber
}
function calcularMedia(input){
    var lista=conversorArray(input);
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElement ){
            return valorAcumulado + nuevoElement;   
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista
}

function calcularMediana (input){
    // console.log(listaDesordenada)
    var listaDesordenada=conversorArray(input);
    const lista=listaDesordenada.sort(function (a,b){return a-b;})
    console.log(lista)
    const mitadLista = parseInt(lista.length/2);
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMedia([
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
function calcularModa(input){
    var lista=conversorArray(input);
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

function calcularModajs(){
    const inputString =  document.getElementById("datos")
    const moda = calcularModa(inputString.value);
    const result = document.getElementById("pResultModa");
    result.innerText = "La moda calculada es: $" + moda 
}


