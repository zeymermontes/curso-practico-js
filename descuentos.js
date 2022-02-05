

const cuponList = [
    {
    name: "promo10",
    discount: 10
    },
    {
    name: "promo25",
    discount: 25
    },
    {
    name: "promo50",
    discount: 50
    }

]

function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento/100);
    return precioConDescuento;
}

function onClickCalculate() {


    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    console.log("entra a onclick")

    const isCuponValid = function (cuponList){
        return cuponList.name === cuponValue;
    };

    const userCupon = cuponList.find(isCuponValid);
    const descuento = userCupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    

    if (!userCupon){
        resultPrice.innerText = "El cupon "+ cuponValue + " no es valido";
    }else if (priceValue <= 0){            
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "Introduce un precio mayor a 0"; 
    }else if (descuento <= 0){
        resultPrice.innerText = "El precio con un 0% de descuento es: $"+ precioConDescuento; 
    }else{
        resultPrice.innerText = "El precio con un " + descuento + "%  de descuento es: $"+ precioConDescuento; 
    }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })