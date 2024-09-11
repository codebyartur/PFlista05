// q2
const lista = ["Artur", "Júlia", "Tur", "Juh"]
const q2 = (lista) => {
  const tamanho = lista.length
  const ultimo = lista[tamanho - 1] // Output
  const penultimo = lista[tamanho - 2] // Output
  return [ultimo, penultimo]
}

// q3
const q3 = (lista) => {
  const tamanho = lista.reduce((acc, x) => acc + 1, 0)
  return tamanho
}

// q4
const q4 = (lista1, lista2) =>
  console.log(
    lista1.map((e1)=>lista2.map((e2)=>e1===e2? 1:0))
  )
console.log(q4([1, 2], [2, 3]))