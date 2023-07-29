const cantProdMostrar = document.querySelector("#cant-prod-mostrar");
const cantPermitida = document.querySelector("#cant-perm");
const prodColores = document.querySelector("#colores-prod");
const divContenedorProdYInfo = document.querySelector("#contenedor-productos-y-info");

const IMG_1 = "https://static.vecteezy.com/system/resources/previews/009/900/525/original/pizza-slice-isolated-illustration-colored-sketch-drawn-illustration-of-a-hot-slice-of-pepperoni-pizza-with-melting-cheese-food-cafe-pizzeria-logo-signboard-banner-menu-design-element-vector.jpg";
const IMG_2 = "https://img.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg?w=740&t=st=1690578504~exp=1690579104~hmac=7a89704ec401c90112798f1f42a5a72f48998f7da546c1ccf580a1f5a7d964ed";
const IMG_3 = "https://img.freepik.com/vector-premium/rebanada-dibujos-animados-pizzailustracion-dibujos-animados-vectorclipart-dibujos-animados_11393-359.jpg";
const IMG_4 = "https://img.freepik.com/vector-premium/ilustracion-icono-dibujos-animados-pizza-amor_138676-2650.jpg?w=740";
const IMG_5 = "https://img.freepik.com/vector-premium/ilustracion-icono-vector-dibujos-animados-pizza-refresco-concepto-icono-comida-bebida-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3585.jpg?w=740";
const IMG_6 = "https://img.freepik.com/vector-premium/icono-refresco-coleccion-comida-rapida-icono-comida-aislado_138676-506.jpg?size=626&ext=jpg&ga=GA1.1.1955547076.1690575564";
const IMG_7 = "https://img.freepik.com/vector-premium/soda-ilustracion-icono-paja-concepto-icono-cine-pelicula-aislado-estilo-plano-dibujos-animados_138676-1272.jpg?size=626&ext=jpg&ga=GA1.1.1955547076.1690575564";
const IMG_8 = "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-bebida-botella-fresca-linda-bebida-objeto-icono-concepto-aislado-premium_138676-5984.jpg?size=626&ext=jpg&ga=GA1.1.1955547076.1690575564";
const IMG_9 = "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-caja-jugo-naranja-estilo-dibujos-animados-plana_138676-2869.jpg?size=626&ext=jpg&ga=GA1.2.1955547076.1690575564";
const IMG_10 = "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-caja-jugo-fresa-estilo-dibujos-animados-plana_138676-2870.jpg?size=626&ext=jpg&ga=GA1.2.1955547076.1690575564";

const Imgs = [IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6,IMG_7,IMG_8,IMG_9,IMG_10];

const Productos = [
    "Peperoni",
    "Margarita",
    "Napolitana",
    "Pizza Corazón",
    "Peperoni + gaseosa",
    "Coca Cola",
    "Pepsi",
    "Agua",
    "Naranja",
    "Frutilla"
];

const TipoProd = [
    "Porcion de ",
    "Porcion de ",
    "Porcion de ",
    "Porcion de ",
    "Combo ",
    "",
    "",
    "Botella de ",
    "Jugo de ",
    "Jugo de "
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
    const opciones = [1,15,25,50];
    for (let i = 0; i < ProductosMostrar; i++) {
        let opcSelectColores = ``;
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i] <= cantPermitida.value) {
                opcSelectColores += `<option value="${opciones[i]}">${opciones[i]}</option>`;
            }
            
        }
        divContenedorProd.innerHTML += `
            <div class="div-colores">
                <div class="productos">
                    <p>${TipoProd[i]} ${Productos[i]}</p>
                    <img src="${Imgs[i]}" alt="img">
                    <p>Seleccione pago</p>
                    <select name="" id="formas-de-pago">
                        <option value="Efectivo">Efectivo</option>
                        <option value="Debito">Debito</option>
                        <option value="Credito">Credito</option>
                    </select>
                    <p>Seleccione cantidades</p>
                    <select name="" id="cantidades">
                        ${opcSelectColores}
                    </select>
                </div>
            </div>
        `;
    }
}