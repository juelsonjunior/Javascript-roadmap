//Metodos para trasformar uma string

//Length -- Verifica a quantidade de caracteres também usando em arrays
console.log('----------length----------')
var nome = 'juelson';
console.log(nome.length)

//indexOf - Pega a posição do caracter
console.log('----------indexOf----------')
var frase = 'Ola mundo me livrei da maldição';

console.log(nome[4])

console.log(frase.indexOf("mundo"))

//Slice - pegar determinado caracter de uma frase pela sua posição
var mundo = frase.slice(4, 9)
console.log(mundo)

//Replace - trocar caracter de uma frase ou palavra
var novaFrase = frase.replace('mundo', 'World')
console.log(novaFrase)

//Metodos para modificar uma string

//toUppercase -Transforma letras em maiúscula
var frase = "Eu sou o Juelson Júnior";
var fraseMaiuscula = frase.toUpperCase();
console.log(fraseMaiuscula)

//toLoweCase -Transforma as letras em miniscula
var fraseMiniscula = frase.toLowerCase();
console.log(fraseMiniscula)

//Trin -Remove espaçamentos na frase ou no input
var nome = "      Juelson         ";

var novaTrin = nome.trim();
console.log(nome)
console.log(novaTrin)

//Split -Transformar string em um vetor
var palavra = "Juelson";

var palavraSplit = palavra.split("");
console.log(palavraSplit)

var tags = "php, javascript, python, cubol"
var outraSplit = tags.split(", ");
console.log(outraSplit)

//LastIndexOf
var fraseDois = "Pega a ultima frase ou index de uma frase";

console.log(fraseDois.indexOf("frase"))
console.log(fraseDois.lastIndexOf("frase"))


