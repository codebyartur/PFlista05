
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
  const res = lista1.filter((x) => lista2.indexOf(x) != -1)
  return res.length
}
console.log(q4(['Artur', 'Juh', 'Cabeça'])(['Artur', 'Julia', 'Cabeça']))

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
const primeirosAlgarismos = (n) => (num) => num.toString().slice(0, n)

// Q9. Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand'). Exemplo: 225 ---> 'two hundred twenty five' ---> 20
const extenso = (num) => {
  switch (num) {
      case 1: return 'one'
      case 2: return 'two'
      case 3: return 'three'
      case 4: return 'four'
      case 5: return 'five'
      case 6: return 'six'
      case 7: return 'seven'
      case 8: return 'eight'
      case 9: return 'nine'
      case 10: return 'ten'
      case 11: return 'eleven'
      case 12: return 'twelve'
      case 13: return 'thirteen'
      case 14: return 'fourteen'
      case 15: return 'fifteen'
      case 16: return 'sixteen'
      case 17: return 'seventeen'
      case 18: return 'eighteen'
      case 19: return 'nineteen'
      case 20: return 'twenty'
      case 30: return 'thirty'
      case 40: return 'fourty'
      case 50: return 'fifty'
      case 60: return 'sixty'
      case 70: return 'seventy'
      case 80: return 'eighty'
      case 90: return 'ninety'
      case 100: return 'one hundred'
      case 1000: return 'one thousand'
      default: 'return tratar(num)';
  }
} 

const nletras = (numero) => extenso(numero).split(' ').join('').length
/* console.log(nletras(12)) */

// Q10. Programa para replicar os elementos de uma lista um determinado número de vezes. Exemplo: replica [1,2,3] 4 vezes ---> [1,1,1,1,2,2,2,2,3,3,3,3]
const replicaElementos = (n) => (lista) => {
  const temp1 = lista.map((x) => Array(n).fill(x))
  return temp1.flat()
}
console.log(replicaElementos(4)([1, 2, 3])) // [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]

// Q12. Programa para retornar a sigla de uma instituição (apenas as iniciais maiúsculas)
const sigla = (str) => str.match(/[A-Z]/g).join('')
console.log(sigla("Organização Mundial de Saúde"))