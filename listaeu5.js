
const range = (start, end, step = 1) => {
  const allNumbers = [start, end, step].every(Number.isFinite)
  if (!allNumbers) {throw new Error("range() espera apenas números finitos como argumentos.")}
  if (step <= 0) {throw new Error("o passo deve ser maior que zero")}
  if (start > end) {step = -step}

  // Core
  const length = Math.floor(Math.abs((end - start) / step) + 1)
  return Array.from(Array(length), (x, index) => start + index * step)
}

// -----------------------------------------------

// q2
const q2 = (lista) => {
  const tamanho = lista.length
  const ultimo = lista[tamanho - 1]
  const penultimo = lista[tamanho - 2]
  return [ultimo, penultimo]
}

// q3
const q3 = (lista) => {
  const tamanho = lista.reduce((acc, x) => acc + 1, 0)
  return tamanho
}

// q4
const q4 = (lista1) => (lista2) => {
  const res = l1.filter((x) => l2.indexOf(x) != -1)
  return res
}

// q5 Soma dos múltiplos de uma lista de naturais passada. Os múltimos podem ir até o máximo determinado.
const q5 = (max) => (naturaisMult) => {
  const intervaloNaturais = range(0, max-1, 1)
  console.log(intervaloNaturais)

  // Core
  const multiplos = naturaisMult.map((x) => intervaloNaturais.filter((y) => y % x == 0))
  console.log(multiplos)

  const multiplosFlat = multiplos.flat()
  const res = multiplosFlat.reduce((acc, x) => acc + x, 0)
  return res
}

// q6
const q6 = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const quadradoDaSoma = l.reduce((acc, x) => acc + x, 0)**2
  const somaDosQuadrados = l.map((x)=>x^2).reduce((acc, x) => acc + x, 0)
  return quadradoDaSoma - somaDosQuadrados
}

// Q7. Programa para retornar a lista de todos os números primos menores que um número natural n qualquer
const q7 = (n) => {
  const intervaloNaturais = range(0, n, 1)
  const res = intervaloNaturais.filter((x) => {
    range(2, Math.sqrt(x), 1).map(y => x % 2 === 0? true : false)
  })
  return res
}

// Q8. Programa para retornar os n primeiros algarismos de um número inteiro qualquer


// Q9. Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand'). Exemplo: 225 ---> 'two hundred twenty five' ---> 20


// Q10. Programa para replicar os elementos de uma lista um determinado número de vezes. Exemplo: replica [1,2,3] 4 vezes ---> [1,1,1,1,2,2,2,2,3,3,3,3]