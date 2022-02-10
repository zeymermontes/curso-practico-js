
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {return valorAcumulado + nuevoElemento})

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(listaUnsorted){

    const lista = listaUnsorted.sort((a, b) => {return a-b});
    console.log(lista)
    let mediana;
    let posicion = parseInt((lista.length)/2);
    

    if ( lista.length % 2 == 0){
        const elem2 = lista[posicion];
        const elem1 = lista[posicion - 1];

        mediana = calcularMediaAritmetica([elem1,elem2])
        return mediana;
    }else{
        mediana = lista[posicion];
        return mediana;
    }
}