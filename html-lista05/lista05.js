/**
 * FUNÇÕES AUXILIARES!
 */

// Função para gerar uma lista de números inteiros entre dois valores
 const range = (start, end, step = 1) => {
    const allNumbers = [start, end, step].every(Number.isFinite)
    if (!allNumbers) {throw new TypeError('range() espera apenas números finitos como argumentos.')}
    if (step <= 0) {throw new Error('passo deve ser um número maior que zero.')}
    if (start > end) {step = -step}
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    return Array.from(Array(length), (x, index) => start + index * step)
}

// Função para processar e limpar a lista de entrada
const limpaEntrada = (entrada) => {
    // Substitui vírgulas por espaços e divide a string em elementos
    return entrada.replace(/,/g, ' ').split(/\s+/).filter(x => x.trim() !== '');
}

/**
 * equals()
 *
 * Função que compara se duas listas são iguais.
 * Elas precisam ter o mesmo comprimento e, obviamente,
 * os mesmos elementos.
 */
const equals = (list1, list2) =>
    list1.length === list2.length &&
    list1.every((value, i) => value === list2[i]);

/** 
 * QUESTÃO 3 
*/
const tamanho = (lista) => {
    const saida = lista.reduce((acc,x)=>acc+1,0)
    return saida
}

const q3 = () => {
    const entrada = document.getElementById("q3input").value
    const lista = limpaEntrada(entrada)
    const resultado = tamanho(lista)
    // Torna o <span> visível
    const span = document.getElementById("q3output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}

/** 
 * QUESTÃO 4 - Programa para contar o número de elementos presentes numa primeira lista que também estão presentes numa segunda. Dica: o index de um elemento inexistente é \(-1\). 
    Ex: \(['Ana','Bia','Marcela','Carlos','Maria']\) e \(['Bia','João, 'Marcela','Carlos','Camila'] \to 3\) 
*/
const compara = (lista1) => (lista2) => {
    const lista = lista1.filter((x)=>lista2.indexOf(x)!=-1)
    const saida = tamanho(lista)
    return saida
}
const q4 = () => {
    const entrada1 = document.getElementById("q4input1").value
    const entrada2 = document.getElementById("q4input2").value
    const lista1 = limpaEntrada(entrada1)
    const lista2 = limpaEntrada(entrada2)
    const resultado = compara(lista1)(lista2)
    // Torna o <span> visível
    const span = document.getElementById("q4output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}
    
/** 
 * QUESTÃO 5 - Q5 - Dada uma lista de números naturais e um valor natural máximo, crie um programa para somar todos os múltiplos de cada um desses números naturais existentes no conjunto de valores menores que máximo. 
    <br>Ex: \([3,5], 10 \to 23\) 
*/
const somaMultiplos = (max) => (lista) => {
    const valores = lista.map((x)=>parseInt(x))
    console.log(valores)
    const intervaloNaturais = range(0,max-1,1)
    console.log(intervaloNaturais)
    const multiplos = valores.map((x)=>intervaloNaturais.filter((y)=>y%x==0))
    console.log(multiplos)
    const multiplosFlat = multiplos.flat()
    console.log(multiplosFlat)
    const saida = multiplosFlat.reduce((acc,x)=>acc+x,0)
    return saida
}

// const somaMultiplos35max1000 = somaMultiplos(1000)([3,5])

const q5 = () => {
    const entrada1 = document.getElementById("q5input1").value
    const entrada2 = document.getElementById("q5input2").value
    const lista1 = limpaEntrada(entrada1)
    const resultado = somaMultiplos(entrada2)(lista1)
    // Torna o <span> visível
    const span = document.getElementById("q5output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}

/**
 * QUESTÃO 9 - Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand').
 * Ex: 225 ---> 'two hundred twenty five' ---> 20
 */

const tratar = (num) => {
    const numstr = num.toString()
    const len = numstr.length
    if (len == 2) {
        const unidade = numstr[1]
        const dezena = numstr[0]+'0'
        const final = `${extenso(parseInt(dezena))} ${extenso(parseInt(unidade))}`
        return final
    } else if (len == 3) {
        const dezena = numstr.substring(1,3)
        const centena = numstr[0]
        if (parseInt(dezena) < 20) {
            return `${extenso(parseInt(centena))} hundred ${extenso(parseInt(dezena))}`
        } else {
            const unidade = numstr[2]
            const dezena = numstr[1]+'0'
            return `${extenso(parseInt(centena))} hundred ${extenso(parseInt(dezena))} ${extenso(parseInt(unidade))}`
        }        
    }
}

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
        default: return tratar(num)
    }
} 

const nletras = (numero) => {
    const str = extenso(numero)
    console.log(str)
    const listagem = str.split(' ').join('')
    console.log(listagem)
    return listagem.length
}

const extensostr = extenso(999)
console.log(extensostr)
console.log(nletras(extensostr))

const q9 = () => {
    const entrada = parseInt(document.getElementById("q9input").value)
    const resultado = nletras(entrada)
    // Torna o <span> visível
    const span = document.getElementById("q9output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}



/**
 * QUESTÃO 10 - Programa para replicar os elementos de uma lista um determinado número de vezes. 
 * Ex: replica \(4x [1,2,3] ---> [1,1,1,1,2,2,2,2,3,3,3,3]\)
 */

const replica = (n) => (lista) => {
    return (lista.map((x)=>Array(n).fill(x))).flat()
}

// const duplica = replicaN(2)
// const exemplo1 = [1,2,3]
// const exemplo2 = ['Ana','Maria', 'Estela']
// log(replicaN(5)(exemplo1))
// log(duplica(exemplo2))

const q10 = () => {
    const entrada1 = parseInt(document.getElementById("q10input1").value)
    const entrada2 = document.getElementById("q10input2").value
    const lista2 = limpaEntrada(entrada2)
    const resultado = replica(entrada1)(lista2)
    // Torna o <span> visível
    const span = document.getElementById("q10output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}

/**
 * QUESTÃO 11 - Programa para contar a quantidade de vezes que um certo de algarismo aparece entre dois valores naturais passados. 
 * Exemplo: entre 1 e 100, o algarismo 9 aparece 20 vezes.
 */
const contar = (alg) => (n1) => (n2) => {
    const lista = range(n1,n2,1)
    const listaStr = lista.map((x)=>x.toString())
    const str = listaStr.reduce((acc,x)=>acc+x,'')
    const listaChars = str.split('')
    const listaAlg = listaChars.filter((x)=>x==alg)
    return tamanho(listaAlg)
}
//EXPLICAÇÃO: 
//A lógica algorítimica aqui foi:
//1. usar range para gerar a lista com todos os naturais do intervalo
//2. usar map para transformar cada natural em uma string
//3. usar reduce para concatenar todas as strings gerando uma única sem espaços
//4. usar split para re-transformar essa string em uma lista de caracteres INDIVIDUAIS
//5. filtrar essa lista de caracteres para considerar apenas aqueles iguais ao solicitado pelo usuário
//6. retornar o número de elementos dessa lista filtrada, que é exatamente o pedido pela questão.

const q11 = () => {
    const algarismo = parseInt(document.getElementById("q11input1").value)
    const lim1 = parseInt(document.getElementById("q11input2").value)
    const lim2 = parseInt(document.getElementById("q11input3").value)
    const resultado = contar(algarismo)(lim1)(lim2)
    const span = document.getElementById("q11output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}

/** 
 * QUESTÃO 12 - Programa para retornar a sigla de uma instituição (apenas considerar as iniciais maiúsculas).
Exemplo: Organização Mundial da Saúde ===> OMS
*/
const sigla = (lista) => {
    const iniciais = lista.map((x)=>x[0])
    // Considerar apenas as letras MAIÚSCULAS 
    // do que foi passado pelo usuário na caixa de texto HTML.
    console.log(iniciais)
    const maiusculas = iniciais.filter((x)=>/[A-Z]/.test(x))
    console.log(maiusculas)
    const saida = maiusculas.join('')
    return saida
}

const q12 = () => {
    const entrada = document.getElementById("q12input").value
    const lista = limpaEntrada(entrada)
    const resultado = sigla(lista)
    const span = document.getElementById("q12output")
    span.style.display = "inline"
    // Atualiza o conteúdo do <span>
    span.innerHTML = resultado
}