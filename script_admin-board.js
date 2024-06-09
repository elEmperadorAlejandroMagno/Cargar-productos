const listaProductos = document.querySelector('.content')

function crearNuevoProducto ( imagen, nombre, precio, id, moneda ) {
  const productoContenedor = document.createElement('div');

` <p>id 1</p>
  <img src="#" alt="imagen producto">
  <h3>Nombre</h3>
  <h3>tipo</h3>
  <p>precio $1</p>
  <p>cantindad (10)</p>
  <button>Delete</button>`

  const imagenProducto = document.createElement('img');
  const nombreProducto = document.createElement('h3');
  const precioProducto = document.createElement('p');
  const cantidad = document.createElement('p');
  const button = document.createElement('button');
  const idProduct = document.createElement('p');

  productoContenedor.classList.add('info-product-container');
  nombreProducto.classList.add('nombre-product');
  precioProducto.classList.add('precio-product');
  cantidad.classList.add('cantidad');
  idProduct.classList.add('id-product');

  imagenProducto.src = imagen;
  cantidad.value = 1;
  nombreProducto.textContent = nombre;
  precioProducto.textContent = "$" + moneda + precio;
  idProduct.textContent = id;
  button.textContent= "Delete";

  productoContenedor.appendChild(idProduct);
  productoContenedor.appendChild(imagenProducto);
  productoContenedor.appendChild(nombreProducto);
  productoContenedor.appendChild(precioProducto);
  productoContenedor.appendChild(cantidad);
  productoContenedor.appendChild(button);

  return productoContenedor;
}

  const cargarProductos = async () => {
    const request = await fetch('http://localhost:1234/products');
    const data = await request.json();

    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      const nuevoProducto = crearNuevoProducto(data[i]?.imagen, data[i]?.nombre, data[i]?.precio, data[i]?.id, data[i].moneda);
      documentFragment.appendChild(nuevoProducto);
    }
    listaProductos.appendChild(documentFragment);
  }
  
cargarProductos();


// MODAL PARA CREAR Y MODIFICAR PRODUCTOS

const addProduct = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const createProduct = document.querySelector('.create-product');

const modalBg = document.querySelector('.adm-board-modal-bg');
const modal = document.querySelector('.adm-board-modal');

addProduct.addEventListener('click', ()=> {
  modalBg.style.display ="block";
  modal.style.display = "block";
})
closeModal.addEventListener('click', ()=> {
  modalBg.style.display ="none";
  modal.style.display = "none";
})
createProduct.addEventListener('click', ()=> {
  // llamar al backend para hacer peticiones POST, PATCH y GET
  modalBg.style.display ="none";
  modal.style.display = "none";
})
