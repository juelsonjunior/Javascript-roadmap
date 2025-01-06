# Operadores

Em javascript operadores são usados para fazer calculos comparações de valores e muito mais.

[ 1 ] - Aritmétrico <br>
[ 2 ] - Relacionais ou de comparação <br>
[ 3 ] - Lógicos <br>

<strong>Aritmétrico</strong>: São operadores usados para fazer operações matemáticas com numeros, e para isso temos os seguintes operadores:

- Adição( + )
- Subtração( - )
- Multiplicação( * ) 
- Divisão( / )

Exemplo:
```
const numero1 = 10
const numero2 = 10

Operações:
numero1 + numero2 // 20
numero1 - numero2 // 0
numero1 * numero2 // 100
numero1 / numero2 // 1
```

<strong>Relacionais ou de comparação</strong>: São usados para fazer comparação entre valores numericos e a comparação retorna um valor booleano como verificar se um numero é:

- Maior ( > ) 
- Menor ( < ) 
- Maior ou igual ( >= )
- Menor ou igual ( <= ) 
- Diferente ( != )
- Igual ( == )

Exemplo:
```
const numero1 = 10
const numero2 = 10

Operações:
numero1 > numero2 // false
numero1 < numero2 // false
numero1 >= numero2 // true
numero1 <= numero2 // true
numero1 != numero2 // false
numero1 == numero2 // true
```

<strong>Lógicos</strong>: São usados para verificar se algumas expressões são verdadeiras ou falsas e comparações entre operadores lógicos são baseados em valores booleanos e existem 3 operadores lógicos que são:

- AND E ( && )
- OR Ou ( || )
- NOT Não ( ! )

Exemplo: 

Para operadores logicos nos usaremos tabelas para exemplificar ou também poderiamos usar o if só que ainda não vimos sobre esse conceito então vamos entender por meio de tabelas. comumente chamadas de tabela verdade. faz a comparação de valores booleanos

Tabela verdade do operador (AND - E - &&)

|    P    |    P    |   P  E  P   |
|---------|---------|-------------|
|   true  |   true  |    true     |
|   true  |   false |   false     |
|  false  |   true  |   false     |
|  false  |  false  |   false     |

Podemos verificar que na tabela verdade do operador logico (And) ou (E) só retornar verdade se as duas expressões logicas forem verdadeiras e nada contrario. 

Exemplo: 
- Se você (E) o pedro estiverem feliz eu também fico feliz

Tabela verdade do operador (OR - Ou - ||)

|    P    |    P    |   P  E  P   |
|---------|---------|-------------|
|   true  |   true  |    true     |
|   true  |   false |    true     |
|  false  |   true  |    true     |
|  false  |  false  |   false     |

Podemos verificar que na tabela verdade do operador logico (OR) ou (Ou) só retornar verdade se pelo menos uma das expressões logicas forem verdadeiras. 

Exemplo: 
- Se você (Ou) o pedro estiverem felizes eu também fico feliz

Tabela verdade do operador (NOT - Não - !)

|    P    |   Não  P   |
|---------|------------|
|   true  |    false   |
|   false |    true    |

Podemos verificar que na tabela verdade do operador logico (NOT) ou (Não) paraticamente esse operador é usado para negar a verdade porque se a expresão for verdadeira retorna falso e se for falso retorna verdadeiro. 

Exemplo: 
- Se você (não) estiver feliz eu fico feliz
- Se você estiver feliz (não) fico feliz

## Não se limite a ver o conteúdo abra o seu editor de codigo e pratica para fixar a informação