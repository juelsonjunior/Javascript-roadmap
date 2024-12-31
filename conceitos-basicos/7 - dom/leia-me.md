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