//Criando dias variaveis com o var
const usuario = 'Juelson';
const idade = 21;

console.log(usuario, idade);// Juelson 21

//Reatribuindo valores
usuario = 'Teste';
idade = 22;
console.log(usuario, idade)// Vai dar erro const não permite reatribuição

//Redeclarando a variavel usuario
var usuario = 200// Vai dar erro const não permite redeclaração da mesma variavel
