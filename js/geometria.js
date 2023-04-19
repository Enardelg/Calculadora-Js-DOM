//variables globales capturadas
const resultadoFinal = document.querySelector('#Outcome');
const inputLado = document.querySelector('#sideCuadrado');
const radio = document.querySelector('#sideCirculo')



//área y perímetro de un cuadrado 

const perimCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

function calcularPerimetroCuadrado(){
    const ValorInputLado = Number(inputLado.value);
    const resultado = `El perímetro del cuadrado es: ${perimCuadrado(ValorInputLado)} cm`;
    resultadoFinal.innerText = resultado;
}

function calcularAreaCuadrado(){
    const ValorInputLado = Number(inputLado.value);
    const resultado = `El área del cuadrado es: ${areaCuadrado(ValorInputLado)} cm^2`;
    resultadoFinal.innerText = resultado;
}

//área y perímetro de un triángulo

function calcularPermitroTriangulo(){
    const inputLado1 = document.querySelector('#sideTriangulo1');
    const ValorInputLado1 = Number(inputLado1.value);
    const inputLado2 = document.querySelector('#sideTriangulo2');
    const ValorInputLado2 = Number(inputLado2.value);
    const inputLado3 = document.querySelector('#sideTriangulo3');
    const ValorInputLado3 = Number(inputLado3.value);

    const perimetroTriangulo = (lado1, lado2, lado3) => {
        perimTri = lado1 + lado2 + lado3;
        return perimTri
    };
    const resultado = `El perímetro del triángulo es: ${perimetroTriangulo(ValorInputLado1,ValorInputLado2,ValorInputLado3)} cm`;
    resultadoFinal.innerText = resultado;
}

function calcularAreaTriangulo(){
    const inputLado1 = document.querySelector('#sideTrianguloBase');
    const ValorInputLado1 = Number(inputLado1.value);
    const inputLado2 = document.querySelector('#sideTrianguloAltura');
    const ValorInputLado2 = Number(inputLado2.value);

    const areaTriangulo = (base,altura) => {
        areaTri = (base * altura) / 2;
        return areaTri
    }
    const resultado = `El área del triángulo es: ${areaTriangulo(ValorInputLado1,ValorInputLado2)} cm^2`;
    resultadoFinal.innerText = resultado;
}


// diámetro, perímetro y área de un círculo

function calcularDiametroCirculo(){
    const radioCir = Number(radio.value);

    const diametro = (radio) => radio * 2;
    
    const resultado = `El diámetro del círculo es: ${diametro(radioCir)} cm`;
    resultadoFinal.innerText = resultado;
}

function calcularPerimetroCirculo(){
    const radioCir = Number(radio.value)

    const perimetroCirculo = (radio) =>  2 * Math.PI * radio;

    const resultado = `El perímetro del círculo es: ${perimetroCirculo(radioCir)} cm`;
    resultadoFinal.innerText = resultado;
}

function calcularAreaCirculo() {
    const radioCir = Number(radio.value)

    const areaCirculo = (radio) =>  Math.PI * radio * radio;

    const resultado = `El área del círculo es: ${areaCirculo(radioCir)} cm^2`;
    resultadoFinal.innerText = resultado;
}