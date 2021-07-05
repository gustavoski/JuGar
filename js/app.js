//funciones
//costo total del la compra
function compraTotal(a, b) {
  return a * b;
}

function Patin(cod, nombre, marca, precio) {
  this.cod = cod;
  this.nombre = nombre;
  this.marca = marca;
  this.precio = precio;
}

//Objetos
const patin1 = new Patin(1, "Patin", "Indeme", 3000);
const patin2 = new Patin(2, "Patin", "ECO", 1500);
const patin3 = new Patin(3, "Patin", "Fila", 5000);
const patin4 = new Patin(4, "Patin", "ECO-2", 2000);


//Condicionales

//bienvenida al sitio
if (
  confirm(
    "Bienvenid@!!! Nuestro asistente personal te ayudará a realizar tu compra, ¿Desea empezar?"
  )
) {
  //confirmación del usuario para iniciar una compra
  if (
    confirm(
      "Por el momento, disponemos unicamente de stock en patines, ¿Quiere comprar un par?"
    )
  ) {
    //información acerca de los patines que puede adquirir el usuario
    alert(
      "Podemos ofrecerte las siguientes opciones: \n 1- Patines Indeme \n 2- Patines Eco \n 3- Patines Fila \n 4- Patines Eco-2 "
    );
    //el usuario indica la opción que desea comprar
    let opcionPatines = Number(
      prompt("Indique el número de la opcion que desea comprar")
    );
    
    //validacion de la opción elegida
    if (opcionPatines < 1 || opcionPatines > 4) {
      alert("Esa opción no esta disponible, dejaremos que navegues la página");
    } else {
       //el usuario indica la cantidad que desea comprar 
        let cantidad = Number(prompt("Indique la cantidad que desea comprar"));
       //switch que devuelve información al usuario en base a la opción elegida
      switch (opcionPatines) {
        case 1:
          let total1 = compraTotal(patin1.precio, cantidad);
          if (
            confirm(
              "Vas a comprar " +
                cantidad +
                " " +
                "pares de patines marca " +
                patin1.marca +
                " " +
                "\n La compra total es de " +
                total1 +
                "\n ¿Confirmas la compra?"
            )
          ) {
            alert('Gracias por tu compra');
            break;
          } else {
            alert("Te esperamos pronto!");
            break;
          }

        case 2:
          let total2 = compraTotal(patin2.precio, cantidad);
          if (
            confirm(
              "Vas a comprar " +
                cantidad +
                " " +
                "pares de patines marca " +
                patin2.marca +
                " " +
                "\n La compra total es de " +
                total2 +
                "\n ¿Confirmas la compra?"
            )
          ) {
            alert('Gracias por tu compra');
            break;
          } else {
            alert("Te esperamos pronto!");
            break;
          }

        case 3:
          let total3 = compraTotal(patin3.precio, cantidad);
          if (
            confirm(
              "Vas a comprar " +
                cantidad +
                " " +
                "pares de patines marca " +
                patin3.marca +
                " " +
                "\n La compra total es de " +
                total3 +
                "\n ¿Confirmas la compra?"
            )
          ) {
            alert('Gracias por tu compra');
            break;
          } else {
            alert("Te esperamos pronto!");
            break;
          }

        case 4:
          let total4 = compraTotal(patin4.precio, cantidad);
          if (
            confirm(
              "Vas a comprar " +
                cantidad +
                " " +
                "pares de patines marca " +
                patin4.marca +
                " " +
                "\n La compra total es de " +
                total4 +
                "\n ¿Confirmas la compra?"
            )
          ) {
            alert('Gracias por tu compra');
            break;
          } else {
            alert("Te esperamos pronto!");
            break;
          }
      }
    }
  } else {
    alert("Te esperamos pronto!");
    
  }
} else {
  alert("Dejaremos que recorras la página por tu cuenta");
  
}
