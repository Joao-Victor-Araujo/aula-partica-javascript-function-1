/*
1)Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
a)Calcular a média do aluno.
b)Se a média for maior ou igual a 7, retornar "Aprovado!";
c)Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
d)Se a média for menor que 5, retornar "Reprovado!".
e)Chamar a função e exibir no console o resultado.
*/

((nota1, nota2) => {
    let notaTotal = nota1 + nota2
    let media = notaTotal/2

    if(media >= 7){
        console.log("Aprovado")
    } else if(media >= 5 && media < 7){
        console.log("Recuperação")
    } else if(media < 5){
        console.log("Reprovado")
    }
})(7,6);




/*
2)Criar uma função anônima que calcula a tabuada de 3.
a)Chamar a função e exibir no console o resultado.
*/

((n) => {
    for(let i = 1; i < 10; i++){
        console.log(n * i)
    }
})(3);



/*
3)Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
a)Chamar a função e exibir no console o resultado.
*/

let idade = (ano) => {
    let anoAtual = 2021
    let idade = 2021 - ano
    if(idade >= 18){
        console.log("Você é maior de idade!")
    } else {
        console.log("Você é menor de idade")
    }
}
idade(1999)