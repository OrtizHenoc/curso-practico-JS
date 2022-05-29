function calcularPrecioConDescuento(precio,descuento ,cupones){
    if((descuento+cupones)>=100){
        const precioConDescuento1=0
        return precioConDescuento1;
    }
    const descuentoTotal = descuento+cupones;
    var porcentajePrecioConDescuento = 100-descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento
}
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue =  parseInt(inputPrice.value);
    
    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue  =  parseInt(inputDiscount.value);
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
    }

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }
    /* Para obtener el valor del select */
    const cod = parseInt(document.getElementById("cupons").value);
    const precioConDescuento =  calcularPrecioConDescuento(priceValue,descuento,cod);
    const result1 = document.getElementById("Result1");
    const result2 = document.getElementById("Result2");
    result1.innerText = "El precio con descuento son: $" + precioConDescuento 
    result2.innerText = "El dinero ahorrado es de: $"+ (priceValue-precioConDescuento).toFixed(2);
        // +"El dinero ahorra es de: " +priceValue-precioConDescuento
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });