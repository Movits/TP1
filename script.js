const cantProdMostrar = document.querySelector("#cant-prod-mostrar");
const cantPermitida = document.querySelector("#cant-perm");
const prodColores = document.querySelector("#colores-prod");
const divContenedorProdYInfor = document.querySelector("#contenedor-productos-y-info");

function generar() {
    divContenedorProdYInfor.innerHTML = ``;
    divContenedorProdYInfor.innerHTML += `
        <div id="contenedor-info">
            <p>La cantidad de productos a mostrar es: ${cantProdMostrar.value}</p>
            <p>La cantidad de productos permitidos por compra es: ${cantPermitida.value}</p>
            <p>Los colores seleccionados a usar son: ${prodColores.value}</p>
        </div>

        <div id="contenedor-productos">
            
        </div>
    `;
}