const nome = "Juan"
const concatenacao = "Olá" + nome + "!"

// Considera a quebra de linha
const template = `
Olá
${nome}!
`

console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
