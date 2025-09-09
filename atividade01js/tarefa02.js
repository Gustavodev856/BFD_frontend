function verificarNumero(numero) {
    if (numero < 0) {
        return "o numero é negativo!!!"
    } else if (numero > 0) {
        return "o numero é positivo!!!"
    } else {
        return "o numero é zero!!!"
        
    }
}

console.log(verificarNumero(10))
console.log(verificarNumero(-10))
console.log(verificarNumero(0))
