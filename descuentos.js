const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento/100);
    return precioConDescuento;
}

function onClickCalculate() {
    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    console.log("entra a onclick")

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultPrice = document.getElementById("resultPrice");
    if (priceValue <= 0){
        resultPrice.innerText = "Introduce un precio mayor a 0"; 
    }else if (discountValue <= 0){
        resultPrice.innerText = "El precio con un 0% de descuento es: $"+ precioConDescuento; 
    }else{
        resultPrice.innerText = "El precio con un " + discountValue + "%  de descuento es: $"+ precioConDescuento; 
    }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })