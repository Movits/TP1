const cantProdMostrar = document.querySelector("#cant-prod-mostrar");
const cantPermitida = document.querySelector("#cant-perm");
const prodColores = document.querySelector("#colores-prod");
const divContenedorProdYInfo = document.querySelector("#contenedor-productos-y-info");

const Productos = [];

function generar() {
    divContenedorProdYInfo.innerHTML = `
        <div id="contenedor-info">

        </div>

        <div id="contenedor-productos">

        </div>
    `;

    const divContenedorInfo = document.querySelector("#contenedor-info");
    divContenedorInfo.innerHTML += `
        <p>La cantidad de productos a mostrar es: ${cantProdMostrar.value}</p>
        <p>La cantidad de productos permitidos por compra es: ${cantPermitida.value}</p>
        <p>Los colores seleccionados a usar son: ${prodColores.value}</p>
    `;
}