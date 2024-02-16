function calcular() {
    let producto1 = parseFloat(document.getElementById("producto1").value);
    let producto2 = parseFloat(document.getElementById("producto2").value);
    let producto3 = parseFloat(document.getElementById("producto3").value);
    let producto4 = parseFloat(document.getElementById("producto4").value);
    let producto5 = parseFloat(document.getElementById("producto5").value);
    
  
  
   
    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) {
         error("Por favor, ingrese un número válido.");
         } else {
          let suma = producto1 + producto2 + producto3 + producto4 + producto5;
          let mensaje = "";
          let subtotal = "";
          let descuento = "";
          let totalpago = "";
          if (suma >= 0.00 && suma <= 999.99) {
            subtotal = suma;
            descuento = suma * 0.00;
            totalpago =  subtotal - descuento;
            mensaje = "No Aplica descuento";
          } else if (suma >= 1000.00 && suma <= 4999.99) {
            subtotal = suma;
            descuento = suma * 0.10;
            totalpago =  subtotal - descuento;
            mensaje = "Su descuento de un 10%";
          } else if (suma >= 5000.00 && suma <= 8999.99) {
            subtotal = suma;
            descuento = suma * 0.20;
            totalpago =  subtotal - descuento;
            mensaje = "Su descuento de un 20%";
          } else if (suma >= 9000.00 && suma <= 12999.99) {
            subtotal = suma;
            descuento = suma * 0.30;
            totalpago =  subtotal - descuento;
            mensaje = "Su descuento de un 30%";
          } else if (suma >= 13000.00) {
            subtotal = suma;
            descuento = suma * 0.40;
            totalpago =  subtotal - descuento;
            mensaje = "Su descuento de un 40%";
          } else {
                 mensaje("Descuento 0%");
            return; 
          }
          
         
          document.getElementById("subtotal").textContent = "Sub Total:  " + suma;
          document.getElementById("descuento").textContent = mensaje;
          document.getElementById("totalpago").textContent = "Total A Pagar:  " + totalpago;
    }
}

function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en la Operacion",
        text: text
    });
  }
  
  
  function limpiarFormulario() {
    document.getElementById("producto1").value = " ";
    document.getElementById("producto2").value = " ";
    document.getElementById("producto3").value = " ";
    document.getElementById("producto4").value = " ";
    document.getElementById("producto5").value = " ";
  
  }