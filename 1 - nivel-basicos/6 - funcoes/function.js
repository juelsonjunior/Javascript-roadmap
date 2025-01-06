// //Exibindo nome com base em um parametro

function olaMundo(){
    console.log("Ola mundo");
}
olaMundo()

function exibirNome(nome){
    console.log("Seu nome é ",nome);   
}
exibirNome("juelson")// Seu nome é juelson
exibirNome("Bessa")// Seu nome é Bessa

function contarVariasVezes(valorInicial, valorFinal){
    for (let valorInicial = 0; valorInicial < valorFinal; valorInicial++) {
        console.log(valorInicial);
    }
    console.log("=======Final da contagem ",valorFinal," =======");
}
contarVariasVezes(1, 10)
contarVariasVezes(1, 30)
contarVariasVezes(1, 100)