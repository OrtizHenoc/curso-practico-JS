// const precioOriginal = 120;
// const descuento= 18;
//No me convence que se usen tantas variables
function calcularPrecioConDescuento(precio,descuento ,cupones){
    var entre = false;
    // if((descuento+cupones)>=100){
    //     const precioConDescuento1=0
    //     entre=true;
    //     return precioConDescuento1;
    // }
    const descuentoTotal = descuento+cupones;
    var porcentajePrecioConDescuento = 100-descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    // return "Porcentaje precio con descuento" + porcentajePrecioConDescuento
    return precioConDescuento
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue =  inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue  =  inputDiscount.value;
    
    /* Para obtener el valor del select */
    const cod = document.getElementById("cupons").value;
    alert("value precio "+priceValue+" --Value descuento "+discountValue+"--Value cupones " +cod);
    const precioConDescuento =  calcularPrecioConDescuento(priceValue,discountValue,cod);
    alert("Precio final:" +precioConDescuento)
    const resultP = document.getElementById("ResultP")

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });