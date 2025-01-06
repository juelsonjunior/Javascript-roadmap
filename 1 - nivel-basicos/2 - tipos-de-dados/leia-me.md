# Tipos de dados

E para complementarmos o conceitos de variaveis não podemos deixar de falar sobre os tipos de dados da linguagem javascript e falaremos dos indispensaveis para todo iniciante em Js (javascript).

[ 1 ] - String <br>
[ 2 ] - Number<br>
[ 3 ] - Boolean<br>
[ 4 ] - Array<br>
[ 5 ] - Object<br>
[ 6 ] - Null<br>
[ 7 ] - undefined

## Como funciona cada tipo de dados em js

<strong>String</strong>: Caracteres ou numeros desde que estejam entre " " serão considerados string mesmo que for uma cadeia de numero sera visto como string ou texto.

Exemplo:

```
const nome = "texto"
const nome = "123"
```

<strong>Number</strong>: Conjunto de numeros de 0 a 9007199254740991

Exemplo:

```
const numero = 28
const numero = 999999
```

<strong>Boolean</strong>: Valores que determinam estado verdadeiro(true) ou falso(false)

Exemplo:

```
const trabalhando = true
const trabalhando false
```

<strong>Array</strong>: É uma coleção de dados ordenados onde cada dado esta armazena em uma posição também chamada de indice onde o primeiro dado sera sempre o 0, array são usados para armazenar listas onde a organização é importante

Exemplo:

```
const nomes = ["juelson", "junior", "teste"]
const numeros = [300, 500, 23, 40]
const conjunto = ["junior", 500, true, "bla bla bla"]
```
Como acessar seus valores de um array:
```
console.log(nomes[0]) // juelson
console.log(numeros[1]) // 500
```

<strong>Object</strong>: Um objecto é uma coleção de dados armazenada com chave e valor aonde cada chama seria como o identificador de cada dado geralmente uma string(simbolo) objecto geralemnte são usados para criar entidade com propriedades e valores.

Exemplo:

```
const pessoas = {
    nome: "Juelson",
    idade: 20,
    estadoCivil: "solteiro",
    trabalhando: true
}
```
Como acessar valores de um array:
```
console.log(pessoas.nome) // Juelson
console.log(pessoas.estadoCivil) // solteiro
```

<strong>Null</strong>: Significa nenhum valor ou seja é usado para especificar intencionalmente que uma variavel ou objecto não contem valor

Exemplo:
```
Const senha = null
console.log(senha)// null
```

<strong>Undefined</strong>: Significa que uma variavel foi declarada mais nenhum valor foi atribuido a ela.

Exemplo:
```
let nome
console.log(nome)// undefined 
```

## Não se limite a ver o conteúdo abra o seu editor de codigo e pratica para fixar a informação