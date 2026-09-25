// ================= PERGUNTAS =================
const perguntas = {
    gerais: [
        { pergunta: "Quantos dias tem um ano bissexto?", respostas: ["366", "365", "364", "367"], correta: 0, dica: "Um dia a mais em fevereiro" },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Marte", "Terra"], correta: 0 },
        { pergunta: "Quantas cores tem a bandeira do Brasil?", respostas: ["4", "5", "6", "3"], correta: 0 },
        { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Michelangelo"], correta: 0 },
        { pergunta: "Quantos meses têm 28 dias?", respostas: ["Todos", "1", "2", "Nenhum"], correta: 0 },
        { pergunta: "Qual é o símbolo químico do ouro?", respostas: ["Au", "Ag", "Fe", "O"], correta: 0 },
        { pergunta: "Quantos segundos tem 1 hora?", respostas: ["3600", "60", "600", "360"], correta: 0 },
        { pergunta: "O que significa a sigla ONU?", respostas: ["Organização das Nações Unidas", "Organização Nuclear Unida", "Ordem das Nações", "Organização Nacional Unida"], correta: 0 },
        { pergunta: "Quantos lados tem um hexágono?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Qual é o maior continente?", respostas: ["Ásia", "América", "África", "Europa"], correta: 0 }
    ],
    historia: [
        { pergunta: "Em que ano o Brasil foi descoberto?", respostas: ["1500", "1492", "1600", "1822"], correta: 0 },
        { pergunta: "Quem foi o primeiro imperador do Brasil?", respostas: ["D. Pedro I", "D. João VI", "D. Pedro II", "Tiradentes"], correta: 0 },
        { pergunta: "A Segunda Guerra Mundial terminou em:", respostas: ["1945", "1939", "1914", "1918"], correta: 0 },
        { pergunta: "Qual civilização construiu Machu Picchu?", respostas: ["Incas", "Maias", "Astecas", "Egípcias"], correta: 0 },
        { pergunta: "A Revolução Francesa começou em:", respostas: ["1789", "1776", "1800", "1848"], correta: 0 },
        { pergunta: "Quem proclamou a República no Brasil?", respostas: ["Deodoro da Fonseca", "Getúlio Vargas", "D. Pedro II", "Juscelino Kubitschek"], correta: 0 },
        { pergunta: "Em que ano aconteceu a Primeira Guerra Mundial?", respostas: ["1914", "1939", "1900", "1945"], correta: 0 },
        { pergunta: "Qual muro dividiu uma cidade alemã por décadas?", respostas: ["Muro de Berlim", "Muro de Paris", "Muro de Roma", "Muro de Londres"], correta: 0 },
        { pergunta: "Quem foi o líder da Revolução Russa de 1917?", respostas: ["Lênin", "Stálin", "Trotsky", "Gorbatchov"], correta: 0 },
        { pergunta: "Os egípcios construíram grandes túmulos chamados:", respostas: ["Pirâmides", "Torres", "Catedrais", "Palácios"], correta: 0 }
    ],
    ciencias: [
        { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", respostas: ["Marte", "Vênus", "Júpiter", "Saturno"], correta: 0 },
        { pergunta: "De que cor é o sangue circulando no corpo?", respostas: ["Vermelho", "Azul", "Verde", "Roxo"], correta: 0 },
        { pergunta: "Quantos ossos tem um adulto humano?", respostas: ["206", "250", "180", "220"], correta: 0 },
        { pergunta: "Qual estrela fica mais próxima da Terra?", respostas: ["Sol", "Lua", "Sirius", "Alfa Centauri"], correta: 0 },
        { pergunta: "O que as plantas liberam na fotossíntese?", respostas: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Hidrogênio"], correta: 0 },
        { pergunta: "Quantos planetas fazem parte do nosso sistema solar?", respostas: ["8", "7", "9", "10"], correta: 0 },
        { pergunta: "Qual é o elemento mais abundante no universo?", respostas: ["Hidrogênio", "Oxigênio", "Carbono", "Nitrogênio"], correta: 0 },
        { pergunta: "O órgão que bombeia sangue no corpo é:", respostas: ["Coração", "Cérebro", "Pulmão", "Fígado"], correta: 0 },
        { pergunta: "A água é formada por quais elementos?", respostas: ["Hidrogênio e Oxigênio", "Oxigênio e Carbono", "Hidrogênio e Nitrogênio", "Carbono e Ferro"], correta: 0 },
        { pergunta: "Quantos dentes tem uma criança em média antes de trocar?", respostas: ["20", "24", "28", "32"], correta: 0 }
    ],
    geografia: [
        { pergunta: "Qual é o maior país do mundo em área?", respostas: ["Rússia", "Brasil", "China", "Estados Unidos"], correta: 0 },
        { pergunta: "Onde fica a floresta amazônica?", respostas: ["América do Sul", "África", "Ásia", "Europa"], correta: 0 },
        { pergunta: "Qual é a capital do Brasil?", respostas: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], correta: 0 },
        { pergunta: "O deserto do Saara fica em qual continente?", respostas: ["África", "Ásia", "América", "Oceania"], correta: 0 },
        { pergunta: "Quantos oceanos existem?", respostas: ["5", "4", "6", "7"], correta: 0 },
        { pergunta: "Qual é o menor continente?", respostas: ["Oceania", "América do Sul", "Europa", "Antártida"], correta: 0 },
        { pergunta: "O Monte Everest fica em qual cordilheira?", respostas: ["Himalaia", "Andes", "Alpes", "Pirenéus"], correta: 0 },
        { pergunta: "Qual é o rio mais longo do mundo?", respostas: ["Amazonas", "Nilo", "Mississipi", "Yangtzé"], correta: 0 },
        { pergunta: "Qual é a capital da França?", respostas: ["Paris", "Londres", "Roma", "Berlim"], correta: 0 },
        { pergunta: "O Brasil faz fronteira com quantos países?", respostas: ["10", "8", "12", "15"], correta: 0 }
    ],
    esportes: [
        { pergunta: "Quantos jogadores tem uma equipe de futebol em campo?", respostas: ["11", "10", "12", "9"], correta: 0 },
        { pergunta: "Qual esporte usa rede, peteca e raquete?", respostas: ["Badminton", "Vôlei", "Tênis", "Futevôlei"], correta: 0 },
        { pergunta: "Quantos anéis tem o símbolo das Olimpíadas?", respostas: ["5", "6", "4", "7"], correta: 0 },
        { pergunta: "Qual país tem mais títulos de Copa do Mundo?", respostas: ["Brasil", "Alemanha", "Itália", "Argentina"], correta: 0 },
        { pergunta: "Quantos pontos vale uma cesta de fora da linha no basquete?", respostas: ["3", "2", "1", "4"], correta: 0 },
        { pergunta: "Uma maratona tem aproximadamente:", respostas: ["42 km", "21 km", "10 km", "50 km"], correta: 0 },
        { pergunta: "No vôlei, quantos jogadores ficam em campo por time?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Quem é considerado o rei do futebol?", respostas: ["Pelé", "Maradona", "Messi", "Cristiano Ronaldo"], correta: 0 },
        { pergunta: "Em qual esporte se usa a palavra 'checkmate'?", respostas: ["Xadrez", "Boxe", "Tênis", "Vôlei"], correta: 0 },
        { pergunta: "Quantos minutos dura um jogo de futebol regulamentar?", respostas: ["90 min", "80 min", "100 min", "120 min"], correta: 0 }
    ],
    filmes: [
        { pergunta: "Qual filme tem um boneco de madeira que quer ser gente?", respostas: ["Pinóquio", "Toy Story", "Frozen", "Moana"], correta: 0 },
        { pergunta: "Quem é o diretor de 'Titanic'?", respostas: ["James Cameron", "Steven Spielberg", "George Lucas", "Christopher Nolan"], correta: 0 },
        { pergunta: "Qual filme tem um tubarão que assusta uma praia?", respostas: ["Tubarão", "Procurando Nemo", "Abaixo do Mar", "Oceans"], correta: 0 },
        { pergunta: "Em 'Harry Potter', quem é o melhor amigo do Harry?", respostas: ["Rony Weasley", "Hermione", "Draco", "Neville"], correta: 0 },
        { pergunta: "Qual franquia tem como lema 'Vingadores, reunidos!'?", respostas: ["Marvel", "DC", "Star Wars", "X-Men"], correta: 0 },
        { pergunta: "Qual filme tem a frase 'Com grandes poderes vêm grandes responsabilidades'?", respostas: ["Homem-Aranha", "Batman", "Super-Homem", "Capitão América"], correta: 0 },
        { pergunta: "No filme 'O Rei Leão', quem é o vilão irmão de Mufasa?", respostas: ["Cobra", "Scar", "Simba", "Timão"], correta: 1 },
        { pergunta: "Qual princesa tem cabelo comprido e mágico?", respostas: ["Rapunzel", "Bela", "Ariel", "Cinderela"], correta: 0 },
        { pergunta: "Em qual filme os personagens são amarelos e comem bananas?", respostas: ["Minions", "Os Vingadores", "A Era do Gelo", "Shrek"], correta: 0 },
        { pergunta: "Qual filme de animação se passa no fundo do mar com peixes?", respostas: ["Procurando Nemo", "O Rei Leão", "Carros", "Up"], correta: 0 },
        { pergunta: "Qual filme fala sobre um menino que entra no mundo dos jogos?", respostas: ["Jogo Imaginário", "Toy Story", "Monstros S.A.", "Aladdin"], correta: 0 },
        { pergunta: "Quem é o super-herói que tem um martelo chamado Mjolnir?", respostas: ["Thor", "Hulk", "Homem de Ferro", "Capitão América"], correta: 0 },
        { pergunta: "Em 'Star Wars', qual é a arma dos Jedi?", respostas: ["Sabre de Luz", "Espada", "Pistola", "Escudo"], correta: 0 },
        { pergunta: "Qual filme tem uma menina que pode controlar o gelo?", respostas: ["Frozen", "Moana", "Valente", "A Bela e a Fera"], correta: 0 },
        { pergunta: "O filme 'O Senhor dos Anéis' se passa em qual mundo?", respostas: ["Terra Média", "Nárnia", "Westeros", "Hogwarts"], correta: 0 }
    ],
    series: [
        { pergunta: "Em 'Stranger Things', qual é o nome da menina com poderes?", respostas: ["Onze", "Doze", "Treze", "Quinze"], correta: 0 },
        { pergunta: "Qual série se passa em Westeros e tem casas e dragões?", respostas: ["Game of Thrones", "The Witcher", "The Last Kingdom", "Vikings"], correta: 0 },
        { pergunta: "Qual série mostra um cientista que cria drogas em laboratório?", respostas: ["Breaking Bad", "The Walking Dead", "House", "Sherlock"], correta: 0 },
        { pergunta: "Em 'Friends', quantos amigos moram perto?", respostas: ["6", "5", "4", "7"], correta: 0 },
        { pergunta: "Qual série tem zumbis e sobreviventes lutando?", respostas: ["The Walking Dead", "Stranger Things", "Supernatural", "Lost"], correta: 0 },
        { pergunta: "Em 'La Casa de Papel', qual é o nome do líder?", respostas: ["Professor", "Doutor", "Mestre", "Chefe"], correta: 0 },
        { pergunta: "Em 'Vikings', quem é o principal guerreiro?", respostas: ["Ragnar", "Thor", "Odin", "Loki"], correta: 0 },
        { pergunta: "Qual série acompanha a vida de funcionários de uma empresa de papel?", respostas: ["The Office", "Friends", "How I Met Your Mother", "Modern Family"], correta: 0 },
        { pergunta: "Em 'Dark', os personagens viajam no quê?", respostas: ["Tempo", "Espaço", "Planetas", "Dimensões"], correta: 0 },
        { pergunta: "Qual série mistura investigação e seres sobrenaturais?", respostas: ["Supernatural", "Sherlock", "Black Mirror", "Dark"], correta: 0 }
    ],
    musica: [
        { pergunta: "Qual é o rei do pop?", respostas: ["Michael Jackson", "Elvis Presley", "Justin Bieber", "Bruno Mars"], correta: 0 },
        { pergunta: "Quem canta a música 'Hey Jude'?", respostas: ["The Beatles", "Queen", "Rolling Stones", "U2"], correta: 0 },
        { pergunta: "Qual instrumento tem teclas e martelos internos?", respostas: ["Piano", "Violão", "Bateria", "Saxofone"], correta: 0 },
        { pergunta: "Quantas notas tem uma escala musical?", respostas: ["7", "8", "5", "12"], correta: 0 },
        { pergunta: "Qual gênero musical nasceu no Brasil com tambores e dança?", respostas: ["Samba", "Forró", "Sertanejo", "Funk"], correta: 0 },
        { pergunta: "Quem é conhecido como 'Rei do Rock'?", respostas: ["Elvis Presley", "Chuck Berry", "Michael Jackson", "Bob Marley"], correta: 0 },
        { pergunta: "Qual banda tem Freddie Mercury como vocalista?", respostas: ["Queen", "Led Zeppelin", "Pink Floyd", "AC/DC"], correta: 0 },
        { pergunta: "O que significa a sigla MPB?", respostas: ["Música Popular Brasileira", "Melhores Performances do Brasil", "Música Para Baixar", "Música Pop Brasileira"], correta: 0 },
        { pergunta: "Qual instrumento é de sopro e tem chaves de metal?", respostas: ["Flauta", "Violino", "Guitarra", "Pandeiro"], correta: 0 },
        { pergunta: "O violão tem quantas cordas?", respostas: ["6", "4", "8", "12"], correta: 0 }
    ],
    curiosidades: [
        { pergunta: "Quantos ossos tem um bebê recém-nascido?", respostas: ["Mais de 300", "206", "150", "250"], correta: 0, dica: "Eles se fundem conforme crescem!" },
        { pergunta: "Qual é o animal mais rápido do mundo?", respostas: ["Gavião-peregrino", "Guepardo", "Leopardo", "Cavalo"], correta: 0 },
        { pergunta: "O coração de qual animal fica na cabeça?", respostas: ["Camarão", "Polvo", "Baleia", "Cavalo-marinho"], correta: 0 },
        { pergunta: "Quantas estrelas tem na bandeira do Brasil atual?", respostas: ["27", "26", "28", "25"], correta: 0 },
        { pergunta: "Qual é o único mamífero que pode voar?", respostas: ["Morcego", "Ave", "Esquilo-voador", "Raposa"], correta: 0 },
        { pergunta: "Em qual país foi inventado o papel?", respostas: ["China", "Egito", "Grécia", "Itália"], correta: 0 },
        { pergunta: "Qual é o metal mais precioso?", respostas: ["Platina", "Ouro", "Prata", "Cobre"], correta: 0 },
        { pergunta: "O sol é formado principalmente por qual gás?", respostas: ["Hidrogênio", "Oxigênio", "Hélio", "Nitrogênio"], correta: 0 },
        { pergunta: "Qual é o maior oceano do mundo?", respostas: ["Pacífico", "Atlântico", "Índico", "Ártico"], correta: 0 },
        { pergunta: "Qual animal tem a impressão digital igual à humana?", respostas: ["Coala", "Macaco", "Gorila", "Cachorro"], correta: 0 }
    ]
};

// ================= VARIÁVEIS GLOBAIS =================
let nomeJogador = '';
let nomeAdversario = 'Adversário';
let codigoSala = '';
let modoJogo = 'amigo';
let ehDono = false;
let adversarioConectado = false;
let quantidadePerguntas = 10;
let tempoPorPergunta = 20;
let temaAtual = 'gerais';
let dificuldade = 'medio';
let listaPerguntas = [];

let indicePergunta = 0;
let pontos1 = 0;
let pontos2 = 0;
let acertosTotal = 0;
let errosTotal = 0;
let sequenciaAtual = 0;
let maiorSequencia = 0;
let respondiu = false;
let tempoRestante = 0;
let cronometro;
let perguntaAtualObj = null;
let dicaUsada = false;
let respostaEliminada = -1;

let somLigado = true;
let dicasDisponiveis = 1;
let eliminacoesDisponiveis = 1;
let trocasDisponiveis = 1;
let temposExtrasDisponiveis = 1;

// ESTATÍSTICAS E CONQUISTAS
let estatisticas = JSON.parse(localStorage.getItem('quizEstatisticas')) || {
    partidasJogadas: 0,
    partidasVencidas: 0,
    partidasEmpatadas: 0,
    totalAcertos: 0,
    totalErros: 0,
    maiorSequencia: 0,
    melhorSequencia: 0
};

let conquistas = JSON.parse(localStorage.getItem('quizConquistas')) || [];

const listaConquistas = [
    { id: 'primeira', nome: 'Primeiros Passos', desc: 'Jogar a primeira partida', icone: '🎯' },
    { id: 'dez_acertos', nome: 'Mente Afiada', desc: 'Acertar 10 perguntas', icone: '🧠' },
    { id: 'vitoria', nome: 'Campeão', desc: 'Vencer uma partida', icone: '🏆' },
    { id: 'sequencia3', nome: 'Na Ponta do Lápis', desc: 'Acertar 3 seguidas', icone: '🔥' },
    { id: 'sequencia5', nome: 'Imparável', desc: 'Acertar 5 seguidas', icone: '💥' },
    { id: 'todas_temas', nome: 'Explorador', desc: 'Jogar em todos os temas', icone: '🌍' }
];

let temasJogados = JSON.parse(localStorage.getItem('temasJogados')) || [];

// ================= FUNÇÕES BÁSICAS =================
function mostrarTela(idTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

function selecionarModo(modo) {
    modoJogo = modo;
    document.getElementById('btnModoAmigo').classList.toggle('ativo', modo === 'amigo');
    document.getElementById('btnModoMaquina').classList.toggle('ativo', modo === 'maquina');
    document.getElementById('dificuldadeGrupo').style.display = modo === 'maquina' ? 'block' : 'none';
}

function escolherQuantidade(qtd) {
    quantidadePerguntas = qtd;
    document.querySelectorAll('.btn-quantidade').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
}

function escolherTempo(t) {
    tempoPorPergunta = t;
    document.querySelectorAll('.btn-tempo').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
}

function escolherDificuldade(d) {
    dificuldade = d;
    document.querySelectorAll('#dificuldadeGrupo .btn-modo').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
}

function criarSala() {
    nomeJogador = document.getElementById('nomeJogador').value.trim() || 'Jogador 1';
    if (!nomeJogador) { alert('Digite seu nome!'); return; }
    
    codigoSala = gerarCodigo();
    ehDono = true;
    
    if (modoJogo === 'maquina') {
        adversarioConectado = true;
        nomeAdversario = 'Máquina';
        irParaConfiguracoes();
        return;
    }
    
    document.getElementById('codigoSala').textContent = codigoSala;
    mostrarTela('tela-espera');
    
    setTimeout(() => {
        adversarioConectado = true;
        document.getElementById('btnIniciarAgora').style.display = 'inline-block';
        document.getElementById('statusAguardando').textContent = 'Adversário encontrado!';
    }, 1500);
}

function entrarSala() {
    nomeJogador = document.getElementById('nomeJogadorEntrada').value.trim() || 'Jogador 2';
    codigoSala = document.getElementById('codigoEntrada').value.trim();
    
    if (!nomeJogador || !codigoSala) { alert('Preencha tudo!'); return; }
    
    ehDono = false;
    nomeAdversario = 'Dono da Sala';
    adversarioConectado = true;
    irParaConfiguracoes();
}

function gerarCodigo() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function irParaConfiguracoes() {
    mostrarTela('tela-config');
}

function confirmarConfig() {
    mostrarTela('tela-temas');
}

function escolherTema(tema) {
    temaAtual = tema;
    if (tema === 'surpresa') {
        const temasDisponiveis = Object.keys(perguntas).filter(t => t !== 'surpresa');
        temaAtual = temasDisponiveis[Math.floor(Math.random() * temasDisponiveis.length)];
    }
    
    if (!temasJogados.includes(temaAtual)) {
        temasJogados.push(temaAtual);
        localStorage.setItem('temasJogados', JSON.stringify(temasJogados));
    }
    
    prepararPerguntas();
    iniciarJogo();
}

function prepararPerguntas() {
    let banco = [...perguntas[temaAtual]];
    listaPerguntas = embaralhar(banco).slice(0, quantidadePerguntas);
}

function embaralhar(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function iniciarJogo() {
    indicePergunta = 0;
    pontos1 = 0;
    pontos2 = 0;
    acertosTotal = 0;
    errosTotal = 0;
    sequenciaAtual = 0;
    maiorSequencia = 0;
    dicasDisponiveis = 1;
    eliminacoesDisponiveis = 1;
    trocasDisponiveis = 1;
    temposExtrasDisponiveis = 1;
    
    atualizarPlacar();
    mostrarTela('tela-jogo');
    carregarPergunta();
}

function carregarPergunta() {
    if (indicePergunta >= listaPerguntas.length) {
        finalizarJogo();
        return;
    }
    
    respondiu = false;
    respostaEliminada = -1;
    dicaUsada = false;
    perguntaAtualObj = listaPerguntas[indicePergunta];
    
    document.getElementById('pergunta').textContent = perguntaAtualObj.pergunta;
    document.getElementById('dicaTexto').style.display = 'none';
    document.getElementById('dicaTexto').textContent = '';
    
    const botoesDiv = document.getElementById('botoesResposta');
    botoesDiv.innerHTML = '';
    
    let respostasEmbaralhadas = embaralhar([...perguntaAtualObj.respostas]);
    let indiceCorreta = respostasEmbaralhadas.indexOf(perguntaAtualObj.respostas[perguntaAtualObj.correta]);
    
    perguntaAtualObj.respostasEmbaralhadas = respostasEmbaralhadas;
    perguntaAtualObj.indiceCorreta = indiceCorreta;
    
    respostasEmbaralhadas.forEach((texto, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-resposta';
        btn.textContent = `${String.fromCharCode(65 + i)}) ${texto}`;
        btn.onclick = () => responder(i);
        botoesDiv.appendChild(btn);
    });
    
    atualizarPowerups();
    document.getElementById('sequenciaAcertos').textContent = '';
    
    tempoRestante = tempoPorPergunta;
    atualizarCronometro();
    cronometro = setInterval(contarTempo, 1000);
}

function contarTempo() {
    tempoRestante--;
    atualizarCronometro();
    
    if (tempoRestante <= 0) {
        clearInterval(cronometro);
        if (!respondiu) {
            responder(-1);
        }
    }
}

function atualizarCronometro() {
    const el = document.getElementById('cronometro');
    el.textContent = tempoRestante;
    el.classList.toggle('urgente', tempoRestante <= 5);
}

function responder(indiceEscolhido) {
    if (respondiu) return;
    respondiu = true;
    clearInterval(cronometro);
    
    const estaCorreta = indiceEscolhido === perguntaAtualObj.indiceCorreta;
    const botoes = document.querySelectorAll('.btn-resposta');
    
    botoes[perguntaAtualObj.indiceCorreta].classList.add('correta');
    
    if (indiceEscolhido === -1) {
        sequenciaAtual = 0;
        errosTotal++;
    } else if (estaCorreta) {
        pontos1 += 10 + (tempoRestante > 0 ? Math.floor(tempoRestante / 2) : 0);
        acertosTotal++;
        sequenciaAtual++;
        if (sequenciaAtual > maiorSequencia) maiorSequencia = sequenciaAtual;
        if (sequenciaAtual >= 2) {
            document.getElementById('sequenciaAcertos').textContent = `🔥 ${sequenciaAtual} acertos seguidos!`;
        }
    } else {
        botoes[indiceEscolhido].classList.add('errada');
        sequenciaAtual = 0;
        errosTotal++;
    }
    
    // Resposta da máquina
    if (modoJogo === 'maquina') {
        let acertou = false;
        const chance = { facil: 0.6, medio: 0.75, dificil: 0.9 }[dificuldade];
        if (Math.random() < chance) {
            acertou = true;
            pontos2 += 10;
        }
        mostrarResultadoRodada(estaCorreta, acertou);
    } else {
        mostrarResultadoRodada(estaCorreta, null);
    }
    
    atualizarPlacar();
    verificarConquistas();
}

function mostrarResultadoRodada(acertouJogador, acertouAdversario) {
    indicePergunta++;
    
    const texto = document.getElementById('resultadoRodada');
    if (acertouJogador) {
        texto.textContent = '✅ Resposta Correta!';
        texto.style.color = 'var(--cor-sucesso)';
    } else {
        texto.textContent = '❌ Resposta Errada!';
        texto.style.color = 'var(--cor-erro)';
    }
    
    document.getElementById('intervalo-nome1').textContent = nomeJogador;
    document.getElementById('intervalo-pontos1').textContent = pontos1;
    document.getElementById('intervalo-nome2').textContent = nomeAdversario;
    document.getElementById('intervalo-pontos2').textContent = pontos2;
    
    mostrarTela('tela-intervalo');
    
    let contador = 3;
    document.getElementById('contadorIntervalo').textContent = contador;
    const intervalo = setInterval(() => {
        contador--;
        document.getElementById('contadorIntervalo').textContent = contador;
        if (contador <= 0) {
            clearInterval(intervalo);
            if (indicePergunta < listaPerguntas.length) {
                carregarPergunta();
                mostrarTela('tela-jogo');
            } else {
                finalizarJogo();
            }
        }
    }, 1000);
}

function atualizarPlacar() {
    document.getElementById('nome1').textContent = nomeJogador;
    document.getElementById('pontos1').textContent = pontos1;
    document.getElementById('nome2').textContent = nomeAdversario;
    document.getElementById('pontos2').textContent = pontos2;
}

function atualizarPowerups() {
    document.getElementById('btnDica').disabled = dicasDisponiveis <= 0 || dicaUsada;
    document.getElementById('btnEliminar').disabled = eliminacoesDisponiveis <= 0 || respostaEliminada !== -1;
    document.getElementById('btnTrocar').disabled = trocasDisponiveis <= 0;
    document.getElementById('btnTempo').disabled = temposExtrasDisponiveis <= 0;
}

function usarDica() {
    if (dicasDisponiveis <= 0 || dicaUsada) return;
    dicasDisponiveis--;
    dicaUsada = true;
    if (perguntaAtualObj.dica) {
        document.getElementById('dicaTexto').textContent = '💡 ' + perguntaAtualObj.dica;
        document.getElementById('dicaTexto').style.display = 'block';
    } else {
        const botoes = document.querySelectorAll('.btn-resposta');
        for (let i = 0; i < botoes.length; i++) {
            if (i !== perguntaAtualObj.indiceCorreta && !botoes[i].classList.contains('eliminada')) {
                botoes[i].classList.add('eliminada');
                break;
            }
        }
    }
    atualizarPowerups();
}

function usarEliminar() {
    if (eliminacoesDisponiveis <= 0 || respostaEliminada !== -1) return;
    eliminacoesDisponiveis--;
    const botoes = document.querySelectorAll('.btn-resposta');
    let eliminadas = 0;
    for (let i = 0; i < botoes.length && eliminadas < 2; i++) {
        if (i !== perguntaAtualObj.indiceCorreta && !botoes[i].classList.contains('eliminada')) {
            botoes[i].classList.add('eliminada');
            eliminadas++;
        }
    }
    respostaEliminada = -2;
    atualizarPowerups();
}

function usarTrocar() {
    if (trocasDisponiveis <= 0) return;
    trocasDisponiveis--;
    listaPerguntas.splice(indicePergunta, 1);
    let banco = [...perguntas[temaAtualObj]];
    let nova;
    do {
        nova = banco[Math.floor(Math.random() * banco.length)];
    } while (nova.pergunta === perguntaAtualObj.pergunta && banco.length > 1);
    listaPerguntas.splice(indicePergunta, 0, nova);
    carregarPergunta();
    atualizarPowerups();
}

function usarTempo() {
    if (temposExtrasDisponiveis <= 0) return;
    temposExtrasDisponiveis--;
    tempoRestante += 5;
    atualizarCronometro();
    atualizarPowerups();
}

function finalizarJogo() {
    estatisticas.partidasJogadas++;
    estatisticas.totalAcertos += acertosTotal;
    estatisticas.totalErros += errosTotal;
    if (maiorSequencia > estatisticas.melhorSequencia) {
        estatisticas.melhorSequencia = maiorSequencia;
    }
    
    let mensagem;
    if (pontos1 > pontos2) {
        mensagem = '🎉 VOCÊ VENCEU!';
        estatisticas.partidasVencidas++;
    } else if (pontos1 < pontos2) {
        mensagem = '😢 Você perdeu...';
    } else {
        mensagem = '🤝 EMPATE!';
        estatisticas.partidasEmpatadas++;
    }
    
    localStorage.setItem('quizEstatisticas', JSON.stringify(estatisticas));
    
    document.getElementById('textoResultado').textContent = mensagem;
    document.getElementById('estatisticasFinais').innerHTML = `
        <div class="est-linha"><span>Pontos</span><strong>${pontos1}</strong></div>
        <div class="est-linha"><span>Acertos</span><strong>${acertosTotal}</strong></div>
        <div class="est-linha"><span>Erros</span><strong>${errosTotal}</strong></div>
        <div class="est-linha"><span>Maior sequência</span><strong>${maiorSequencia}</strong></div>
        <div class="est-linha"><span>Total de perguntas</span><strong>${listaPerguntas.length}</strong></div>
    `;
    
    verificarConquistas(true);
    mostrarTela('tela-resultado');
}

function verificarConquistas(mostrarMensagem = false) {
    const novas = [];
    
    if (!conquistas.includes('primeira') && estatisticas.partidasJogadas >= 1) {
        conquistas.push('primeira');
        novas.push('primeira');
    }
    if (!conquistas.includes('dez_acertos') && estatisticas.totalAcertos >= 10) {
        conquistas.push('dez_acertos');
        novas.push('dez_acertos');
    }
    if (!conquistas.includes('vitoria') && estatisticas.partidasVencidas >= 1) {
        conquistas.push('vitoria');
        novas.push('vitoria');
    }
    if (!conquistas.includes('sequencia3') && maiorSequencia >= 3) {
        conquistas.push('sequencia3');
        novas.push('sequencia3');
    }
    if (!conquistas.includes('sequencia5') && maiorSequencia >= 5) {
        conquistas.push('sequencia5');
        novas.push('sequencia5');
    }
    if (!conquistas.includes('todas_temas') && temasJogados.length >= 9) {
        conquistas.push('todas_temas');
        novas.push('todas_temas');
    }
    
    if (novas.length > 0) {
        localStorage.setItem('quizConquistas', JSON.stringify(conquistas));
        if (mostrarMensagem) {
            const c = listaConquistas.find(x => x.id === novas[0]);
            document.getElementById('novaConquista').style.display = 'block';
            document.getElementById('nomeConquistaNova').textContent = `${c.icone} ${c.nome}`;
        }
    }
}

function reiniciar() {
    mostrarTela('tela-inicio');
    nomeJogador = '';
    codigoSala = '';
    ehDono = false;
    adversarioConectado = false;
    document.getElementById('btnIniciarAgora').style.display = 'none';
    document.getElementById('novaConquista').style.display = 'none';
    document.getElementById('nomeJogador').value = '';
    document.getElementById('nomeJogadorEntrada').value = '';
    document.getElementById('codigoEntrada').value = '';
}

function alternarSom() {
    somLigado = !somLigado;
    document.getElementById('btnSom').textContent = somLigado ? '🔊 Som: Ligado' : '🔇 Som: Desligado';
}

function abrirEstatisticas() {
    document.getElementById('caixaEstatisticas').innerHTML = `
        <div class="est-linha"><span>Partidas jogadas</span><strong>${estatisticas.partidasJogadas}</strong></div>
        <div class="est-linha"><span>Vitórias</span><strong>${estatisticas.partidasVencidas}</strong></div>
        <div class="est-linha"><span>Empates</span><strong>${estatisticas.partidasEmpatadas}</strong></div>
        <div class="est-linha"><span>Total de acertos</span><strong>${estatisticas.totalAcertos}</strong></div>
        <div class="est-linha"><span>Total de erros</span><strong>${estatisticas.totalErros}</strong></div>
        <div class="est-linha"><span>Melhor sequência</span><strong>${estatisticas.melhorSequencia}</strong></div>
    `;
    mostrarTela('tela-estatisticas');
}

function fecharEstatisticas() {
    mostrarTela('tela-inicio');
}

function abrirConquistas() {
    let html = '';
    listaConquistas.forEach(c => {
        const desbloqueada = conquistas.includes(c.id);
        html += `
            <div class="conquista-card ${desbloqueada ? 'desbloqueada' : 'bloqueada'}">
                <div class="conquista-icone">${desbloqueada ? c.icone : '🔒'}</div>
                <strong>${desbloqueada ? c.nome : '???'}</strong>
                <p style="font-size:0.8rem; margin-top:0.3rem;">${desbloqueada ? c.desc : 'Desconhecida'}</p>
            </div>
        `;
    });
    document.getElementById('gradeConquistas').innerHTML = html;
    mostrarTela('tela-conquistas');
}

function fecharConquistas() {
    mostrarTela('tela-inicio');
}

function abrirRanking() {
    const ranking = [
        { nome: 'Você', pontos: estatisticas.partidasVencidas * 100 + estatisticas.totalAcertos * 10 }
    ];
    ranking.sort((a, b) => b.pontos - a.pontos);
    document.getElementById('listaRanking').innerHTML = ranking.map((j, i) => `
        <div class="est-linha">
            <span>${i+1}º ${j.nome}</span>
            <strong>${j.pontos} pts</strong>
        </div>
    `).join('');
    mostrarTela('tela-ranking');
}

function fecharRanking() {
    mostrarTela('tela-inicio');
}

function abrirCores() {
    mostrarTela('tela-cores');
}

function aplicarTema(tema) {
    const paletas = {
        azul: ['#4cc9f0', '#4361ee', '#1a1a2e', '#16213e', '#0f3460'],
        roxo: ['#a855f7', '#6366f1', '#1a1a2e', '#1e1b4b', '#312e81'],
        verde: ['#34d399', '#10b981', '#064e3b', '#065f46', '#047857'],
        vermelho: ['#f87171', '#ef4444', '#450a0a', '#7f1d1d', '#991b1b'],
        dourado: ['#fcd34d', '#f59e0b', '#422006', '#78350f', '#92400e'],
        escuro: ['#6b7280', '#374151', '#0f0f0f', '#1f1f1f', '#2a2a2a']
    };
    const p = paletas[tema];
    document.documentElement.style.setProperty('--cor-primaria', p[0]);
    document.documentElement.style.setProperty('--cor-secundaria', p[1]);
    document.documentElement.style.setProperty('--cor-fundo-1', p[2]);
    document.documentElement.style.setProperty('--cor-fundo-2', p[3]);
    document.documentElement.style.setProperty('--cor-fundo-3', p[4]);
    localStorage.setItem('temaEscolhido', tema);
}

function fecharCores() {
    mostrarTela('tela-inicio');
}

window.onload = function() {
    const salvo = localStorage.getItem('temaEscolhido');
    if (salvo) aplicarTema(salvo);
};
