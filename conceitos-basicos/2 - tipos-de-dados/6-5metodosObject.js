const person = {
    name: 'juelson',
    age: 18
}

//Verifica se uma propriedade existe no objecto
const veriFyProperty = Object.hasOwnProperty('name')
console.log(veriFyProperty)

//Retorna um array com todas propriedades do objecto
const keysOfObject = Object.keys(person)
console.log(keysOfObject)

//Retorna um array com todas valores das propriedades do objecto
const valueObject = Object.values(person)
console.log(valueObject)

//Retorna um array com propriedade e valor do objecto forma organizada
const keyAndValueObject = Object.entries(person)
console.log(keyAndValueObject)