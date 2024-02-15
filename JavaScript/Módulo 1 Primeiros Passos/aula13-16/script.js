//CONDICIONAL IF/ELSE

/*let idade = 14;

if (idade > 17){
    console.log('Você é MAIOR de idade.')
} else {
    console.log('Você é MENOR de idade.')
}
*/

//CONDICIONAL == E ===

/*
let idade = 20
if (idade === 20) {
    idade = idade + 15;
    console.log("Idade adicionada com sucesso")
    console.log(idade)
}
*/

//MULTI-CONDICIONAIS && E ||

//let idade = 90;

/*
if (idade => 18) {
    if (idade < 60) {
        console.log("Você é um adulto.")
    }
}
*/
/*
if (idade >= 18 &&  idade < 60) {
    console.log("Você é um adulto!")
}
*/

// CONDICIONAL DUPLA (IF/ELSE)

let idade = 90

if (idade < 18) {
    console.log("Você é uma criança.")
} else if (idade >= 18 &&  idade < 60) {
    console.log("Você é um adulto!")
} else if (idade > 60) {
    console.log("Você é um(a) idoso(a)")
}