const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen')//adicionar um item na ultima posicao do array
console.log(pilotos)

pilotos.shift() //remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um item na primeira posicao do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicinar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array
console.log(algunsPilotos2)