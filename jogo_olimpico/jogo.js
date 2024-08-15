let vida = 50;
let energia = 100;
let inventario = ["amizade", "amor", "amor", "amor", "amor", "amor"];
let dia = 1;
let habilidade = 120;
let descansouHoje = false;
let game_state= 0

function ver_status() {
    alert(`
    Vida: ${vida}
    Energia: ${energia}
    Descançou hoje: ${descansouHoje}
    Inventário: ${inventario.join(", ")}
    Dia: ${dia}
    Habilidade: ${habilidade}
    fase: ${game_state}
    `);
}

let continuar = true;

while (continuar) {
    let inicio = prompt("Você está em casa, o que deseja fazer?\n[1]-Ir para o quarto\n[2]-Falar com pai/mãe\n[3]-Ir ao clube da luta\n[4]-Ver inventário\n[5]-reiniciar jogo");

    switch (inicio) {
        case "1":
            let quarto = prompt("Você está em seu quarto, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário");

            switch (quarto) {
                case "1":
                    energia = 100;
                    dia += 1;
                    descansouHoje = false
                    alert("Você dormiu e restaurou sua energia.");
                    break;
                case "2":
                    if (descansouHoje==false){
                        if (energia < 100) {
                            energia += 30;
                            if (energia > 100) energia = 100;
                            alert("Você descansou e recuperou energia.");
                        } else {
                            alert("Você já está com a energia cheia e não precisa descansar.");
                        }
                        descansouHoje = true // marca se o jogador ja desçou hoje
                    } else{
                        alert("Você já descansou hoje.espere até o dia seguinte");
                    }
                    
                    break;
                case "3":
                    alert("Voltando para a sala.");
                    break;
                case "4":
                    ver_status();
                    break;
                default:
                    alert("Opção inválida.");
                    break;
            }
                break;
        case "2":
            alert("Você conversou com seus pais. Eles te deram conselhos sábios.");
            inventario.push("amor");
        break;
        case "3":
            let luta = prompt("Você chegou ao clube da luta. Deseja lutar?\n[1]-Sim\n[2]-Não\n[3]-enfrentar oponente");

            if(energia <= 0){
                alert("Você não tem energia para lutar. vá descançar");
            }

            if (luta === "1") {
                if(energia <=39){
                    alert("energia muito baixa para treinar, vá descançar ou dormir para treinar")
                }
                else{
                    habilidade += 10;
                    energia -= 40;
                    alert("Você lutou e ganhou experiência, mas perdeu energia.");
                }

            }else if(luta === "2") {
                if (habilidade >= 120){
                    alert("Você lutou contra seu opnente, e venceu graças ao seu esforço de seu treinameto, infelizmente, um terremoto atigiu a região que você se encontra, e terá que se mudar para a italia, agora, você terá que enfrentar inimigos mais fortes do que o habitual, mas terá um buff em sua prograssão de treinamento");

                    game_state=1
                }
                else{
                    alert("Você lutou e perdeu a oportunidade de evoluir seu ranque.");
                }
            }
            else{
                alert("Você não quis lutar, então você vai para a sala");
            }
        break;
        case "4":
            ver_status();
        break;
        case "5":
            continuar = false;
            alert("Saindo do jogo.");
            alert("suas estatisticas finais:\n")
            alert(ver_status())
            
        break;
        default:
            alert("Opção inválida, por favor, tente novamente.");
        break;
    }
    
    if (game_state == 1){

    }


    // Verifica se o jogador perdeu o jogo
    if (vida <= 0) {
        alert("Você perdeu toda sua vida. Fim de jogo.");
        continuar = false;
    }
}
