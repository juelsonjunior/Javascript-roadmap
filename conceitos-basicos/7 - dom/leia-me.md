# DOM (Document Object Model)

O document object model é uma interface de programação para documentos HTML e XML ele define a estrutura logica dos documentos em uma pagins é como eles podem ser acessados e manipulados na web o DOM cria uma arvore do seu documento dividindo tudo em nós onde cada nó pode representar um elemento atributo ou texto.
<br>

E sobre do DOM existe muito mais muito conhecimento então vou listar apenas alguns conceitos para teres por onde começar e se por acaso quiserer aprofundar os seus conhecimentos já teras uma linha de racicionio a seguir.
<br>

E o que podemos acessar no DOM html atraves do javascript: podemos criar elementos, selecionar elementos, adicionar atributos no html, mudar o valores dos elementos html podemos manipular o css do html atraves do js praticamento são possibilidades quases infinitas que veremos as mais essencias nesse repo.

Basicamente tudo que é possivel fazer com html e css o javascript pode replicar mais o js não foi criado para subestituir html e css para para adicionar uma camada extra de interação unindo os dois de forma a trazer arminia no site.

### Estrutura básica do DOM

[ 1 ] - Documento (O nó raiz que representa o documento ineiro)<br>
[ 2 ] - Elemento (Representa os elementos como tags html ou xml)<br>
[ 3 ] - Atributo (Representa as informações adicionais dos elemntos)<br>
[ 4 ] - Texto (Nós que contem o texto dos elementos)

Exemplo de um estrutura DOM simples<br>

HTML no editor de codigo
```
<!DOCTYPE html> 
<html> 
    <head> 
        <title>Exemplo de DOM</title> 
    </head> 
<body> 
    <h1>Olá, mundo!</h1> 
    <p>Este é um parágrafo.</p> 
</body> 
</html>
```
HTML no navegador
```
- Document 
 - html 
  - head 
   - title 
    - "Exemplo de DOM" 
     - body 
      - h1 
       - "Olá, mundo!" 
        - p 
         - "Este é um parágrafo."
```

Com isso podemos ver que o DOM divide cada elemento um unico só e isso nos permite fazer qualquer tipo de manipula''cões usando JS deste modificar elementos(texto, cor, posição, tamanho etc) criar elementos(p, div, h1, img etc) e muitas outras coisas.

### Como acessar elementos html usando JS

Para se acessar elementos html apartir do js podemos acessar elementos atraves de tags, names, classes, ids e for ai a fora.

- document.getElementById()

- document.getElementsByTagName()

- document.getElementsByClassName()

- document.querySelector()

- document.querySelectorAll()

<strong>document.getElementById()</strong>:Seleciona ids da mesmo forma que o css seleciona usando o # antes do nome do id.

Exemplo:
```
<p id="texto">Texto do paragrafo<p/>//HTML

const paragrafo = document.getElementById("#texto")//JS
```

<strong>document.getElementsByTagName()</strong>:Seleciona um conjunto tags da mesmo forma que o css seleciona usando simplesmente o nome da tag é necessario especificar em qual posição o item esta usando [especificando o indice].

Exemplo:
```
<span>Texto do span<span/>//HTML

const paragrafo = document.getElementsByTagName("span")[0]//JS
```

<strong>document.getElementsByClassName()</strong>:Seleciona um conjunto de classes da mesmo forma que o css seleciona usando o . antes do nome da classe por selecionar um conjunto de classes é necessario especificar em qual posição o item esta usando [especificando o indice].

Exemplo:
```
<div class="container">
    <p>texto<p/>
<div/>//HTML

const paragrafo = document.getElementsByClassName(".container")[0]//JS
```

<strong>document.querySelector()</strong>:É um resumido de tudo que vimos acima porque querySeletor seleciona class ids, tags e muito mais da mesma forma que os outros usando as suas especificações . para class, # para id e assim por diante.

Exemplo:
```
<div class="container">
    <p id="texto">Abra o seu editor de codigo<p/>
    <h1>Aprendendo JS<1/>
<div/>//HTML

const container = document.querySelector(".container")//JS
const texto = document.querySelector("#texto")//JS
const h1 = document.querySelector("h1")//JS
```

<strong>document.querySelectorAll()</strong>:Seleciona um conjunto de ids classes ou tags do mesmo nome da mesma forma que os outros usando as suas especificações . para class, # para id e assim por diante.

Exemplo:
```
<div class="container">
    <h1 class="titulos">Aprendendo HTML<1/>
    <h1 class="titulos">Aprendendo CSS<1/>
    <h1 class="titulos">Aprendendo JS<1/>
<div/>//HTML

const titulos = document.querySelectorAll(".titulos")//JS
```

### Como acessar propriedades dos elementos html

Para pegarmos o valor de um elemento html pegamos da mesma forma que acessamos as propriedades de um objecto atráves da notação . porque cada elementos html retornar um objecto com as suas propriedades  

Exemplo:
```
<p class="paragrafro" id="parag">Texto do paragrafo</p>
```

Da mesma forma que que estão escritos as propriedades no html no js é só criar a variavel que armazena a seleção do elemento desejado e usar o . com exceção de algumas propriedades.

Exemplo:

```
variavel.className//Exceção
variavel.id
```

Se quiser pegar o texto do elemento use o textContent ou o innerHTML ou o innerText

Exemplo:
```
variavel.textContent = ""
variavel.innerHTML = ""
varaivel.innerText = ""
```

Se quiser ver todas propriedaes de um determinado elemento é só colocar a variavel que armazena a sua seleção em um console.log(variavel do elemnto html)

Exemplo:
```
const p = document.getElementById("parag")
console.log(p)
```

Vai retornar um objecto com todas suas propriedades e isso pode ser feito com a maior parte dos elementos html seguindo esse pensamento poderá efetuar qualquer tipo de alteração que quiser em um elemnto html até mexer com o seu css.

Exemplo acessando o css:

```
p.style.color = "red"
p.style.backgroundColor = "red"
```

E assim por dianta no css só não usa o - se tiver um atributo que preciso de - use o camel case exemplo background-color:errado o certo seria backgroundColor

O style. Retornar outro objecto com as propriedades css normais se não soubr como escrever só usar o style. e o autocomplete vai ajudar.


### Criando elementos html com texto usando js


Para se criar qualquer elemento usamos a seguinte sintaxe

```
const div = document.createElement("nome do elemento")
```

Adicionando texto ao elemento
```
div.textContent = "informação do texto"
```

Usando o createTextNode para criar o texto do elemento
```
const textDiv = document.createNode("texto da div")
```

Depois é só adicionar o texto como filho da div 

```
div.appendChild(textDiv)
```

E depois a div como filho do body para mostrar na pagina

```
document.body.appendChild(div)
```

Depois disso é só explorar as possibilidades do DOM e se quiser mais alguma coisa relacionado ao DOM é só buscar se quiser pode me contactar também.

## Não se limite a ver o conteúdo abra o seu editor de codigo e pratica para fixar a informação