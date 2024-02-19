/* Calcule o preço do imóvel
- m2 = 3000
- se tiver 1 quarto, o m2 é 1x
- se tiver 2 quartos, o m2 é 1.2x
- se tiver 3 quartos, o m2 é 1.5x
Uso da função
*/

// RESULTADO UTILIZANDO O "SWITCH"
/*
function calcularImovel(met, quarto) {
    let m2 = 3000;
    preco = 0;

    switch (quarto) {
        case 1:
        default:
            preco = met * m2;

            break;

        case 2:
            preco = met * (m2 * 1.2);

            break;

        case 3:
            m2 = met * (m2 * 1.5);

            break;
    }
    return preco
}
*/

// RESULTADO UTILIZANDO O "IF"

function calcularImovel(met, quarto) {
    m2 = met * 3000;

    if (quarto == 1) {
        return m2;
    } else if (quarto == 2) {
        return m2 * 1.2;
    } else if (quarto == 3) {
        return m2 * 1.5;
    }

}


let metragem = 10;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}`)