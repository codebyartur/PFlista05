/* const conta = (elem) => (lista) => {

    const temp1 = lista.map((x) => x.toString())
    console.log(temp1)
    const temp2 = temp1.reduce((acc, x) => acc + x, '')
    console.log(temp2)
    const temp3 = temp2.split('')
    console.log(temp3)
    const temp4 = temp3.filter((x) => x == elem)
    return temp4.length
}

console.log(conta('.')([3, 9.5, 999, 0, 1.9, 19.3])) */

const inputStr = "O imc de Fred é 25.3. O imc de Maria é 20.2. O imc de Ana é 15.5. O imc de Paulo é 32.4."

// Funcionalidade 1 
const processarStringsPacientes = (inputStr) => {
    const temp1 = inputStr.match(/O imc de [A-Za-z]+ é \d+(\.\d+)?/g)
    const temp2 = temp1.map((str) => {
        const [, nome, imc] = str.match(/O imc de ([A-Za-z]+) é (\d+(\.\d+)?)/)
        return { nome: nome, imc: parseFloat(imc) }
    })
    return temp2
}
const pacientesProcessados = processarStringsPacientes(inputStr)

// Funcionalidade 2
const ordenarPacientesPorIMC = (inputLista) => {
    return [...inputLista].sort((a, b) => a.imc - b.imc)
}
console.log(ordenarPacientesPorIMC(pacientesProcessados))

// Funcionalidade 3
const classificarPacientes = (inputLista) => {
    const temp1 = inputLista.map((paciente) => ({
        ...paciente, 
        risco: paciente.imc < 18.5? "Baixo Peso" :
        paciente.imc < 24.9? "Peso Normal" :
        paciente.imc < 29.9? "Sobrepeso" :
        "Obesidade"}))
    return temp1
}
console.log(classificarPacientes(pacientesProcessados))

// Funcionalidade 4
const maiorEmenorIMC = (inputLista) => {
    const temp1 = inputLista.reduce((acc, paciente) => {
        if (paciente.imc > acc.maior.imc) acc.maior = paciente
        if (paciente.imc < acc.menor.imc) acc.menor = paciente
        return acc
    }, { maior: inputLista[0], menor: inputLista[0] })
    return temp1
}
console.log(maiorEmenorIMC(pacientesProcessados))

// Funcionalidade 5
const calcularMediaIMC = (inputLista) => {
    const somaTotalIMC = inputLista.reduce((acc, x) => acc + x.imc, 0)
    return (somaTotalIMC/inputLista.length).toFixed(1)
}
console.log(calcularMediaIMC(pacientesProcessados))