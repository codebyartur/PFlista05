// Auxiliares
const pipe = (...fns) => (inicial) => fns.reduce((acc, fn) => fn(acc), inicial)
const log = (texto) => console.log(texto)

const inputStr = "O imc de Fred é 25.3. O imc de Maria é 20.2. O imc de Ana é 15.5. O imc de Paulo é 32.4"

// Funcionalidade 1
const processarStringPacientes = (inputStr) => {
  const listaFatiada = inputStr.match(/O imc de [A-Za-z]+ é \d+(\.\d+)?/g)
  const reg = listaFatiada.map((str) => {
  const [frase, nome, imc] = str.match(/O imc de ([A-Za-z]+) é (\d+(\.\d+)?)/)
     return ({ nome: nome, imc: parseFloat(imc) })
   })
   return reg
 }
const pacientesProcessados = processarStringPacientes(inputStr)

// Funcionalidade 2
const ordenarPacientesPorIMC = (inputLista) => [...inputLista].sort((a, b) => a.imc - b.imc)

// Funcionalidade 3
const maiorEmenorIMC = (pacientes) => {
  const temp = pacientes.reduce((acc, paciente) => {
    if (paciente.imc > acc.maior.imc) acc.maior = paciente
    if (paciente.imc < acc.menor.imc) acc.menor = paciente
    return acc
  }, { maior: pacientes[0], menor: pacientes[0] })
  return temp
}

// Funcionalidade 4
const classificaIMC = (listaPacientes) => {
  return listaPacientes.map((paciente) => ({
    ...paciente,
    risco: paciente.imc < 18.5? "Baixo peso" : 
    paciente.imc < 24.9? "Peso Normal" :
    paciente.imc < 29.9? "Sobrepeso" :
    "Obesidade"
  }))
}

// Funcionalidade 5
const mediaIMC = (listaPacientes) => {
  const soma = listaPacientes.reduce((acc, paciente) => paciente.imc + acc, 0)
  return (soma/listaPacientes.length).toFixed(1)
}
