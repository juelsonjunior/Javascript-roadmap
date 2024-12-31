# DOM (Document Object Model)

O document object model é uma interface de programação para documentos HTML e XML ele define a estrutura logica dos documentos em uma pagins é como eles podem ser acessados e manipulados na web o DOM cria uma arvore do seu documento dividindo tudo em nós onde cada nó pode representar um elemento atributo ou texto.

Estrutura básica do DOM

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

Com isso podemos ver que o DOM dividi cada elemento um unico só e isso nos permite fazer qualquer tipo de manipula''cões usando JS deste modificar elementos(texto, cor, posição, tamanho etc) criar elementos(p, div, h1, img etc) e muitas outras coisas.

Como acessar elementos html usando JS

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

## Não se limite a ver o conteúdo abra o seu editor de codigo e pratica para fixar a informação