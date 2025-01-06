var numbers = [1, 2, 3, 4, 5]

console.log(numbers)

//Push -Adicionar elementos no final do array
numbers.push(6)
numbers.push("Teste")
numbers.push({nome:'junior'})
console.log(numbers)

//pop -Remover o ultimo elemnto do elemento
numbers.pop()
console.log(numbers)

//unshit -Adicionar elementos no inicio do array
numbers.unshift("oi")
console.log(numbers)

//Remover elementos no inicio do array
numbers.shift("oi");
console.log(numbers)

//Acessar o ultimo elemento do array
console.log(numbers.length -1)

//isArray -Vericar se é array
console.log(Array.isArray(numbers))
console.log(Array.isArray(90))

//Outros metodos de array
//Splice -Adicionar e remover elementos de qualquer parte do array
var arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 999);
console.log(arr)

arr.splice(4, 1)
console.log(arr)

//indexOf
console.log(arr.indexOf(5))

//join - Transformar array em string
var arr2 = ["o", "Juelson", "é", "Programador"];

console.log(arr2.join(" "))

//Reverse - Deixa o array em ordem decrescente
console.log(arr2.reverse())

