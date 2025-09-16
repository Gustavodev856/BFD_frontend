const number = [1, 2, 3, 4, 5]

const maioresQueDois = number.filter(n=> n > 2)
console.log(maioresQueDois);
const pares = number.filter(n=> n % 2 === 0)
console.log(pares);


// const user = [
//     {
//         name: "Ana Souza", age: 28,
//         contact: "+55 11 91234-5678", city: "São Paulo" 
//     },
//     {
//         name: "Ana Castelar", age: 20,
//         contact: "+55 11 92011-0905", city: "São Paulo" 
//     },
//     {
//         name: "Julio Albino", age: 30,
//         contact: "+55 11 98457-3265", city: "Rio de Janeiro" 
//     },
//     {
//         name: "Claudio Franca", age: 32,
//         contact: "+55 11 97545-9562", city: "Recife" 
//     },
//     {
//         name: "Ana Souza", age: 28,
//         contact: "+55 11 91234-5678", city: "Rio de Janeiro" 
//     },
//     {
//         name: "Ana Souza", age: 28,
//         contact: "+55 11 91234-5678", city: "Salvador" 
//     },
//     {
//         name: "Ana Souza", age: 28,
//         contact: "+55 11 91234-5678", city: "Salvador" 
//     },
//     {
//         name: "Ana Souza", age: 28,
//         contact: "+55 11 91234-5678", city: "Recife" 
//     }
// ]

// const totalIdade = user.reduce((acumulador, usuario) => acumulador + usuario.age, 0);
// const mediaIdade = totalIdade / user.length;
// console.log(mediaIdade);

// const somaIdade = user.reduce((acc, user, index, array) => {
//     acc += user.age
//     if(index === array.length-1) {
//         return acc/array.length
//     }
// }, 0)





// const soma = contador.reduce((total, n) => total + n, 0)

// const contagem = user.reduce((total, n) => {
//     total[n.city] = (total[n.city] || 0) + 1
//     return total;
// }, {})

// console.log(contagem)














// const valor = [2, 4, 6];

// const raizCubo = ((numero) => {
//     return numero ** 3;
// });

// const resultado = valor.map(raizCubo);

// console.log(resultado); 


// const raiz = ((valor) => {
//     return valor ** 3
// })

//console.log(raiz(4));
// const numero = [1,2,3,4]

// const dobrados = numero.map(n=> n *2)
// console.log(dobrados);

// const pares = numero.filter(n => n % 2 === 0)
// console.log(pares);

// const soma = numero.reduce((acumulador, n) => acumulador + n, 0)
// console.log(soma);

// const frutas = ["banana", "açai", "maçã"]

// frutas.forEach((fruta, index)  => {
//     console.log(fruta);
//     console.log(index);
    
// })


// const frutasObj = {
//     nome: ["laranja", "maçã", "Uva"],
//     tipo: "citricas",
//     valor: 10
// }

// let i = 0;

// while (i < frutasObj.nome.length) {
//     console.log(`Frutas ${i}: ${frutasObj.nome[i]}`);
//     i++;  
// }

// const twofrutas = {...frutasObj}
// console.log(frutasObj); 

//  for (let i = 0; i < 10; i++) {
//      console.log(frutasObj.nome);
//      console.log(frutasObj.tipo);
//      console.log(frutasObj.valor);   
// }

// for (let fruta of frutasObj.nome) {
//     console.log(fruta);
// }

// for (let i = 0; i < frutasObj.nome.length; i++) {
//     console.log(`Frutas ${i}: ${frutasObj.nome[i]}`);
// }

// for (let i in frutasObj.nome){
//     console.log(`Frutas: ${i}: ${frutasObj.nome[i]}`);
// }
  
// for (let item in frutasObj) {
//     console.log(`${item}: ${frutasObj[item]}`);
// }



// const frutas = ["maçã", "banana","uva"]
// for (let i = 0; i < frutas.length; i++) {
//       console.log(frutas[i]);
// }

// for (let fruta of frutas) {
//      console.log(frutas);
    
// }

// for (let fruta in frutas) {
//     console.log(frutas);
    
// }

// const pessoa = {
//     name: "Gustavo",
//     idade: 22,
//     cidade: "Recife"
// }

// const profissao = {
//     nomeProfissiao: "Desenvolvedor FrontEnd",
//     nivel: "Pleno"
// }

// const todos = {...pessoa, ...profissao}
// console.log(todos);
// console.log(pessoa.name, profissao.nomeProfissiao);
 


// const items = [..."Gustavo"]
// console.log(items);

// const name = ["Gustavo", "Vasconcelos"]

// const onename = [...name]
// console.log(onename);


// const num1 = [1, 2]
// const num2 = [4, 6]
// // spread operator
// const todosNum = [...num1, ...num2]
// console.log(todosNum);

// const user = {
//     id: 100,
//     name: "Joao",
//     city: "Recife"
// }

// const newuser = {
//     ...user,
//     name: "Gustavo"
// }

// console.log(newuser.name);


// const palavra = "SANTA CRUZZZZ É SERIE C POH***"

// function timeFtu() {
//     for(let i = 0; i < palavra.length ; i++) {
//         console.log(palavra[i]);
//     }
// }

// timeFtu()

// const [head, ...tail] = o valor declarado na const ou let 


/* let user = "admin"
        let pass = "123456"

       function verificar (user, pass) {
         if(user === "admin" && pass === "123456") {
            console.log("Sua conta esta certa!!!");
        } else {
            console.log("CONTA ERRADA BURRO");
        } 
       }

verificar("admin", "454654878")*/

/*let cor = "verde"
let pedestreAtravessando = false

function verificar (cor, pedestreAtravessando) {
    if(cor === "verde" && !pedestreAtravessando) {
        console.log("PASSA CORNO");
    } else {
        console.log("PASSA NAO CORNO");
    }
}

verificar(cor, pedestreAtravessando)*/

/*let idade = 18

function verificar(idade) {
    if(idade >= 18) {
    console.log("Voce é maior de idade");
} else {
    console.log("voce é menor de idade");
    
}
}

verificar(idade)*/

/*let par = 2


    if (par === 2) {
    console.log("Voce é par");
} else {
    console.log("Voce é impar");
}*/

// let numeroMaior = 10
// let numeroMenor = 5
// let numeroAleatorio = 1

// if (numeroMaior > 10 && numeroMenor === 5 && numeroAleatorio === 1) {
//     console.log('o numero maior é', {numeroMaior} 'e o numero menor é', ${numeroMenor} 'e o numero aleatorio e', ${numeroAleatorio}) {

//     }
    
// }