const cantProdMostrar = document.querySelector("#cant-prod-mostrar");
const cantPermitida = document.querySelector("#cant-perm");
const prodColores = document.querySelector("#colores-prod");
const divContenedorProdYInfo = document.querySelector("#contenedor-productos-y-info");

const IMG_1 = "https://static.vecteezy.com/system/resources/previews/009/900/525/original/pizza-slice-isolated-illustration-colored-sketch-drawn-illustration-of-a-hot-slice-of-pepperoni-pizza-with-melting-cheese-food-cafe-pizzeria-logo-signboard-banner-menu-design-element-vector.jpg";
const IMG_2 = "https://img.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg?w=740&t=st=1690578504~exp=1690579104~hmac=7a89704ec401c90112798f1f42a5a72f48998f7da546c1ccf580a1f5a7d964ed";
const IMG_3 = "https://img.freepik.com/vector-premium/rebanada-dibujos-animados-pizzailustracion-dibujos-animados-vectorclipart-dibujos-animados_11393-359.jpg";
const Imgs = [IMG_1,IMG_2,IMG_3];

const Productos = [
    "Peperoni",
    "Margarita",
    "Napolitana"
];


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
    const ProductosMostrar = cantProdMostrar.value;
    const divContenedorProd = document.querySelector("#contenedor-productos");
    for (let i = 0; i < ProductosMostrar; i++) {
        divContenedorProd.innerHTML += `
            <div class="div-colores">
                <div class="productos">
                    <p>Porción de ${Productos[i]}</p>
                    <img src="${Imgs[i]}" alt="img">
                    <p>Seleccione pago</p>
                    <select name="" id="formas-de-pago">
                        <option value="Efectivo">Efectivo</option>
                        <option value="Debito">Debito</option>
                        <option value="Credito">Credito</option>
                    </select>
                    <p>Seleccione cantidades</p>
                    <select name="" id="${cantPermitida.innerHTML}">
                        
                    </select>
                </div>
            </div>
        `;
    }
}