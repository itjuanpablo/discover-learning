// Object
const person = {
  name: 'Juan',
  age: 20,
  weight: 65.5,
  isAdmin: true
}

console.log(person)

const prod1 = {}
prod1.nome = 'celular Iphone'
prod1.preco = 4998.00
// Evitar atributos com espaço
prod1['Desconto Legal'] = 0.40

console.log(prod1)

const prod2 = {
  nome: 'Teste',
  preco: 79.90,
  obj: {
    teste: 'teste'
  }
}
console.log(prod2)
