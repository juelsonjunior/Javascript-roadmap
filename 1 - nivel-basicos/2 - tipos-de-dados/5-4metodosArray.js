const userList = [
    {name: 'Juelson', money: 1000},
    {name: 'Edmar', money: 3000},
    {name: 'Miguel', money: 5000},
    {name: 'Jose', money: 5000},
    {name: 'Marta', money: 3000}
]
//Serva para modificarmos valores em um array e retorna um novo array com os dados mantendo o original
const userMap = userList.map(user => user.money += 100)

//Serve para filtramos uma condição em um array e retorna um novo array
const userFilter = userList.filter(user => user.money >= 5000)

//Serve para procuramos uma informação dentro de uma array
const dadosfind = userList.find(user =>  user.name === 'Edmar')

//Recebe um teste logico e retorna true ou false se todos elementos passarem no teste
const dadosEvery = userList.every(user => user.money > 1000)

//Faz a mesma coisa que o every só que a difereça é que o some retornar true ou false se pelo menos um dos elemntos passar no teste
const dadosSome = userList.some(user => user.money === 1100)

//Serve para ordenar os elementos de uma array
const dadosSort = userList.sort((a, b) => a.money - b.money)

//Serve para reduzir os elementos de um array ou em termos pmais simples somar todos elementos de um array e retornar o resultado

const numbers = [1,2,3,4,5]
const dadosReduce = numbers.reduce((total, currentElement) => total + currentElement)


console.log(userMap)
console.log(userFilter)
console.log(dadosfind)
console.log(dadosEvery)
console.log(dadosSome)
console.log(dadosSort)
console.log(dadosReduce)

