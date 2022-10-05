const carritoBtn = document.getElementById("carrito");
const modal = document.getElementById("modal_overlay");
const cerrarModal = document.querySelector(".modal_close");
const vaciarCarrito = document.getElementById("vaciar_carrito");
const modalContainer = document.querySelector(".modal_container");
const span = document.querySelector(".contador");
const cards = document.querySelector(".cards");
const carritoCards = document.getElementById("cards_carrito");
const precioFinal = document.querySelector(".total");

vaciarCarrito.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
  localStorage.removeItem("carrito");
});

carritoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal_show");
});
cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal_show");
});


const carrito = [];
const productos = [];

class producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img
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

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});

function agregarAlCarrito(producto) {
  let buscarProducto = carrito.find((item) => item.id === producto.id);
  if (buscarProducto !== undefined) {
    buscarProducto.precio = buscarProducto.precio + producto.precio;
    buscarProducto.cantidad = buscarProducto.cantidad + 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad: 1,
    });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoCards.innerHTML = "";
  carrito.forEach((producto) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p>Cantidad:${producto.cantidad}</p>
      <p>$${producto.precio}</p>
      <button id="eliminar${producto.id}" class="btn eliminar">Eliminar</button>
      `;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carritoCards.append(div);
    div.className = "card";

    const btnEliminar = document.getElementById(`eliminar${producto.id}`);
    btnEliminar.addEventListener("click", (e) => eliminarDelCarrito(producto));
  });
  span.innerHTML = carrito.length;
  precioFinal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

function eliminarDelCarrito(producto) {
  let buscado = carrito.find((prod) => prod.id === producto.id);
  let indice = carrito.indexOf(buscado);
  carrito.splice(indice, 1);
  actualizarCarrito();
}

productos.forEach((producto) => {
  let div = document.createElement("div");

  div.innerHTML = `
  <img src="${producto.img}">
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>
  <button id=${producto.id} class="btn">Agregar al Carrito</button>
  `;
  div.className = "card";
  cards.append(div);

  const boton = document.getElementById(producto.id);
  boton.addEventListener("click", (e) => {
    agregarAlCarrito(producto);
  });
});