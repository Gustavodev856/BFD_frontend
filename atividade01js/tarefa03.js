// const par = [2, 4, 6, 8, 10]
// const impar = [1, 3, 5, 7, 9]

// if(par.length) {
//     console.log("O array par tem elementos", par);
// } else if (impar.length) {
//     console.log("O array impar tem elementos", impar)
// }

// console.log(par);
// console.log(impar);

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O numero é par!!!";
    } else {
        return "O numero é impar!!!";
    }
}

console.log(parOuImpar(10));
console.log(parOuImpar(5));
console.log(parOuImpar(14));
console.log(parOuImpar(11));

