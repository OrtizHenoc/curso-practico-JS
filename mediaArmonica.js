const lista = [
    100,
    200,
    300,
    500,
    900,
    120000,
];
/*
Ventaja
Considera todos los valores de la distribución y en ciertos casos, es más representativa que la media aritmética.
Desventajas
La influencia de los valores pequeños y el hecho de que no pueda ser determinada en distribuciones con valores iguales a cero; por eso su empleo no es aconsejable en distribuciones donde existan valores muy pequeños.
Suele ser empleada para promediar velocidades, tiempos, rendimientos, etc.*/
function calcularMediaArmonica (lista){
    let sumaLista=0;
    var key, n = 0;
    for(key in lista) {
        if(lista.hasOwnProperty(key)) {
            n++;
        }
    }
    let mediaArmonica=0;
    for(let i=0;i<lista.length;i++){
        if(lista[i]===0){
            console.log("La lista contiene valores iguales a 0, lo que no hace posible el calculo")
            break;
        }else{
            sumaLista = sumaLista+(1/lista[i]);
            console.log(sumaLista);
        }
    }
    if(sumaLista===0){
        mediaArmonica= 0;
        console.log("No es posible calcular la media armonica cuando su suma de elementos es 0")
    }else{
        mediaArmonica = (n/sumaLista) ;
    }
    
    return mediaArmonica
}