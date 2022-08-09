// EXERCÍCIO 1:

// UTILIZANDO IFS ANINHADOS:

const num = Number(prompt("Digite um número:"))

// if (num % 2 === 0){
//     console.log("O número é divisível por 2")
// if (num % 3 === 0)
//     console.log("O número é divisível por 3")
// }else {
//     console.log("O número não é divisível por 2 nem por 3")
// }

// UTILIZANDO OPERADORES LÓGICOS:

if(num % 2 === 0 || num % 3 === 0){
    console.log("O número é divisível por 2 ou por 3")
}else{
    console.log("O numero não é divisível por 2 ou por 3")
}
