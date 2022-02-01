//Codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;

// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm" );

const areaCuadrado =  (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

// console.log("El area del cuadrado es: "+ areaCuadrado + "cm2")
console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 6;
const alturaTriangulo = 5.5;

// console.log("El lado 1 del Triangulo mide: "+ ladoTriangulo1 + " cm");
// console.log("El lado 2 del Triangulo mide: "+ ladoTriangulo2 + " cm");
// console.log("La base del Triangulo mide: "+ baseTriangulo + " cm");
// console.log("La Altura del Triangulo mide: "+ alturaTriangulo + " cm");

const perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo ) => ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// console.log("El perimetro del Triangulo es: "+ perimetroTriangulo + " cm" );

const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo)/2;

// console.log("El area del Triangulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("circulos");

// Radio
const radioCirculo = 4;
// console.log("El radio es : " + radioCirculo +" cm")

// Diámetro
const diametroCirculo = (radioCirculo) => radioCirculo *2;
// console.log("El diametro es : " + diametroCirculo +" cm")

// PI
const PI = Math.PI;
// console.log("Pi es : " + PI)

// Circunferencia
const circunferenciaCirculo = (diametroCirculo) => PI * diametroCirculo;
// console.log("La cisrcunferencia es : " + perimetroCirculo +" cm")


// Area
const areaCirculo = (radioCirculo) => PI*(radioCirculo*radioCirculo);
// console.log("El area es : " + areaCirculo +" cm^2")

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    alert(areaCuadrado(value));
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulo1");
    const lado2 = document.getElementById("InputTriangulo2");
    const ladoBase = document.getElementById("InputTrianguloBase");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const valueBase = Number(ladoBase.value);
    
    
    alert(perimetroTriangulo(value1, value2, valueBase));
}

function calcularAreaTriangulo(){
    const ladoBase = document.getElementById("InputTrianguloBase");
    const ladoAltura = document.getElementById("InputTrianguloAltura");
    const valueBase = Number(ladoBase.value);
    const valueAltura = Number(ladoAltura.value);
    
    alert(areaTriangulo(valueBase, valueAltura));
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    alert(circunferenciaCirculo(value));
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    alert(areaCirculo(value));
}
