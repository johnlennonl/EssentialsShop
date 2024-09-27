function showProduct(name, price, imageUrl) {
    Swal.fire({
        title: name,
        text: `Precio: ${price}`,
        imageUrl: imageUrl,
        imageWidth: 300,
        imageHeight: 320,
        imageAlt: name,
        showCloseButton: true,
        background: '#000',
        color: '#fff',
        html: `
        <label for="size">Seleccione una talla:</label>
        <select id="size" class="form-select">
            <option value="8">Size 8</option>
            <option value="8.5">Size 8.5</option>
            <option value="9">Size 9</option>
            <option value="9.5">Size 10</option>
            <option value="10">Size 10.5</option>
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
          title: `EXCELENTE ESTÁS A UN PASO DE OBTENER TUS ${name}`,
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
            const message = `Hola, el ${name} está disponible?`;
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
