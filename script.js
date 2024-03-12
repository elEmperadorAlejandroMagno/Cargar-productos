const listaProductos = document.querySelector('.picantes')
const verMasButton = document.querySelector('.verMas');

function crearNuevoProducto ( imagen, nombre, precio ) {
  const productoContenedor = document.createElement('div');

  const imagenProducto = document.createElement('img');
  const nombreProducto = document.createElement('h2');
  const precioProducto = document.createElement('h2');
  const cantidad = document.createElement('span');
  const inputCantidad = document.createElement('input');
  const masButton = document.createElement('button');
  const menosButton = document.createElement('button');

  productoContenedor.classList.add('producto_picante');
  nombreProducto.classList.add('nombre-product');
  precioProducto.classList.add('precio-product');
  inputCantidad.classList.add('cantidad-input');
  masButton.classList.add('mas');
  menosButton.classList.add('menos');

  imagenProducto.src = imagen;
  inputCantidad.type = "number";
  inputCantidad.value = 1;
  nombreProducto.textContent = nombre;
  precioProducto.textContent = precio;
  menosButton.textContent = "-";
  masButton.textContent = "+";

  cantidad.appendChild(menosButton);
  cantidad.appendChild(inputCantidad);
  cantidad.appendChild(masButton);

  productoContenedor.appendChild(imagenProducto);
  productoContenedor.appendChild(nombreProducto)
  productoContenedor.appendChild(precioProducto)
  productoContenedor.appendChild(cantidad);

  return productoContenedor;
}

  const cargarProductos = async num => {
    const request = await fetch('http://localhost:1234/products?type=salsa');
    const res = await request.json();
    console.log("magno", res)
    const arr = res;
    console.log(arr)

    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
      const nuevoProducto = crearNuevoProducto(arr[i]?.imagen, arr[i]?.nombre, arr[i]?.precio);
      documentFragment.appendChild(nuevoProducto);
    }
    listaProductos.appendChild(documentFragment);
  }
  
let contador = 2;
cargarProductos(contador);

let position = 2;

async function cargarMasProductos(num) {
  const moreProducts = await cargarProductos();
  const request = await fetch('http://localhost:1234/products?type=salsa');
  const res = await request.json();
  const arr = res;
  // const newArr = arr.slice(position);
  // let lastArr = newArr.length;
  // if(lastArr <= 3) {
  //   verMasButton.style.display = "none";
  // }
  const newArr = arr;
  console.log(newArr)
    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
      const nuevoProducto = crearNuevoProducto(newArr[i].imagen, newArr[i].nombre, newArr[i].precio);
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
