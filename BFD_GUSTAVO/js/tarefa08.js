function diaDaSemana() {
    
    const dias = [
        { nome: "Domingo", tipo: "descanso" },
        { nome: "Segunda-feira", tipo: "aula" },
        { nome: "Terça-feira", tipo: "aula" },
        { nome: "Quarta-feira", tipo: "aula" },
        { nome: "Quinta-feira", tipo: "aula" },
        { nome: "Sexta-feira", tipo: "aula" },
        { nome: "Sábado", tipo: "descanso" }
    ];

    
    for (let i = 0; i < dias.length; i++) {
        console.log(`Dia: ${dias[i].nome}`);

        if (dias[i].tipo === "aula") {
            console.log("Oba, mais um dia de aula!");
        } else {
            console.log("Finalmente, descanso merecido!");
        }

        console.log("-------------------------"); 
    }
}
diaDaSemana();
