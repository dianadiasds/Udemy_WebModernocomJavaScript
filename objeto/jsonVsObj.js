//JSON java script object notation - notacao de objetos em javascript - nao é objeto é texto
//formato textual generico
 
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}

console.log(JSON.stringify(obj))


console.log(JSON.parse('{ "a": 1.7, "b": 2, "string", "c": true, "d": {}, "e": [] }'))
