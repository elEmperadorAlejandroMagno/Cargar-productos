type Salsa = {
  name: string,
  price: number,
  picante: "alto" | "medio" | "bajo",
  imagen: string;
  type: "salsa" | "merch"
}

const Salsa : Salsa = {
  name: "Salsa picante habanero y tomate",
  price: 700,
  type: "salsa",
  picante: "alto",
  imagen: "habanero_tomate.png"
}

// 'http://localhost:1234/products?type=salsa'

async function getProducts(): Promise<Salsa[]> {
  const request = await fetch('http://localhost:1234/products?type=salsa&limit=1')
  const res = await request.json()
  const salsas: Salsa[] = [...res]
  if (!salsas) {
    throw new Error("Products not found")
  }
  return salsas
}

let salsas = getProducts();
console.log(salsas)