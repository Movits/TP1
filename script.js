const cantProdMostrar = document.querySelector("#cant-prod-mostrar");
const cantPermitida = document.querySelector("#cant-perm");
const prodColores = document.querySelector("#colores-prod");
const divContenedorProdYInfo = document.querySelector("#contenedor-productos-y-info");

const ProductosMostrar = [cantProdMostrar.value];

const IMG_1 = "https://static.vecteezy.com/system/resources/previews/009/900/525/original/pizza-slice-isolated-illustration-colored-sketch-drawn-illustration-of-a-hot-slice-of-pepperoni-pizza-with-melting-cheese-food-cafe-pizzeria-logo-signboard-banner-menu-design-element-vector.jpg";

const Imgs = [];
const Productos = ["Peperoni", "Margarita", "Cuatro Quesos", "Napolitana"];

function generar() {
    divContenedorProdYInfo.innerHTML = `
        <div id="contenedor-info">
            
        </div>

        <div id="contenedor-productos">

        </div>
    `;

    info();
    prod();
}

function info(){
    const divContenedorInfo = document.querySelector("#contenedor-info");
    divContenedorInfo.innerHTML = `
            <p>La cantidad de productos a mostrar es: ${cantProdMostrar.value}</p>
            <p>La cantidad de productos permitidos por compra es: ${cantPermitida.value}</p>
            <p>Los colores seleccionados a usar son: ${prodColores.value}</p>    
        
    `;
}

function prod() {
    const divContenedorProd = document.querySelector("#contenedor-productos");
    divContenedorProd.innerHTML = `
        <div id="productos">
                
        </div>
    `;

    const divProductos = document.querySelector("#productos");
    for (let i = 0; i < ProductosMostrar.length; i++) {
        divProductos.innerHTML += `
            <p>Porción de ${Productos[i]}</p>
            <img src="${IMG_1}" alt="img">
            <p>Seleccione pago</p>
            <select name="" id="formas-de-pago">
                <option value="Efectivo">Efectivo</option>
                <option value="Debito">Debito</option>
                <option value="Credito">Credito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="" id="${cantPermitida.innerHTML}">
                
            </select>
        `; 
    }
}