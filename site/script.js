// Dados do jogo
let jog1, jog2;
let pontos1 = 0, pontos2 = 0;
let perguntaAtual = 0;
let perguntasSelecionadas = [];
let tempoPorPergunta = 20;
let quantidadePerguntas = 10;
let turnoJogador1 = true;
let cronometro;
let tempoRestante;

// BANCO DE PERGUNTAS COMPLETO
const bancoPerguntas = {
    games: [
        { texto: "Qual é o personagem principal do Mario Bros?", respostas: ["Mario", "Luigi", "Peach", "Bowser"], correta: 0 },
        { texto: "Em qual jogo você coleta anéis dourados?", respostas: ["Pokémon", "Sonic", "Zelda", "Minecraft"], correta: 1 },
        { texto: "Qual empresa criou o PlayStation?", respostas: ["Microsoft", "Nintendo", "Sony", "Sega"], correta: 2 },
        { texto: "Qual é o jogo mais vendido da história?", respostas: ["GTA V", "Minecraft", "Tetris", "Mario Kart 8"], correta: 1 },
        { texto: "Em qual jogo aparece o personagem Link?", respostas: ["Final Fantasy", "Dragon Quest", "The Legend of Zelda", "Metroid"], correta: 2 },
        { texto: "Qual console pertence à Nintendo?", respostas: ["Xbox", "PlayStation", "Switch", "PC"], correta: 2 },
        { texto: "Quem é o mascote da Sega?", respostas: ["Mario", "Sonic", "Crash", "Spyro"], correta: 1 },
        { texto: "Qual jogo tem blocos e mundo aberto?", respostas: ["Fortnite", "Roblox", "Minecraft", "Terraria"], correta: 2 },
        { texto: "Qual jogo é famoso por batalhas reais online?", respostas: ["Minecraft", "Fortnite", "The Sims", "GTA"], correta: 1 },
        { texto: "O que significa RPG?", respostas: ["Real Play Game", "Role-Playing Game", "Rapid Program Game", "Ready Player Go"], correta: 1 }
    ],
    futebol: [
        { texto: "Quem é o maior artilheiro da história das Copas?", respostas: ["Pelé", "Messi", "Cristiano Ronaldo", "Miroslav Klose"], correta: 3 },
        { texto: "Quantos minutos dura uma partida oficial?", respostas: ["60", "70", "90", "120"], correta: 2 },
        { texto: "Qual país sediou a primeira Copa do Mundo?", respostas: ["Brasil", "Uruguai", "Itália", "França"], correta: 1 },
        { texto: "Quantas Copas do Mundo tem o Brasil?", respostas: ["4", "5", "6", "7"], correta: 1 },
        { texto: "Quem é conhecido como 'Rei do Futebol'?", respostas: ["Pelé", "Maradona", "Messi", "Cristiano"], correta: 0 },
        { texto: "Qual jogador tem mais Bolas de Ouro?", respostas: ["Cristiano Ronaldo", "Messi", "Neymar", "Ronaldinho"], correta: 1 },
        { texto: "Qual país ganhou a Copa de 2022?", respostas: ["França", "Argentina", "Brasil", "Espanha"], correta: 1 },
        { texto: "Quantos jogadores tem uma equipe em campo?", respostas: ["9", "10", "11", "12"], correta: 2 },
        { texto: "Qual é o maior clássico brasileiro?", respostas: ["Flamengo x Vasco", "Corinthians x Palmeiras", "São Paulo x Santos", "Todos têm importância"], correta: 3 },
        { texto: "O que é um hat-trick?", respostas: ["3 gols no jogo", "3 cartões amarelos", "3 substituições", "3 faltas"], correta: 0 }
    ],
    gerais: [
        { texto: "Quantos dias tem um ano bissexto?", respostas: ["364", "365", "366", "367"], correta: 2 },
        { texto: "Qual é o maior planeta do Sistema Solar?", respostas: ["Terra", "Marte", "Júpiter", "Saturno"], correta: 2 },
        { texto: "A capital do Brasil é:", respostas: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correta: 2 },
        { texto: "Quantas horas tem um dia?", respostas: ["12", "24", "36", "48"], correta: 1 },
        { texto: "Qual é o símbolo químico da água?", respostas: ["O2", "H2O", "CO2", "HO"], correta: 1 },
        { texto: "Quem escreveu 'Os Lusíadas'?", respostas: ["Machado de Assis", "Camoes", "Fernando Pessoa", "Eça de Queirós"], correta: 1 },
        { texto: "Quantos meses têm 28 dias?", respostas: ["1", "2", "12", "Nenhum"], correta: 2 },
        { texto: "Qual é o continente maior do mundo?", respostas: ["América", "Europa", "Ásia", "África"], correta: 2 },
        { texto: "Quem inventou a lâmpada?", respostas: ["Tesla", "Edison", "Einstein", "Newton"], correta: 1 },
        { texto: "O que é o DNA?", respostas: ["Ácido Desoxirribonucleico", "Tipo de proteína", "Célula do sangue", "Hormônio"], correta: 0 }
    ],
    historia: [
        { texto: "Em que ano o Brasil foi descoberto?", respostas: ["1492", "1500", "1530", "1600"], correta: 1 },
        { texto: "Quem foi o primeiro imperador do Brasil?", respostas: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"], correta: 0 },
        { texto: "Quando aconteceu a Revolução Francesa?", respostas: ["1776", "1789", "1800", "1822"], correta: 1 },
        { texto: "Qual muro foi derrubado em 1989?", respostas: ["Muro de Paris", "Muro de Berlim", "Muro de Roma", "Muro de Londres"], correta: 1 },
        { texto: "Quem descobriu o fogo?", respostas: ["Os romanos", "Os gregos", "Povos primitivos", "Os egípcios"], correta: 2 },
        { texto: "Quantos anos durou a Segunda Guerra Mundial?", respostas: ["4", "6", "8", "10"], correta: 1 },
        { texto: "Qual civilização construiu as pirâmides?", respostas: ["Romanos", "Gregos", "Egípcios", "Maias"], correta: 2 },
        { texto: "Quem foi o primeiro homem a pisar na Lua?", respostas: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], correta: 2 },
        { texto: "O Império Romano tinha capital em:", respostas: ["Atenas", "Roma", "Constantinopla", "Alexandria"], correta: 1 },
        { texto: "Em que ano o Brasil proclamou a República?", respostas: ["1822", "1889", "1900", "1950"], correta: 1 }
    ],
    ciencia: [
        { texto: "Qual é a estrela mais próxima da Terra?", respostas: ["Lua", "Sol", "Vênus", "Marte"], correta: 1 },
        { texto: "De que é feito o oxigênio que respiramos?", respostas: ["Plantas", "Rochas", "Água", "Fogo"], correta: 0 },
        { texto: "Qual é a unidade de medida de força?", respostas: ["Joule", "Newton", "Watt", "Pascal"], correta: 1 },
        { texto: "O que a gravidade faz?", respostas: ["Empurra para cima", "Atrai corpos", "Gira a Terra", "Dá luz"], correta: 1 },
        { texto: "Quantos ossos tem o corpo humano adulto?", respostas: ["206", "250", "186", "305"], correta: 0 },
        { texto: "Qual planeta é conhecido como Planeta Vermelho?", respostas: ["Vênus", "Marte", "Júpiter", "Saturno"], correta: 1 },
        { texto: "O que é a velocidade da luz?", respostas: ["300 mil km/s", "150 mil km/s", "500 mil km/s", "1 milhão km/s"], correta: 0 },
        { texto: "Qual gás é essencial para a respiração humana?", respostas: ["Hidrogênio", "Nitrogênio", "Oxigênio", "Dióxido de carbono"], correta: 2 },
        { texto: "Quem formulou a teoria da relatividade?", respostas: ["Newton", "Einstein", "Tesla", "Darwin"], correta: 1 },
        { texto: "A água ferve a quantos graus Celsius?", respostas: ["80°C", "90°C", "100°C", "120°C"], correta: 2 }
    ],
    tecnologia: [
        { texto: "O que significa a sigla 'WWW'?", respostas: ["World Wide Web", "Windows Web World", "Wide World Web", "Web World Wide"], correta: 0 },
        { texto: "Qual empresa criou o iPhone?", respostas: ["Samsung", "Google", "Apple", "Microsoft"], correta: 2 },
        { texto: "O que é um endereço IP?", respostas: ["Nome do site", "Identificador de dispositivo na rede", "Tipo de internet", "Programa de TV"], correta: 1 },
        { texto: "Qual linguagem é usada para estruturar páginas na web?", respostas: ["Python", "HTML", "Java", "C++"], correta: 1 },
        { texto: "O que significa 'nuvem' na computação?", respostas: ["Nuvens reais", "Armazenamento de dados na internet", "Programa de clima", "Vírus"], correta: 1 },
        { texto: "Qual é o sistema operacional do Android?", respostas: ["Proprietário da Apple", "Baseado no Linux", "Baseado no Windows", "Baseado no DOS"], correta: 1 },
        { texto: "O que é um vírus de computador?", respostas: ["Programa protetor", "Programa malicioso", "Tipo de arquivo", "Jogo"], correta: 1 },
        { texto: "Quem é considerado o pai da computação?", respostas: ["Bill Gates", "Steve Jobs", "Alan Turing", "Elon Musk"], correta: 2 },
        { texto: "O que é criptografia?", respostas: ["Esconder mensagens", "Criar senhas", "Proteger dados com códigos", "Apagar arquivos"], correta: 2 },
        { texto: "Qual dispositivo conecta a rede aos computadores?", respostas: ["Telefone", "Roteador", "Impressora", "Teclado"], correta: 1 }
    ]
};

// Funções de navegação
function irConfiguracoes() {
    jog1 = document.getElementById("jogador1").value.trim();
    jog2 = document.getElementById("jogador2").value.trim();
    
    if (!jog1 || !jog2) {
        alert("Digite os nomes dos dois jogadores!");
        return;
    }

    document.getElementById("telaInicio").style.display = "none";
    document.getElementById("telaConfig").style.display = "block";
}

function escolherTempo(segundos) {
    tempoPorPergunta = segundos;
    document.querySelectorAll(".opcao-tempo").forEach(b => b.classList.remove("ativo"));
    event.target.classList.add("ativo");
}

function escolherQuantidade(qtd) {
    quantidadePerguntas = qtd;
    document.querySelectorAll(".opcao-qtd").forEach(b => b.classList.remove("ativo"));
    event.target.classList.add("ativo");
}

function irTema() {
    document.getElementById("telaConfig").style.display = "none";
    document.getElementById("telaTema").style.display = "block";
}

// Embaralhar perguntas e pegar apenas a quantidade escolhida
function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}

function iniciarQuiz(tema) {
    let todasPerguntas = [...bancoPerguntas[tema]];
    perguntasSelecionadas = embaralhar(todasPerguntas).slice(0, quantidadePerguntas);
    
    perguntaAtual = 0;
    pontos1 = 0;
    pontos2 = 0;
    turnoJogador1 = true;

    document.getElementById("telaTema").style.display = "none";
    document.getElementById("telaJogo").style.display = "block";
    
    carregarPergunta();
}

function carregarPergunta() {
    // Atualiza informações
    const jogadorVez = turnoJogador1 ? jog1 : jog2;
    document.getElementById("infoJogador").textContent = `Vez de: ${jogadorVez}`;
    document.getElementById("pontuacao").textContent = `${jog1}: ${pontos1} | ${jog2}: ${pontos2}`;

    // Mostra pergunta
    const pergunta = perguntasSelecionadas[perguntaAtual];
    document.getElementById("perguntaTexto").textContent = `${perguntaAtual + 1}/${perguntasSelecionadas.length} — ${pergunta.texto}`;

    // Cria botões de resposta
    const areaBotoes = document.getElementById("botoesRespostas");
    areaBotoes.innerHTML = "";
    
    pergunta.respostas.forEach((resp, indice) => {
        const botao = document.createElement("button");
        botao.textContent = `${String.fromCharCode(65 + indice)}) ${resp}`;
        botao.onclick = () => verificarResposta(indice, pergunta.correta, botao);
        areaBotoes.appendChild(botao);
    });

    document.getElementById("botaoProxima").style.display = "none";
    
    // Inicia contador de tempo
    iniciarTempo();
}

function iniciarTempo() {
    tempoRestante = tempoPorPergunta;
    atualizarTempo();
    
    // Reseta barra de progresso
    const barra = document.getElementById("barraProgresso");
    barra.style.width = "100%";
    barra.style.backgroundColor = "#10b981";

    cronometro = setInterval(() => {
        tempoRestante--;
        atualizarTempo();
        
        // Atualiza barra
        const porcentagem = (tempoRestante / tempoPorPergunta) * 100;
        barra.style.width = porcentagem + "%";
        
        if (tempoRestante <= 5) {
            barra.style.backgroundColor = "#ef4444";
        } else if (tempoRestante <= 10) {
            barra.style.backgroundColor = "#fbbf24";
        }

        if (tempoRestante <= 0) {
            clearInterval(cronometro);
            tempoEsgotado();
        }
    }, 1000);
}

function atualizarTempo() {
    document.getElementById("contadorTempo").textContent = `⏱️ ${tempoRestante} segundos`;
}

function tempoEsgotado() {
    const botoes = document.querySelectorAll("#botoesRespostas button");
    botoes.forEach(b => b.disabled = true);
    
    const pergunta = perguntasSelecionadas[perguntaAtual];
    botoes[pergunta.correta].classList.add("correta");
    
    document.getElementById("contadorTempo").textContent = "⏰ Tempo esgotado!";
    document.getElementById("botaoProxima").style.display = "block";
}

function verificarResposta(escolhida, correta, botaoClicado) {
    clearInterval(cronometro); // Para o relógio

    const botoes = document.querySelectorAll("#botoesRespostas button");
    botoes.forEach(b => b.disabled = true);

    if (escolhida === correta) {
        botaoClicado.classList.add("correta");
        if (turnoJogador1) pontos1++;
        else pontos2++;
    } else {
        botaoClicado.classList.add("errada");
        botoes[correta].classList.add("correta");
    }

    document.getElementById("botaoProxima").style.display = "block";
}

function proximaPergunta() {
    turnoJogador1 = !turnoJogador1;
    perguntaAtual++;

    if (perguntaAtual < perguntasSelecionadas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("telaJogo").style.display = "none";
    document.getElementById("telaResultado").style.display = "block";

    let mensagem;
    if (pontos1 > pontos2) {
        mensagem = `🎉 ${jog1} VENCEU!\n\n🏆 ${jog1}: ${pontos1} pontos\n🥈 ${jog2}: ${pontos2} pontos`;
    } else if (pontos2 > pontos1) {
        mensagem = `🎉 ${jog2} VENCEU!\n\n🏆 ${jog2}: ${pontos2} pontos\n🥈 ${jog1}: ${pontos1} pontos`;
    } else {
        mensagem = `🤝 EMPATE!\n\nOs dois fizeram ${pontos1} pontos!\nQue jogo disputado!`;
    }

    document.getElementById("caixaResultado").textContent = mensagem;
}

function reiniciar() {
    document.getElementById("telaResultado").style.display = "none";
    document.getElementById("telaInicio").style.display = "block";
    document.getElementById("jogador1").value = "";
    document.getElementById("jogador2").value = "";
    
    // Reseta seleções padrão
    tempoPorPergunta = 20;
    quantidadePerguntas = 10;
    document.querySelectorAll(".opcao-tempo").forEach((b, i) => b.classList.toggle("ativo", i === 1));
    document.querySelectorAll(".opcao-qtd").forEach((b, i) => b.classList.toggle("ativo", i === 1));
}