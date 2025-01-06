const h1 = document.getElementById("title-h1")


//Acessado o css do elemento e mundando sua cor
h1.style.color="red"
h1.style.backgroundColor="blue"



//Mudando o texto do paragrafo com js
//--------------------------------------------
const p = document.getElementsByTagName("p")[0]

p.innerText = "Testo mudado por js"
//p.inerContent = "Testo mudado por js"
//p.innerHTML = "Testo mudado por js"
//--------------------------------------------



//Estilizando button com js
//--------------------------------------------
const button = document.querySelector("button")

button.style.padding = "10px 20px"
button.style.color = "black"
button.style.borderRadius = "30px"
button.style.backgroundColor = "cyan"
//--------------------------------------------



//Criando uma div com texto no js

const div = document.createElement("div")

const texto = document.createTextNode("Div feita com js")

div.appendChild(texto)

document.body.appendChild(div)

//----------------------------------------------