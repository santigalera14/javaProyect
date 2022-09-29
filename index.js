const carrito = [];
const productos = [];

class producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  sumarIva() {
    return (this.precio = this.precio * 1), 21;
  }
  vendido() {
    this.stock = this.stock - 1;
  }
}

const producto1 = new producto(1, "Buzo Gvng", 12599, 2);
productos.push(producto1);
const producto2 = new producto(2, "Jogger", 7000, 1);
productos.push(producto2);
const producto3 = new producto(3, "Chomba Dc", 5790, 3);
productos.push(producto3);
const producto4 = new producto(4, "Campera KOTK", 13599, 2);
productos.push(producto4);
const producto5 = new producto(5, "Gorro", 4000, 4);
productos.push(producto5);
const producto6 = new producto(6, "Riñonera", 3000, 5);
productos.push(producto6);

function mostrarProductos() {
  alert(
    "Bienvenido a StreetWear, nuestros productos se presentan de la siguiente forma",
  );
  productos.forEach((producto) => {
    alert(`
            ${producto.nombre}
            $${producto.precio}
        `);
  });
}

function mostrarCarrito() {
  alert("Usted tiene los siguientes productos en su carrito:");
  carrito.forEach((producto) => {
    alert(`
            ${producto.nombre}
            $${producto.precio}
        `);
  });

  let continuar = Number(
    prompt("Que quiere hacer: 1-confirmar compra, 2-vaciar carrito"),
  );
  switch (continuar) {
    case 1:
      let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
      let iva = total * 1.21;
      alert(`El total de su compra es de $${iva}`);
      break;
    case 2:
      carrito.splice(0, carrito.length);
      alert("Su carrito se vacio con exito!");
      console.log(carrito);
      break;
  }
}

function comprar() {
  let compra = Number(
    prompt(
      "Elija el producto que quiera: 1-buzo gvng, 2-jogger, 3-chomba dc, 4-campera kotk, 5-gorro, 6-riñonera o 0-salir",
    ),
  );

  while (compra !== 0) {
    let resultado;
    switch (compra) {
      case 1:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 2:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 3:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 4:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 5:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 6:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      default:
        alert("Ingrese un producto de la lista por favor");
    }
    compra = Number(
      prompt(
        "Elija el producto que quiera: 1-buzo gvng, 2-jogger, 3-chomba dc, 4-campera kotk, 5-gorro, 6-riñonera o 0-salir",
      ),
    );
  }
}

mostrarProductos();
comprar();
mostrarCarrito();

function agregarAlCarrito (){
  alert("agregado al carrito");
} 



let boton = document.getElementById("agregar al carrito")
boton.addEventListener ("mousedown", () => console.log("mousedown"));
boton.addEventListener ("click", agregarAlCarrito)
boton.addEventListener ("mouseup", () => console.log("mouseup"))  

let saludo = document.getElementById("saludo")
let input = document.getElementById("mail")
input.addEventListener ("input", () => {
  if(!input.value.includes("@")){
    saludo.innerHTML = "correo incorrecto"
    saludo.className = "rojo"
  }else{
    saludo.innerHTML = "correo correcto"
    saludo.className = "verde"
  }
})