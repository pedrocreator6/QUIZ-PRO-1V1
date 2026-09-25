let nomeJogador = '';
let codigoSala = '';
let senhaSala = '';
let ehDono = false;
let adversarioConectado = false;
let pontos1 = 0;
let pontos2 = 0;
let indicePergunta = 0;
let temaAtual = '';
let quantidadePerguntas = 10;
let tempoRestante = 20;
let tempoInicialPergunta = 20;
let cronometro;
let intervaloCronometro;
let respondiu = false;
let modoJogo = 'amigo';
let dificuldade = 'medio';
let somLigado = true;
let perguntasUsadas = [];
let acertosTotal = 0;
let errosTotal = 0;

// Sistema de Ranking
function getRanking() {
    return JSON.parse(localStorage.getItem('quizRanking') || '[]');
}

function salvarRanking(nome, vitoria, empate) {
    let ranking = getRanking();
    let jogador = ranking.find(j => j.nome === nome);
    if (!jogador) {
        jogador = { nome: nome, vitorias: 0, derrotas: 0, empates: 0 };
        ranking.push(jogador);
    }
    if (vitoria) jogador.vitorias++;
    else if (empate) jogador.empates++;
    else jogador.derrotas++;
    ranking.sort((a, b) => (b.vitorias * 3 + b.empates) - (a.vitorias * 3 + a.empates));
    localStorage.setItem('quizRanking', JSON.stringify(ranking));
}

// Efeitos Sonoros
const som = {
    tocar(tipo) {
        if (!somLigado) return;
        try {
            const a = new AudioContext();
            const o = a.createOscillator();
            const g = a.createGain();
            o.connect(g); g.connect(a.destination);
            
            if (tipo === 'acerto') {
                o.frequency.setValueAtTime(523, a.currentTime);
                o.frequency.setValueAtTime(659, a.currentTime + 0.1);
                g.gain.setValueAtTime(0.1, a.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, a.currentTime + 0.3);
                o.start(a.currentTime); o.stop(a.currentTime + 0.3);
            } else if (tipo === 'erro') {
                o.frequency.setValueAtTime(200, a.currentTime);
                o.frequency.setValueAtTime(150, a.currentTime + 0.1);
                g.gain.setValueAtTime(0.1, a.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, a.currentTime + 0.3);
                o.start(a.currentTime); o.stop(a.currentTime + 0.3);
            } else if (tipo === 'vitoria') {
                [523, 659, 784, 1047].forEach((f, i) => {
                    const n = a.createOscillator();
                    const gn = a.createGain();
                    n.connect(gn); gn.connect(a.destination);
                    n.frequency.setValueAtTime(f, a.currentTime + i * 0.15);
                    gn.gain.setValueAtTime(0.08, a.currentTime + i * 0.15);
                    gn.gain.exponentialRampToValueAtTime(0.01, a.currentTime + i * 0.15 + 0.3);
                    n.start(a.currentTime + i * 0.15);
                    n.stop(a.currentTime + i * 0.15 + 0.3);
                });
            } else if (tipo === 'derrota') {
                [392, 349, 294, 262].forEach((f, i) => {
                    const n = a.createOscillator();
                    const gn = a.createGain();
                    n.connect(gn); gn.connect(a.destination);
                    n.frequency.setValueAtTime(f, a.currentTime + i * 0.2);
                    gn.gain.setValueAtTime(0.08, a.currentTime + i * 0.2);
                    gn.gain.exponentialRampToValueAtTime(0.01, a.currentTime + i * 0.2 + 0.3);
                    n.start(a.currentTime + i * 0.2);
                    n.stop(a.currentTime + i * 0.2 + 0.3);
                });
            } else if (tipo === 'contagem') {
                o.frequency.setValueAtTime(880, a.currentTime);
                g.gain.setValueAtTime(0.05, a.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, a.currentTime + 0.1);
                o.start(a.currentTime); o.stop(a.currentTime + 0.1);
            }
        } catch (e) {}
    }
};

function alternarSom() {
    somLigado = !somLigado;
    document.getElementById('btnSom').textContent = somLigado ? '🔊 Som: Ligado' : '🔇 Som: Desligado';
}

// Temas de Cores
function aplicarTema(cor) {
    const r = document.documentElement.style;
    const fundo = document.querySelector('.fundo-animado');
    switch(cor) {
        case 'azul':
            r.setProperty('--cor-primaria', '#4cc9f0');
            r.setProperty('--cor-secundaria', '#4361ee');
            r.setProperty('--cor-fundo-1', '#1a1a2e');
            r.setProperty('--cor-fundo-2', '#16213e');
            r.setProperty('--cor-fundo-3', '#0f3460');
            break;
        case 'roxo':
            r.setProperty('--cor-primaria', '#a855f7');
            r.setProperty('--cor-secundaria', '#6366f1');
            r.setProperty('--cor-fundo-1', '#2d1b69');
            r.setProperty('--cor-fundo-2', '#4c1d95');
            r.setProperty('--cor-fundo-3', '#5b21b6');
            break;
        case 'verde':
            r.setProperty('--cor-primaria', '#34d399');
            r.setProperty('--cor-secundaria', '#10b981');
            r.setProperty('--cor-fundo-1', '#064e3b');
            r.setProperty('--cor-fundo-2', '#065f46');
            r.setProperty('--cor-fundo-3', '#047857');
            break;
        case 'vermelho':
            r.setProperty('--cor-primaria', '#f87171');
            r.setProperty('--cor-secundaria', '#ef4444');
            r.setProperty('--cor-fundo-1', '#7f1d1d');
            r.setProperty('--cor-fundo-2', '#991b1b');
            r.setProperty('--cor-fundo-3', '#b91c1c');
            break;
        case 'dourado':
            r.setProperty('--cor-primaria', '#fcd34d');
            r.setProperty('--cor-secundaria', '#f59e0b');
            r.setProperty('--cor-fundo-1', '#78350f');
            r.setProperty('--cor-fundo-2', '#92400e');
            r.setProperty('--cor-fundo-3', '#b45309');
            break;
        case 'escuro':
            r.setProperty('--cor-primaria', '#9ca3af');
            r.setProperty('--cor-secundaria', '#6b7280');
            r.setProperty('--cor-fundo-1', '#0f0f0f');
            r.setProperty('--cor-fundo-2', '#1f1f1f');
            r.setProperty('--cor-fundo-3', '#2d2d2d');
            break;
    }
    fundo.style.background = `linear-gradient(135deg, var(--cor-fundo-1) 0%, var(--cor-fundo-2) 50%, var(--cor-fundo-3) 100%)`;
    localStorage.setItem('temaCor', cor);
}

// Carregar tema salvo
const temaSalvo = localStorage.getItem('temaCor');
if (temaSalvo) aplicarTema(temaSalvo);

// Banco de Perguntas Expandido
const perguntas = {
    gerais: [
        { pergunta: "Quantos dias tem um ano bissexto?", respostas: ["366", "365", "364", "367"], correta: 0 },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Marte", "Terra"], correta: 0 },
        { pergunta: "Quantas cores tem a bandeira do Brasil?", respostas: ["4", "5", "6", "3"], correta: 0 },
        { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Leonardo da Vinci", "Michelangelo", "Van Gogh", "Picasso"], correta: 0 },
        { pergunta: "Quantos meses têm 28 dias?", respostas: ["Todos", "1", "2", "Nenhum"], correta: 0 },
        { pergunta: "Qual é o símbolo químico do ouro?", respostas: ["Au", "Ag", "Fe", "O"], correta: 0 },
        { pergunta: "Quantos segundos tem 1 hora?", respostas: ["3600", "60", "600", "360"], correta: 0 },
        { pergunta: "Qual é o número de ouro?", respostas: ["1,618", "3,141", "2,718", "1,414"], correta: 0 },
        { pergunta: "O que significa a sigla 'ONU'?", respostas: ["Organização das Nações Unidas", "Ordem das Nações Unidas", "Organização dos Núcleos Unidos", "Operação Nacional Unida"], correta: 0 },
        { pergunta: "Quantos lados tem um hexágono?", respostas: ["6", "5", "7", "8"], correta: 0 }
    ],
    historia: [
        { pergunta: "Em que ano o Brasil foi descoberto?", respostas: ["1500", "1492", "1600", "1822"], correta: 0 },
        { pergunta: "Quem foi o primeiro imperador do Brasil?", respostas: ["D. Pedro I", "D. João VI", "D. Pedro II", "Tiradentes"], correta: 0 },
        { pergunta: "A Segunda Guerra Mundial terminou em:", respostas: ["1945", "1939", "1914", "1918"], correta: 0 },
        { pergunta: "Qual civilização construiu Machu Picchu?", respostas: ["Os Incas", "Os Maias", "Os Astecas", "Os Egípcios"], correta: 0 },
        { pergunta: "A Revolução Francesa começou em:", respostas: ["1789", "1776", "1800", "1848"], correta: 0 },
        { pergunta: "Quem descobriu o caminho marítimo para o Brasil?", respostas: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Dom Henrique"], correta: 0 },
        { pergunta: "Em que ano a República foi proclamada no Brasil?", respostas: ["1889", "1822", "1850", "1900"], correta: 0 },
        { pergunta: "Quem foi o primeiro presidente do Brasil?", respostas: ["Marechal Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "Juscelino Kubitschek"], correta: 0 },
        { pergunta: "A Primeira Guerra Mundial começou em que ano?", respostas: ["1914", "1939", "1918", "1945"], correta: 0 },
        { pergunta: "Qual muro dividiu uma cidade alemã por décadas?", respostas: ["Muro de Berlim", "Muro de Paris", "Muro de Roma", "Muro de Londres"], correta: 0 }
    ],
    ciencias: [
        { pergunta: "Qual é o gás que as plantas usam para respirar de dia?", respostas: ["Gás Carbônico", "Oxigênio", "Nitrogênio", "Hidrogênio"], correta: 0 },
        { pergunta: "A água é composta por quais elementos?", respostas: ["Hidrogênio e Oxigênio", "Oxigênio e Carbono", "Nitrogênio e Hidrogênio", "Carbono e Ferro"], correta: 0 },
        { pergunta: "Qual é o planeta mais próximo do Sol?", respostas: ["Mercúrio", "Vênus", "Terra", "Marte"], correta: 0 },
        { pergunta: "O coração humano tem quantas câmaras?", respostas: ["4", "2", "3", "5"], correta: 0 },
        { pergunta: "A fotossíntese acontece em qual parte da planta?", respostas: ["Folhas", "Raiz", "Caule", "Flor"], correta: 0 },
        { pergunta: "Qual é a camada de proteção da Terra contra raios solares?", respostas: ["Camada de Ozônio", "Núcleo", "Crosta", "Magnetosfera"], correta: 0 },
        { pergunta: "Quantos ossos tem o corpo humano adulto?", respostas: ["206", "210", "305", "198"], correta: 0 },
        { pergunta: "Qual é o maior órgão do corpo humano?", respostas: ["Pele", "Fígado", "Coração", "Cérebro"], correta: 0 },
        { pergunta: "A gravidade foi explicada por qual cientista?", respostas: ["Isaac Newton", "Einstein", "Darwin", "Galileu"], correta: 0 },
        { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", respostas: ["Marte", "Vênus", "Júpiter", "Saturno"], correta: 0 }
    ],
    geografia: [
        { pergunta: "Qual é o maior país do mundo em área?", respostas: ["Rússia", "Brasil", "China", "Estados Unidos"], correta: 0 },
        { pergunta: "O rio Amazonas fica em qual continente?", respostas: ["América do Sul", "África", "Ásia", "Europa"], correta: 0 },
        { pergunta: "Qual é a capital do Brasil?", respostas: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], correta: 0 },
        { pergunta: "O deserto do Saara está na:", respostas: ["África", "Ásia", "América", "Europa"], correta: 0 },
        { pergunta: "Quantos oceanos existem?", respostas: ["5", "4", "6", "7"], correta: 0 },
        { pergunta: "Qual é o menor continente do mundo?", respostas: ["Oceania", "América do Sul", "Europa", "Antártida"], correta: 0 },
        { pergunta: "O Monte Everest fica em qual cordilheira?", respostas: ["Himalaia", "Andes", "Alpes", "Atlas"], correta: 0 },
        { pergunta: "Quantos estados tem o Brasil?", respostas: ["26", "25", "27", "28"], correta: 0 },
        { pergunta: "Qual é o maior rio do mundo em volume de água?", respostas: ["Amazonas", "Nilo", "Mississipi", "Tâmisa"], correta: 0 },
        { pergunta: "O Japão é formado principalmente por quantas ilhas grandes?", respostas: ["4", "3", "5", "6"], correta: 0 }
    ],
    esportes: [
        { pergunta: "Quantos jogadores tem uma equipe de futebol em campo?", respostas: ["11", "10", "12", "9"], correta: 0 },
        { pergunta: "Qual país ganhou mais Copas do Mundo?", respostas: ["Brasil", "Alemanha", "Itália", "Argentina"], correta: 0 },
        { pergunta: "O basquete foi criado em qual país?", respostas: ["Estados Unidos", "Brasil", "França", "Inglaterra"], correta: 0 },
        { pergunta: "Quantos anéis tem o símbolo das Olimpíadas?", respostas: ["5", "6", "4", "7"], correta: 0 },
        { pergunta: "No vôlei, quantos pontos valem um ponto comum?", respostas: ["1", "2", "3", "depende"], correta: 0 },
        { pergunta: "Qual é o esporte mais praticado no mundo?", respostas: ["Futebol", "Basquete", "Vôlei", "Natação"], correta: 0 },
        { pergunta: "Quem é considerado o maior jogador de basquete de todos os tempos?", respostas: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"], correta: 0 },
        { pergunta: "Quantas medalhas de ouro o Brasil ganhou nas Olimpíadas até 2024?", respostas: ["39", "25", "50", "15"], correta: 0 },
        { pergunta: "O golfe é jogado em quantos buracos numa partida oficial?", respostas: ["18", "12", "9", "24"], correta: 0 },
        { pergunta: "Qual esporte usa uma raquete e uma peteca?", respostas: ["Badminton", "Tênis", "Tênis de Mesa", "Squash"], correta: 0 }
    ],
    filmes: [
        { pergunta: "Quem é o diretor do filme 'Titanic'?", respostas: ["James Cameron", "Steven Spielberg", "Quentin Tarantino", "Christopher Nolan"], correta: 0 },
        { pergunta: "Qual é o filme mais lucrativo da história?", respostas: ["Avatar", "Vingadores: Ultimato", "Titanic", "O Rei Leão"], correta: 0 },
        { pergunta: "Em que ano foi lançado o primeiro filme do Harry Potter?", respostas: ["2001", "1999", "2003", "2005"], correta: 0 },
        { pergunta: "Qual ator interpretou o Capitão América?", respostas: ["Chris Evans", "Chris Hems
