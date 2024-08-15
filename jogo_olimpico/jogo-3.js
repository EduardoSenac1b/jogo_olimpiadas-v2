let vida = 50;
let energia = 100;
let inventario = ["amizade", "amor", "amor", "amor", "amor", "amor"];
let dia = 1;
let habilidade = 120;
let descansouHoje = false;
let game_state = 0; // Controle de fases do jogo

function verStatus() {
    alert(`
    Vida: ${vida}
    Energia: ${energia}
    Descançou hoje: ${descansouHoje}
    Inventário: ${inventario.join(", ")}
    Dia: ${dia}
    Habilidade: ${habilidade}
    Fase: ${game_state}
    `);
}

function quartoOpcao() {
    let quarto = prompt("Você está em seu quarto, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário");

    switch (quarto) {
        case "1":
            dormir();
            break;
        case "2":
            descansar();
            break;
        case "3":
            alert("Voltando para a sala."); 
            break;
        case "4":
            verStatus();
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function dormir() {
    energia = 100;
    dia += 1;
    descansouHoje = false;
    alert("Você dormiu e restaurou sua energia."); 
}

function descansar() {
    if (!descansouHoje) {
        if (energia < 100) {
            energia = Math.min(energia + 30, 100);
            alert("Você descansou e recuperou energia."); 
        } else {
            alert("Você já está com a energia cheia e não precisa descansar."); 
        }
        descansouHoje = true;
    } else {
        alert("Você já descansou hoje. Espere até o dia seguinte."); 
    }
}

function lutarNoClube() {
    let luta = prompt("Você chegou ao clube da luta. Deseja lutar?\n[1]-Sim\n[2]-Não\n[3]-Enfrentar oponente");

    if (energia <= 0) {
        alert("Você não tem energia para lutar. Vá descansar."); 
        return;
    }

    switch (luta) {
        case "1":
            if (energia <= 39) {
                alert("Energia muito baixa para treinar, vá descansar ou dormir para treinar.");
            } else {
                habilidade += 10;
                energia -= 40;
                alert("Você lutou e ganhou experiência, mas perdeu energia."); 
            }
            break;
        case "2":
            enfrentarOponente();
            break;
        case "3":
            alert("Você não quis lutar, então você vai para a sala."); 
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function enfrentarOponente() {
    if (habilidade >= 120) {
        alert("Você lutou contra seu oponente, venceu graças ao seu treinamento, mas um terremoto atingiu a região. Agora, você terá que se mudar para a Itália, enfrentando inimigos mais fortes, mas com um buff em sua progressão."); 
        game_state = 1; // Mudar para a próxima fase
    } else {
        alert("Você lutou e perdeu a oportunidade de evoluir seu ranque."); 
    }
}

function reiniciarJogo() {
    alert("Saindo do jogo."); 
    verStatus();
}

function faseItalia() {
    let opcao = prompt("Bem-vindo à Itália! O que deseja fazer?\n[1]-Treinar\n[2]-Explorar\n[3]-Ver inventário");

    switch (opcao) {
        case "1":
            alert("Você treinou e melhorou suas habilidades."); 
            habilidade += 40;
            break;
        case "2":
            alert("Você explorou a Itália e encontrou novos desafios."); 
            break;
        case "3":
            verStatus();
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

let continuar = true;

while (continuar) {
    let inicio = prompt("Você está em casa, o que deseja fazer?\n[1]-Ir para o quarto\n[2]-Falar com pai/mãe\n[3]-Ir ao clube da luta\n[4]-Ver inventário\n[5]-Reiniciar jogo");

    switch (inicio) {
        case "1":
            quartoOpcao();
            break;
        case "2":
            alert("Você conversou com seus pais. Eles te deram conselhos sábios."); 
            inventario.push("amor");
            break;
        case "3":
            lutarNoClube();
            break;
        case "4":
            verStatus();
            break;
        case "5":
            continuar = false;
            reiniciarJogo();
            break;
        default:
            alert("Opção inválida, por favor, tente novamente."); 
            break;
    }

    // Verifica se o jogador perdeu o jogo
    if (vida <= 0) {
        alert("Você perdeu toda sua vida. Fim de jogo."); 
        continuar = false;
    }

    // Controle de fases com game_state
    if (game_state == 1) {
        faseItalia();
    }
}
