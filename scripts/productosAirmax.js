const productosAirMax = [ 
    {
        nombre: 'Nike Air Max Dn',
        precio: '$160.50',
        imgDefault :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/297346e3-1a41-4319-b775-510473ab43e4/AIR+MAX+DN.png',
        imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/748690d8-a3fb-4020-a11d-4b935a0227d6/AIR+MAX+DN.png'

    },

    {
        nombre: 'Nike Air Max Dn',
        precio: '$160.50',
        imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80384919-bddd-4d9f-8ca5-41a93c893868/W+AIR+MAX+DN.png',
        imgHover :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f24971cb-a2ae-4220-b17e-c6efc08edabc/W+AIR+MAX+DN.png'
    },
    {
        nombre:' Nike Air Max Dn SE',
        precio: '$150.50',
        imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ef876c6-5a15-4b00-af1b-43c6738e54cd/W+AIR+MAX+DN+SE.png',
        imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/01311c2c-a9c6-45ca-9af2-eadb59f1d330/W+AIR+MAX+DN+SE.png'

    }, 
    {
        nombre: 'Nike Aur Nax Dn Premium',
        precio: '$136.50',
        imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857a9aa3-70e0-4710-b261-952ddcdc4649/W+AIR+MAX+DN+PRM.png',
        imgHover: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc34140c-b4e8-421b-ad0a-41d2ef26479a/W+AIR+MAX+DN+PRM.png',

    }, 
]

function renderizarProductosAirMax() {
    const contenedor = document.getElementById('productosAirMax');
    productosAirMax.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card cardProductos">
                <img src="${producto.imgDefault}" class="card-img-top" alt="${producto.nombre}" onmouseover="this.src='${producto.imgHover}'" onmouseout="this.src='${producto.imgDefault}'">
                <div class="card-body">
                    <h5 class="card-title titutloYprecio ">${producto.nombre}</h5>
                    <p class="card-text titutloYprecio ">${producto.precio}</p>
                    <button class="btn btn-comprar" onclick="agregarAlCarritoAirMax('${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>

                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}


function agregarAlCarritoAirMax(nombreProducto, precioProducto) {
    Swal.fire({
        title: 'Agregar al carrito',
        html: `
            <img src="${productosAirMax.find(p => p.nombre === nombreProducto).imgDefault}" alt="${nombreProducto}" style="width: 300px; height: 320px; margin-bottom: 10px; ">
            <h5>${nombreProducto}</h5>
            <p>Precio: ${precioProducto}</p>
            <label for="size">Seleccione una talla:</label>
            <select id="size" class="form-select">
                <option value="8">Size 8</option>
                <option value="8.5">Size 8.5</option>
                <option value="9">Size 9</option>
                <option value="9.5">Size 9.5</option>
                <option value="10">Size 10</option>
            </select>
        `,
        showCancelButton: true,
        confirmButtonText: 'Confirmar compra',
        cancelButtonText: 'Cancelar',
        background: '#000000', // Color de fondo negro
    color: '#ffffff ',
    customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        htmlContainer: 'custom-html-container',
        actions: 'custom-actions',
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
    },
    
        preConfirm: () => {
            const size = Swal.getPopup().querySelector('#size').value;
            return { size: size };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `EXCELENTE ESTÁS A UN PASO DE OBTENER TUS ${nombreProducto}`,
                text: 'Los métodos de pago que aceptamos son:',
                icon: 'info',
                html: `
                    <div>
            Binance<br>
            Zelle<br>
            Transferencia Bancaria<br>
            Cryptomoneda
        </div>
                `,
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
                background: '#000000', // Color de fondo negro
                color: '#ffffff ',
                customClass: {
                    popup: 'custom-popup',
                    title: 'custom-title',
                    htmlContainer: 'custom-html-container',
                    actions: 'custom-actions',
                    confirmButton: 'custom-confirm-button',
                    cancelButton: 'custom-cancel-button',
                },
            }).then((finalResult) => {
                if (finalResult.isConfirmed) {
                    const message = `Hola, el ${nombreProducto} está disponible?`;
                    const whatsappUrl = `https://wa.me/584126581304?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                } else {
                    // Aquí puedes manejar lo que sucede si se cancela la segunda alerta
                    Swal.fire({
                        title: 'Compra cancelada',
                        icon: 'error',
                        background: '#000000', // Color de fondo negro
                        color: '#ffffff'
                        ,
                customClass: {
                    popup: "custom-popup"} // Color del texto blanco
                    });
                }
            });
        } else {
            // Si el usuario cancela la primera alerta, simplemente no hace nada
            Swal.fire({
                title: 'Compra cancelada',
                icon: 'info',
                background: '#000000', // Color de fondo negro
                color: '#ffffff'
                ,
                customClass: {
                    popup: "custom-popup"} // Color del texto blanco
            });
            
        }
    });
}


// Llama a la función para renderizar los productos
renderizarProductosAirMax();