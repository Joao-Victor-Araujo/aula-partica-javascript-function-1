/*
1)Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
a)Chamar a função e exibir o resultado no console.
*/

let multiplicaçao =(n1, n2) => {
    console.log(n1 * n2)
}
multiplicaçao(10,5);

/*
2)Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
a)Chamar a função e exibir o resultado no console.
*/
let numMaior = (n1,n2,n3) => {
    if(n1 > n2 && n3){
        console.log(n1)
    }
    if(n2 > n1 && n3){
        console.log(n2)
    }
    if(n3 > n2 && n1){
        console.log(n3)
    }
}

numMaior(9, 2, 4);

/*
3)Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
a)Chamar a função e exibir no console o resultado.
*/

let parImpar = (n) => {
    if(n % 2 == 0){
        console.log("Esse numero é par!")
    } else {
        console.log("Esse numero é impar!")
    }
} 
parImpar(8);