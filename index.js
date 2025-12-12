const readline = require("readline");

// Interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nome) {

    rl.question("Digite o XP atual do herói: ", function(xpAtualInput) {
        let xpAtual = Number(xpAtualInput);

        rl.question("Digite quanto XP o herói ganhou: ", function(xpGanhoInput) {
            let xpGanho = Number(xpGanhoInput);

            // ----- SOMA DE XP -----
            let xpTotal = xpAtual + xpGanho;

            let nivel = "";

            // ----- ESTRUTURA DE DECISÃO -----
            if (xpTotal < 1000) {
                nivel = "Ferro";
            } else if (xpTotal <= 2000) {
                nivel = "Bronze";
            } else if (xpTotal <= 5000) {
                nivel = "Prata";
            } else if (xpTotal <= 7000) {
                nivel = "Ouro";
            } else if (xpTotal <= 8000) {
                nivel = "Platina";
            } else if (xpTotal <= 9000) {
                nivel = "Ascendente";
            } else if (xpTotal <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            // Laço de repetição
            console.log("\nSomando XP...");
            for (let i = 1; i <= 3; i++) {
                console.log("Carregando " + (i * 33) + "%...");
            }

            // Saída final
            console.log(`\nXP anterior: ${xpAtual}`);
            console.log(`XP ganho: ${xpGanho}`);
            console.log(`XP total: ${xpTotal}`);
            console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

            rl.close();
        });
    });
});
