/*

somente 2 valores

true // verdadeiro
false // falso

*/

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Converter pra falso
isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

// Retornar o nome ou se estiver vazio retornar o valor 'Desconhecido'
let nome = ''
console.log(nome || 'Desconhecido')








// Converter pra verdadeiro
isAtivo = 1
console.log(!!isAtivo)
