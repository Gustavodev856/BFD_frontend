function somaAte(numero) {
    let soma = 0

    for (let i = 1; i <= numero; i++){
        soma = soma + i
    }

    return soma
}

console.log(somaAte(10))
console.log(somaAte(5))

