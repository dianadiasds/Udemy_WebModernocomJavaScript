// Object.preventExtensions nao adiciona mas pode deletar e editar

const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99, tag:'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal - nao adiciona nem deleta, só edita
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Moraes'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes