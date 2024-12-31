const dadosPessoa = {
    id: 1,
    nome: "juelson",
    idade: 21
}

console.log(dadosPessoa)// { id: 1, nome: 'juelson', idade: 21 } 

const tipoUsuario = {
    admin: "Administrador",
    normal: "Normal"
}

console.log(tipoUsuario)// { admin: 'Administrador', normal: 'Normal' }

// ==== Também é possivel criar um array de objectos

const arrayObjectosUser = [
    {nome: "usuario1", email:"usuario1@gmail.com"},
    {nome: "usuario2", email:"usuario2@gmail.com"},
    {nome: "usuario3", email:"usuario3@gmail.com"},
]
console.log(arrayObjectosUser)

console.log("Nome Usuario: ",arrayObjectosUser[0].nome)//usuario1
