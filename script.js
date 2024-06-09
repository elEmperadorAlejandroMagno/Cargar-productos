const listaProductos = document.querySelector('.picantes')
const verMasButton = document.querySelector('.verMas');

function crearNuevoProducto ( imagen, nombre, precio, moneda ) {
  const productoContenedor = document.createElement('div');

  const imagenProducto = document.createElement('img');
  const nombreProducto = document.createElement('h2');
  const precioProducto = document.createElement('h2');

  productoContenedor.classList.add('producto_picante');
  nombreProducto.classList.add('nombre-product');
  precioProducto.classList.add('precio-product');

  imagenProducto.src = imagen;

  nombreProducto.textContent = nombre;
  precioProducto.textContent = "$"+ moneda + precio;

  productoContenedor.appendChild(imagenProducto);
  productoContenedor.appendChild(nombreProducto)
  productoContenedor.appendChild(precioProducto)

  return productoContenedor;
}

  const cargarProductos = async num => {
    const request = await fetch('http://localhost:1234/products?type=salsa');
    const res = await request.json();
    const arr = res;
    console.log(arr)

    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
      const nuevoProducto = crearNuevoProducto(arr[i]?.imagen, arr[i]?.nombre, arr[i]?.precio, arr[i].moneda);
      documentFragment.appendChild(nuevoProducto);
    }
    listaProductos.appendChild(documentFragment);
  }
  
let contador = 3;
cargarProductos(contador);

let position = 1;
let counting = 0;


async function cargarMasProductos(num) {
  // const moreProducts = await cargarProductos();
  const request = await fetch('http://localhost:1234/products?type=salsa');
  const res = await request.json();
  const arr = res;
    let newArr = arr.slice(position);
    position + 3;
  if (newArr.length == 3) verMasButton.style.display = "none";
    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
      const nuevoProducto = crearNuevoProducto(newArr[i].imagen, newArr[i].nombre, newArr[i].precio, newArr[i].moneda);
      documentFragment.appendChild(nuevoProducto);
    }
    listaProductos.appendChild(documentFragment);
}
// cargarMasProductos(2)

verMasButton.addEventListener('click', () => {
  cargarMasProductos(contador);
  position++;
  position++;
})
