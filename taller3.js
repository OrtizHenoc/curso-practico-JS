//selecciono el input number por el id
input = document.getElementById('datos');
//escucho el evento keyup
input.addEventListener('keyup', validar);
//funcion donde valido mi lógica
function validar(event){
    input.style.backgroundColor = "#488ba0";
}
// function conversorArray(stringsDeNumeros){
//     if(stringsDeNumeros.indexOf(", ") !== -1){


//         var array =parseInt(stringsDeNumeros.split(', '));
//         alert(array)
//         return parseInt(stringsDeNumeros.split(', '));
//     }else{
//         alert("Los valores no estan separados por comas y espacio (', ')")
//         return;    
//     }
        

// }
const calcularMedia = (iterable) => {
    let array = iterable.split(", ");
    let suma_elementos = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2))
    return promedio = suma_elementos / array.length;
}

function calcularMediana(iterable){
    let array = iterable.split(", ");
    
    let lista_en_orden = array.sort((a, b) => a - b);
    
    let mitad_lista = parseInt(lista_en_orden.length / 2);
    let mediana; 

    if(lista_en_orden.length % 2 == 0){
        let elemento = lista_en_orden[mitad_lista];
        let elemento2 = lista_en_orden[mitad_lista - 1];
        mediana = (Number(elemento) + Number(elemento2)) / 2;
    }
    else {
        mediana = lista_en_orden[mitad_lista];
    }  
    return mediana
}


    

    const caulcularModa = (iterable) => {
        const repeticion_numeros = {};
        let array ;
        array = iterable.split(", ")
        let count_elements = array.map(elemento => {
            if(repeticion_numeros[elemento]){
                repeticion_numeros[elemento] += 1;
            } 
            else {
                repeticion_numeros[elemento] = 1
            }
        }) 
        count_elements = Object.entries(repeticion_numeros);
        console.log(count_elements)
        let menorAmayor = count_elements.sort((a, b) => a[1] - b[1])
        /* let moda = menorAmayor[menorAmayor.length - 1]
        console.log(moda) */
        const modas = [];
        for(let i = 0; i < menorAmayor.length; i++){
            if(menorAmayor[i][1] == menorAmayor[menorAmayor.length - 1][1]){
                modas.push(menorAmayor[i])
            }
        }
        return modas
    
    } 
function calcularMediajs(){
    const inputString =  document.getElementById("datos")
    let average_value = inputString.value;
    let resultado = calcularMedia(average_value);
    pResultMedia.innerText = `Promedio: ${resultado.toFixed(2)}`
}
function calcularModajs(){
    const inputString =  document.getElementById("datos")
    let moda_value = inputString.value;
    let result = caulcularModa(moda_value);
    if(result.length > 1) {
        for(let i = 0; i < result.length; i++){
            pResultModa.innerText =`La moda es ${result[i][0]} y se repite ${result[i][1]} veces`;
        }
    }
    else 
    {
        pResultModa.innerText = `La moda es ${result[0][0]} se repite ${result[0][1]} veces`
    }
}
function calcularMedianajs(){
    const inputString =  document.getElementById("datos")
    let median_value = inputString.value;
    let result = calcularMediana(median_value);
    pResultMediana.innerText  = `Mediana: ${result}`;
}


