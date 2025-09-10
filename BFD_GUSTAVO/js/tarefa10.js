function numero() {
    const par = [

        {num: 1, tipo: "Impar"},
        {num: 2, tipo: "Par"},
        {num: 3, tipo: "Impar"},
        {num: 4, tipo: "Par"},
        {num: 5, tipo: "Impar"},
        {num: 6, tipo: "Par"},
        {num: 7, tipo: "Impar"},
        {num: 8, tipo: "Par"},
        {num: 9, tipo: "Impar"},
        {num: 10, tipo: "Par"},
        {num: 11, tipo: "Impar"},
        {num: 12, tipo: "Par"},
        {num: 13, tipo: "Impar"},
        {num: 14, tipo: "Par"},
        {num: 15, tipo: "Impar"},
        {num: 16, tipo: "Par"},
        {num: 17, tipo: "Impar"},
        {num: 18, tipo: "Par"},
        {num: 19, tipo: "Impar"},
        {num: 20, tipo: "Par"}
    ]

    for (let i = 0; i < par.length; i++) {
        if(par[i].tipo === "Par"){
            console.log(par[i].num);
        } 
        
    }


}

numero()