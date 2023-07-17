// Array

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]

// acessar valores dentro do array
console.log(animals[0]) // posição 0
console.log(animals.length) // quantas posições no total

const valores = [7.8, 7.9, 8.2]
valores[4] = 10
console.log(valores[0], valores[1])
console.log(valores[4])
console.log(valores.length)
// Adicionar valores
valores.push({ id: 3 }, false, null, 'teste')

// Remove e retorna o último valor do array
console.log(valores.pop())

// Deleta o índice
delete valores[0]
console.log(valores)

