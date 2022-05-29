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
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
function onClickButtonPriceDiscount(){
    //se obtienen las variables que ingresan el los inputs
    const inputPrice = document.getElementById("InputPrice");
    const priceValue =  parseInt(inputPrice.value);
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

//retorna un boolean, true si el valor el input coupoValue, se encuentra en el array con coupon.name
    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    }
//se usa el find en el array de cupones, y se pasa la funcion que valida si   
//su parámetro coupon es igual a nuestra variable userCouponValue
    const userCoupon = coupons.find(isCouponValueValid);
//if para comprobar y mandar a notificar si el cupon es valido
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        //si resulta ser valido, se hace los calculos correspondientes y se manda la respuesta
        const descuento = userCoupon.discount;
        //cupones del combobox o select 
        const cod = parseInt(document.getElementById("cupons").value);
        const precioConDescuento =  calcularPrecioConDescuento(priceValue,descuento,cod);
        const result1 = document.getElementById("Result1");
        const result2 = document.getElementById("Result2");
        result1.innerText = "El precio con descuento son: $" + precioConDescuento 
        result2.innerText = "El dinero ahorrado es de: $"+ (priceValue-precioConDescuento).toFixed(2);
    }


}
