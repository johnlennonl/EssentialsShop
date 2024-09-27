// Array de productos Jordan
const productosJordan = [
    {
      nombre: 'Air Jordan 1 Retro High OG ',
      precio: '$190.50',
      imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/849566c0-f04e-4742-96f1-8f6ca677f246/AIR+JORDAN+1+RETRO+HIGH+OG.png',
      imgHover: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a9703036-b051-4091-b173-dcf89b1bac65/AIR+JORDAN+1+RETRO+HIGH+OG.png'
    },
    {
      nombre: 'Air Jordan 1 Zoom CMFT 2 SE ',
      precio: '$160.99',
      imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/82ac0411-d6f9-4ee1-8af6-10d7a335426c/W+AIR+JORDAN+1+ZM+AIR+CMFT+2.png',
      imgHover: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c964b9b-060c-47b7-915d-d9637c263d24/W+AIR+JORDAN+1+ZM+AIR+CMFT+2.png'
    },
    {
      nombre: 'Air Jordan 1 Low SE',
      precio: '$135.50',
      imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6a65f8c1-b984-49d1-a311-f690923b5d29/W+AIR+JORDAN+1+LOW+SE.png',
      imgHover: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2ab03f2e-2761-4acf-a755-bc8b70064500/W+AIR+JORDAN+1+LOW+SE.png'
    },
    {
      nombre: 'Air Jordan 1 Retro Low (GS)',
      precio: '$122.50',
      imgDefault: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fbdda0f2-05f8-495d-8284-6e2828bb0a2b/AIR+JORDAN+1+RETRO+LOW+OG+%28GS%29.png',
      imgHover: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fae8a032-ff19-4b94-9531-fd8c3267126d/AIR+JORDAN+1+RETRO+LOW+OG+%28GS%29.png'
    },
    {
      nombre:'Air Jordan 1 Low OG Mocha',
      precio: '$145.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/74561285-1607-443d-b31b-8887382c6a76/AIR+JORDAN+1+RETRO+LOW+OG.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
    },
    {
      nombre:'Air Jordan 11 Retro Low Diffused Blue',  
      precio: '$195.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c18b68a-07fc-4c4b-bd2c-49a8abd47f40/AIR+JORDAN+11+RETRO+LOW.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31236ecd-a774-4bf4-bf08-0f5ea28e5aaa/AIR+JORDAN+11+RETRO+LOW.png'
    
    },
    {
      nombre:'Air Jordan 4 Retro Oxidized Green',
      precio:'$190.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/15e82f46-2358-406d-9dbf-eaeb22668cd3/AIR+JORDAN+4+RETRO.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0604e24-0b81-43f7-9288-73b8274dda45/AIR+JORDAN+4+RETRO.png'
    
    },
    {
      nombre:'Air Jordan 1 Retro Low',
      precio:'$122.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/406af449-cbb4-436f-a5f9-1294fe1bcbd9/AIR+JORDAN+3+RETRO.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6de142b1-f672-48fd-8d39-9c23f09dad02/AIR+JORDAN+3+RETRO.png'
    },
    {
      nombre:'Air Jordan 5 Retro El Grito',
      precio: '$235.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ee38bbd1-8476-4175-bce4-f580ecb91750/AIR+JORDAN+5+RETRO+EL+GRITO.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e158ac19-e667-4bba-8767-276b81ca5dab/AIR+JORDAN+5+RETRO+EL+GRITO.png',
    },
    {
      nombre:'Air Jordan 4RM',  
      precio: '$185.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/990cda9d-ab7c-4d99-ac1b-20e8ea9694b7/WMNS+AIR+JORDAN+4+RM.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8e41a7d-79d8-4104-9164-b9f962a429af/WMNS+AIR+JORDAN+4+RM.png'
    
    },
    {
      nombre:'Air Jordan 1 Low Method of Make',
      precio:'$170.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce2aa856-0040-4867-9469-bb411ba87686/WMNS+AIR+JORDAN+1+MM+LOW.png'
    
    },
    {
      nombre:'Air Jordan 1 Low Method of Make Rose',
      precio:'$162.50',
      imgDefault:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba211a1e-cda0-4296-b3fa-cdb52c0c4985/WMNS+AIR+JORDAN+1+MM+LOW.png',
      imgHover:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fd07a84-e997-4ac7-a063-62391b4e8d75/WMNS+AIR+JORDAN+1+MM+LOW.png'
    }
  ];
  
  function renderizarProductos() {
    const contenedor = document.getElementById('productosJordan');
    productosJordan.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card cardProductos">
                <img src="${producto.imgDefault}" class="card-img-top" alt="${producto.nombre}" onmouseover="this.src='${producto.imgHover}'" onmouseout="this.src='${producto.imgDefault}'">
                <div class="card-body">
                    <h5 class="card-title titutloYprecio ">${producto.nombre}</h5>
                    <p class="card-text titutloYprecio ">${producto.precio}</p>
                    <button class="btn btn-comprar" onclick="agregarAlCarrito('${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>

                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

function agregarAlCarrito(nombreProducto, precioProducto) {
    Swal.fire({
        title: 'Agregar al carrito',
        html: `
            <img src="${productosJordan.find(p => p.nombre === nombreProducto).imgDefault}" alt="${nombreProducto}" style="width: 300px; height: 320px; margin-bottom: 10px; ">
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
                color: '#ffffff',
                customClass: {
                    popup: "custom-popup"} // Color del texto blanco
            });
            
        }
    });
}


// Llama a la función para renderizar los productos
renderizarProductos();