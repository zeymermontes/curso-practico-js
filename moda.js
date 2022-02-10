
function calcularModa (listaUnsorted){
    const lista = listaUnsorted.sort((a,b)=>{return a-b});

    const listaCount = {};

    lista.map((elemento) => {
        if (listaCount[elemento]){
            listaCount[elemento] ++;
        }else{

            listaCount[elemento] = 1
        }
    });

    const listaOrdenada = Object.entries(listaCount).sort((a, b) => {return a[1]-b[1]})
    const moda = [Number(listaOrdenada[listaOrdenada.length-1][0]),listaOrdenada[listaOrdenada.length-1][1]]
    return moda;
    

}