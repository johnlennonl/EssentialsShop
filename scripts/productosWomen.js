// Array de productos Jordan
const productosWomen = [
  {
    nombre: "Nike Windrunner ",
    precio: "$115.50",
    descripcion: " Women’s Loose UV Woven Full-Zip Jacket",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a229022e-d554-49ae-aeaf-2b1cedc20976/W+NSW+NK+WR+WVN+UV+FZ+JKT.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/59186fe2-f077-4165-81c4-9b92d02ca646/W+NSW+NK+WR+WVN+UV+FZ+JKT.png",
  },
  {
    nombre: "Nike Sportswear Phoenix Fleece ",
    precio: "$80.99",
    descripcion: " Women’s Over-Oversized Pullover Hoodie",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/454f1ac5-af5c-485e-b82f-316e8ac99ee3/W+NSW+PHNX+FLC+OOS+PO+HOODIE.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a66db9cf-0a08-477f-8180-d6aee30c317e/W+NSW+PHNX+FLC+OOS+PO+HOODIE.png",
  },
  {
    nombre: "Sabrina",
    precio: "$115.50",
    descripcion: "Reversible Basketball Jacket",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18b06be1-c5f7-4330-9b4b-3c66c7d743bc/U+NK+SABRINA+SIGNATURE+JKT.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a37c4d0-bd6d-4226-ba6d-2044143c8b91/U+NK+SABRINA+SIGNATURE+JKT.png",
  },
  {
    nombre: "Nike Sportswear",
    precio: "$82.50",
    descripcion: "Oversized Full-Zip French Terry Hoodie",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57de51fd-f04b-45cc-a2b6-7ea8b1d36f29/W+NSW+DANCE+OS+FZ+HDY.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10cf8773-7993-4354-b619-36d0292f51f8/W+NSW+DANCE+OS+FZ+HDY.png",
  },
  {
    nombre: "Nike Sportswear Phoenix Fleece",
    precio: "$85.50",
    descripcion: "Women’s High-Waisted Wide-Leg Logo Pants",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fabb6423-d5e3-4fbe-8aa8-6556693ec167/W+NSW+PHNX+FLC+HR+LOGO+PNT+WDE.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a91841ce-09c1-4757-8fe2-6a40620f809a/W+NSW+PHNX+FLC+HR+LOGO+PNT+WDE.png",
  },
  {
    nombre: "Nike Sportswear Phoenix Fleece Pants",
    precio: "$85.50",
    descripcion: "High-Waisted Wide-Leg Logo Pants",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b169caa-7823-4f7f-bebb-20328aafa212/W+NSW+PHNX+FLC+HR+LOGO+PNT+WDE.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1e242f7-6177-4637-ba97-6a5ff99bd8bb/W+NSW+PHNX+FLC+HR+LOGO+PNT+WDE.png",
  },
  {
    nombre: "Nike Windrunner Pants",
    descripcion: "Women’s High-Waisted Woven Open-Hem ",
    precio: "$87.50",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cebd1e21-4729-4b01-88d8-8f4a8ed3dc58/W+NSW+NK+WR+WVN+HR+OH+PANT.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a5352b9-1b75-4979-b3bf-1899d4dfac81/W+NSW+NK+WR+WVN+HR+OH+PANT.png",
  },
  {
    nombre: "Nike Sportswear Pants",
    precio: "$79.50",
    descripcion: "Low-Rise Oversized French Terry Open-Hem",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a53309c1-a5c5-4419-bc10-e466ce85549e/W+NSW+DANCE+OH+FLC+PANT.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ce0ebd75-c29b-4f56-b577-2161188d467b/W+NSW+DANCE+OH+FLC+PANT.png",
  },
  {
    nombre: "Nike Freestyle",
    descripcion: "Bra deportivo de baja sujeción con almohadillas para mujer",
    precio: "$45.50",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff2d808f-8074-4215-a620-f052cd9d8be7/W+NK+INDY+FREESTYLE+BRA.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/afc660a3-b195-4873-b80d-90c4c20d40fa/W+NK+INDY+FREESTYLE+BRA.png",
  },
  {
    nombre: "Nike Sportswear Shrug",
    descripcion: "top corto de French Terry oversized para mujer y niñas",
    precio: "$75.50",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93ffde0a-3b6e-47e7-af64-ca6205c3a48a/W+NSW+DANCE+OS+SHRUG.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9c9b85ed-801e-49d3-8cd3-f925d584e1de/W+NSW+DANCE+OS+SHRUG.png",
  },
  {
    nombre: "Nike Sportswear womens Bra",
    precio: "$40.50",
    descripcion: "Bra deportivo de baja sujeción con almohadillas para mujer",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/815bdec6-960c-4817-8ce7-727c4cca17e1/W+NK+JERSEY+BRA.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7f2c3e8-e990-4dd1-8e02-f9eac86b531e/W+NK+JERSEY+BRA.png",
  },
  {
    nombre: "Nike Zenvy Rib",
    precio: "$52.50",
    descripcion: "Bra deportivo de baja sujeción con almohadillas para mujer",
    imgDefault:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9b63328-6922-4299-9567-f1df4f6399f2/W+NK+INF+WIDE+RIB+BRA.png",
    imgHover:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0b505bb7-df74-4a60-91ff-aa1929ea89c1/W+NK+INF+WIDE+RIB+BRA.png",
  },
];

function renderizarProductosWomen() {
  const contenedor = document.getElementById("productosWomen");
  productosWomen.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
            <div class="card cardProductos">
                <img src="${producto.imgDefault}" class="card-img-top" alt="${producto.nombre}" onmouseover="this.src='${producto.imgHover}'" onmouseout="this.src='${producto.imgDefault}'">
                <div class="card-body">
                    <h5 class="card-title titutloYprecio ">${producto.nombre}</h5>
                    <p class="card-text titutloYprecio ">${producto.descripcion}</p>
                    <p class="card-text titutloYprecio ">${producto.precio}</p>
                    <button class="btn btn-comprar" onclick="agregarAlCarritoWomen('${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>

                </div>
            </div>
        `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarritoWomen(nombreProducto, precioProducto) {
  Swal.fire({
    title: "Agregar al carrito",
    html: `
            <img src="${
              productosWomen.find((p) => p.nombre === nombreProducto).imgDefault
            }" alt="${nombreProducto}" style="width: 300px; height: 320px; margin-bottom: 10px; ">
            <h4>${nombreProducto}</h4>
            <p>Precio: ${precioProducto}</p>
            <label for="size">Seleccione una talla:</label>
            <select id="size" class="form-select">
                <option value="8">Size S</option>
                <option value="8.5">Size M</option>
                <option value="9">Size L</option>
                <option value="9.5">Size XL</option>
                <option value="10">Size XXL</option>
            </select>
        `,
    showCancelButton: true,
    confirmButtonText: "Confirmar compra",
    cancelButtonText: "Cancelar",
    background: "#000000", // Color de fondo negro

    color: "#ffffff ",
    customClass: {
      popup: "custom-popup",
      title: "custom-title",
      htmlContainer: "custom-html-container",
      actions: "custom-actions",
      confirmButton: "custom-confirm-button",
      cancelButton: "custom-cancel-button",
    },

    preConfirm: () => {
      const size = Swal.getPopup().querySelector("#size").value;
      return { size: size };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `EXCELENTE ESTÁS A UN PASO DE OBTENER TUS ${nombreProducto}`,
        text: "Los métodos de pago que aceptamos son:",
        icon: "info",
        html: `
                    <div>
            Binance<br>
            Zelle<br>
            Transferencia Bancaria<br>
            Cryptomoneda
        </div>
                `,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        background: "#000000", // Color de fondo negro
        color: "#ffffff ",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          htmlContainer: "custom-html-container",
          actions: "custom-actions",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      }).then((finalResult) => {
        if (finalResult.isConfirmed) {
          const message = `Hola, el ${nombreProducto} está disponible?`;
          const whatsappUrl = `https://wa.me/584126581304?text=${encodeURIComponent(
            message
          )}`;
          window.open(whatsappUrl, "_blank");
        } else {
          // Aquí puedes manejar lo que sucede si se cancela la segunda alerta
          Swal.fire({
            title: "Compra cancelada",
            icon: "info",
            background: "#000000", // Color de fondo negro
            color: "#ffffff", 
            customClass: {
                popup: "custom-popup",
            }// Color del texto bla // Color del texto blanco
          });
        }
      });
    } else {
      // Si el usuario cancela la primera alerta, simplemente no hace nada
      Swal.fire({
        title: "Compra cancelada",
        icon: "info",
        background: "#000000", // Color de fondo negro
        color: "#ffffff", 
        customClass: {
            popup: "custom-popup",
        }// Color del texto blanco
      });
    }
  });
}

// Llama a la función para renderizar los productos
renderizarProductosWomen();
