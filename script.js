const perguntas = {
    gerais: [
        { pergunta: "Quantos dias tem um ano bissexto?", respostas: ["366", "365", "364", "367"], correta: 0, dica: "Um dia a mais" },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Marte", "Terra"], correta: 0 },
        { pergunta: "Quantas cores tem a bandeira do Brasil?", respostas: ["4", "5", "6", "3"], correta: 0 },
        { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Michelangelo"], correta: 0 },
        { pergunta: "Quantos meses têm 28 dias?", respostas: ["Todos", "1", "2", "Nenhum"], correta: 0 },
        { pergunta: "Qual é o símbolo do ouro?", respostas: ["Au", "Ag", "Fe", "O"], correta: 0 },
        { pergunta: "Quantos segundos tem 1 hora?", respostas: ["3600", "60", "600", "360"], correta: 0 },
        { pergunta: "O que é ONU?", respostas: ["Organização das Nações Unidas", "Ordem das Nações", "Organização Nuclear", "Operação Nacional"], correta: 0 },
        { pergunta: "Quantos lados tem um hexágono?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Qual o continente maior?", respostas: ["Ásia", "América", "África", "Europa"], correta: 0 },
        { pergunta: "Quantos graus tem um ângulo reto?", respostas: ["90°", "180°", "45°", "360°"], correta: 0 },
        { pergunta: "Qual o metal mais comum na crosta terrestre?", respostas: ["Alumínio", "Ferro", "Cobre", "Ouro"], correta: 0 },
        { pergunta: "Em qual país fica a Torre Eiffel?", respostas: ["França", "Itália", "Inglaterra", "Espanha"], correta: 0 },
        { pergunta: "Quantas pernas tem uma aranha?", respostas: ["8", "6", "4", "10"], correta: 0 },
        { pergunta: "Qual é o número romano para 10?", respostas: ["X", "V", "L", "C"], correta: 0 },
        { pergunta: "Qual planeta é o mais quente?", respostas: ["Vênus", "Mercúrio", "Marte", "Júpiter"], correta: 0 },
        { pergunta: "Quantos meses têm 30 dias?", respostas: ["11", "10", "12", "9"], correta: 0 },
        { pergunta: "Qual o maior oceano?", respostas: ["Pacífico", "Atlântico", "Índico", "Ártico"], correta: 0 },
        { pergunta: "Quantos dentes tem um adulto?", respostas: ["32", "28", "30", "36"], correta: 0 },
        { pergunta: "Qual a moeda do Brasil?", respostas: ["Real", "Cruzeiro", "Dólar", "Peso"], correta: 0 },
        { pergunta: "Quantas letras tem o alfabeto português?", respostas: ["26", "24", "28", "30"], correta: 0 },
        { pergunta: "Quantos anos tem um século?", respostas: ["100", "50", "500", "1000"], correta: 0 }
    ],
    historia: [
        { pergunta: "Em que ano o Brasil foi descoberto?", respostas: ["1500", "1492", "1600", "1822"], correta: 0 },
        { pergunta: "Quem foi o primeiro imperador do Brasil?", respostas: ["D. Pedro I", "D. João VI", "D. Pedro II", "Tiradentes"], correta: 0 },
        { pergunta: "A Segunda Guerra Mundial terminou em:", respostas: ["1945", "1939", "1914", "1918"], correta: 0 },
        { pergunta: "Qual civilização construiu Machu Picchu?", respostas: ["Incas", "Maias", "Astecas", "Egípcios"], correta: 0 },
        { pergunta: "A Revolução Francesa começou em:", respostas: ["1789", "1776", "1800", "1848"], correta: 0 },
        { pergunta: "Quem descobriu o caminho para o Brasil?", respostas: ["Pedro Álvares Cabral", "Colombo", "Vasco da Gama", "Dom Henrique"], correta: 0 },
        { pergunta: "A República foi proclamada em:", respostas: ["1889", "1822", "1850", "1900"], correta: 0 },
        { pergunta: "Primeiro presidente do Brasil?", respostas: ["Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "JK"], correta: 0 },
        { pergunta: "A Primeira Guerra começou em:", respostas: ["1914", "1939", "1918", "1945"], correta: 0 },
        { pergunta: "Qual muro dividiu Berlim?", respostas: ["Muro de Berlim", "Muro de Paris", "Muro de Roma", "Muro de Londres"], correta: 0 },
        { pergunta: "Quem foi Tiradentes?", respostas: ["Herói da Independência", "Primeiro Imperador", "General da Guerra", "Rei de Portugal"], correta: 0 },
        { pergunta: "O Império Romano caiu em qual século?", respostas: ["Século V", "Século I", "Século X", "Século XV"], correta: 0 },
        { pergunta: "Qual país construiu as pirâmides?", respostas: ["Egito", "Grécia", "Roma", "China"], correta: 0 },
        { pergunta: "A Independência do Brasil foi em:", respostas: ["1822", "1500", "1889", "1900"], correta: 0 }
    ],
    ciencias: [
        { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", respostas: ["Marte", "Vênus", "Júpiter", "Saturno"], correta: 0 },
        { pergunta: "O sangue de que cor circula no corpo?", respostas: ["Vermelho", "Azul", "Verde", "Roxo"], correta: 0 },
        { pergunta: "Quantos ossos tem um ser humano adulto?", respostas: ["206", "245", "233", "215"], correta: 0 },
        { pergunta: "Qual é a estrela mais próxima da Terra?", respostas: ["Sol", "Lua", "Alfa Centauri", "Sirius"], correta: 0 },
        { pergunta: "O que as plantas liberam durante a fotossíntese?", respostas: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Hidrogênio"], correta: 0 },
        { pergunta: "Quantos planetas tem o Sistema Solar?", respostas: ["8", "7", "9", "10"], correta: 0 },
        { pergunta: "Qual é o elemento químico mais abundante no universo?", respostas: ["Hidrogênio", "Oxigênio", "Hélio", "Carbono"], correta: 0 },
        { pergunta: "Quantos litros de sangue tem um adulto?", respostas: ["4 a 6 L", "1 a 2 Kg", "2 a 4 Kg", "8 a 10 L"], correta: 0 },
        { pergunta: "Qual órgão bombeia o sangue?", respostas: ["Coração", "Cérebro", "Pulmão", "Fígado"], correta: 0 },
        { pergunta: "Quantos dentes tem uma criança em média?", respostas: ["20", "24", "28", "32"], correta: 0 }
    ],
    geografia: [
        { pergunta: "Qual é o maior país do mundo em área?", respostas: ["Rússia", "Brasil", "Estados Unidos", "China"], correta: 0 },
        { pergunta: "Onde fica o Amazonas?", respostas: ["América do Sul", "África", "Ásia", "Europa"], correta: 0 },
        { pergunta: "Qual é a capital do Brasil?", respostas: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], correta: 0 },
        { pergunta: "O deserto do Saara está em qual continente?", respostas: ["África", "Ásia", "América", "Europa"], correta: 0 },
        { pergunta: "Quantos oceanos existem?", respostas: ["5", "4", "6", "7"], correta: 0 },
        { pergunta: "Qual é o menor continente do mundo?", respostas: ["Oceania", "América do Sul", "Europa", "Antártida"], correta: 0 },
        { pergunta: "O Monte Everest fica em qual cordilheira?", respostas: ["Himalaia", "Andes", "Alpes", "Pirenéus"], correta: 0 },
        { pergunta: "Qual é o maior rio do mundo em volume de água?", respostas: ["Amazonas", "Nilo", "Mississípi", "Tâmisa"], correta: 0 },
        { pergunta: "Qual é a capital da França?", respostas: ["Paris", "Londres", "Roma", "Berlim"], correta: 0 },
        { pergunta: "Em qual continente fica o Egito?", respostas: ["África", "Ásia", "Europa", "América"], correta: 0 },
        { pergunta: "Qual é o país mais populoso do mundo?", respostas: ["Índia", "China", "Estados Unidos", "Brasil"], correta: 0 },
        { pergunta: "Quantos continentes existem?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Qual é a montanha mais alta do mundo?", respostas: ["Everest", "Aconcágua", "Kilimanjaro", "Elbrus"], correta: 0 },
        { pergunta: "O Brasil faz fronteira com quantos países?", respostas: ["10", "8", "12", "15"], correta: 0 },
        { pergunta: "Qual é a capital da Austrália?", respostas: ["Camberra", "Sydney", "Melbourne", "Brisbane"], correta: 0 },
        { pergunta: "Em qual país fica a Torre de Pisa?", respostas: ["Itália", "França", "Espanha", "Grécia"], correta: 0 }
    ],
    esportes: [
        { pergunta: "Quantos jogadores tem uma equipe de futebol em campo?", respostas: ["11", "10", "12", "9"], correta: 0 },
        { pergunta: "Qual é o esporte mais praticado no mundo?", respostas: ["Futebol", "Basquete", "Vôlei", "Tênis"], correta: 0 },
        { pergunta: "Quantos anéis tem o símbolo das Olimpíadas?", respostas: ["5", "6", "4", "7"], correta: 0 },
        { pergunta: "Qual país ganhou mais Copas do Mundo?", respostas: ["Brasil", "Alemanha", "Itália", "Argentina"], correta: 0 },
        { pergunta: "Quantos pontos vale uma cesta de basquete fora da área?", respostas: ["3", "2", "1", "4"], correta: 0 },
        { pergunta: "Qual é o comprimento de uma maratona?", respostas: ["42 km", "40 km", "45 km", "50 km"], correta: 0 },
        { pergunta: "No vôlei, quantos jogadores por equipe em campo?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Quantos gols faz um hat-trick?", respostas: ["3", "2", "4", "5"], correta: 0 },
        { pergunta: "Qual esporte usa raquete e peteca?", respostas: ["Badminton", "Tênis", "Squash", "Tênis de Mesa"], correta: 0 },
        { pergunta: "Quantos minutos dura uma partida de futebol regulamentar?", respostas: ["90 min", "80 min", "100 min", "120 min"], correta: 0 }
    ]
};

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
let tempoPorPergunta = 20;
let tempoRestante = 20;
let cronometro;
let respondiu = false;
let modoJogo = 'amigo';
let dificuldade = 'medio';
let somLigado = true;
let perguntasUsadas = [];
let acertosTotal = 0;
let errosTotal = 0;
let sequenciaAtual = 0;
let maiorSequencia = 0;
let perguntaAtualObj = null;
let nomeAdversario = 'Adversário';

let powerups = { dica: true, trocar: true, eliminar: true, tempo: true };
let dicaUsada = false;
let respostaEliminada = -1;

const listaConquistas = [
    { id: 'primeira_vitoria', nome: 'Primeira Vitória!', icone: '🏆', desc: 'Vencer sua primeira partida' },
    { id: 'dez_acertos', nome: 'Mestre do Conhecimento', icone: '🧠', desc: 'Acertar 10 perguntas seguidas' },
    { id: 'rapido', nome: 'Relâmpago', icone: '⚡', desc: 'Acertar em menos de 3 segundos' },
    { id: 'perfeito', nome: 'Imbatível', icone: '💯', desc: 'Vencer sem errar nenhuma' },
    { id: 'pontos_100', nome: 'Centurião', icone: '💎', desc: 'Acumular 100 pontos' }
];

function getConquistas() { return JSON.parse(localStorage.getItem('quizConquistas') || '{}'); }
function salvarConquista(id) {
    const c = getConquistas();
    if (!c[id]) {
        c[id] = true;
        localStorage.setItem('quizConquistas', JSON.stringify(c));
        const nova = listaConquistas.find(x => x.id === id);
        if (nova) {
            document.getElementById('novaConquista').style.display = 'block';
            document.getElementById('nomeConquistaNova').textContent = nova.icone + ' ' + nova.nome;
        }
    }
}
function verificarConquistas(tipo = '') {
    const est = getEstatisticas();
    if (est.vitorias >= 1) salvarConquista('primeira_vitoria');
    if (est.pontos >= 100) salvarConquista('pontos_100');
    if (maiorSequencia >= 10) salvarConquista('dez_acertos');
    if (tipo === 'rapido') salvarConquista('rapido');
    if (tipo === 'perfeito') salvarConquista('perfeito');
}

function getEstatisticas() {
    return JSON.parse(localStorage.getItem('quizEstatisticas') || '{"vitorias":0,"derrotas":0,"empates":0,"totalAcertos":0,"totalErros":0,"pontos":0,"partidas":0}');
}
function atualizarEstatisticas(dados) {
    const e = getEstatisticas();
    Object.assign(e, dados);
    localStorage.setItem('quizEstatisticas', JSON.stringify(e));
}

function getRanking() { return JSON.parse(localStorage.getItem('quizRanking') || '[]'); }
function salvarRanking(nome, vitoria, empate) {
    let r = getRanking();
    let j = r.find(x => x.nome === nome);
    if (!j) { j = { nome, vitorias: 0, derrotas: 0, empates: 0 }; r.push(j); }
    if (vitoria) j.vitorias++;
    else if (empate) j.empates++;
    else j.derrotas++;
    r.sort((a, b) => (b.vitorias*3 + b.empates) - (a.vitorias*3 + a.empates));
    localStorage.setItem('quizRanking', JSON.stringify(r));
}

const som = {
    tocar(tipo) {
        if (!somLigado) return;
        try {
            const a = new (window.AudioContext || window.webkitAudioContext)();
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
                    n.start(a.currentTime + i * 0.15); n.stop(a.currentTime + i * 0.15 + 0.3);
                });
            }
        } catch (e) {}
    }
};
function alternarSom() {
    somLigado = !somLigado;
    document.getElementById('btnSom').textContent = somLigado ? '🔊 Som: Ligado' : '🔇 Som: Desligado';
}

function aplicarTema(cor) {
    const r = document.documentElement.style;
    const f = document.querySelector('.fundo-animado');
    const temas = {
        azul: ['#4cc9f0','#4361ee','#1a1a2e','#16213e','#0f3460'],
        roxo: ['#a855f7','#6366f1','#2d1b69','#4c1d95','#5b21b6'],
        verde: ['#34d399','#10b981','#064e3b','#065f46','#047857'],
        vermelho: ['#f87171','#ef4444','#7f1d1d','#991b1b','#b91c1c'],
        dourado: ['#fcd34d','#f59e0b','#78350f','#92400e','#b45309'],
        escuro: ['#9ca3af','#6b7280','#0f0f0f','#1f1f1f','#2d2d2d']
    };
    const t = temas[cor];
    r.setProperty('--cor-primaria', t[0]);
    r.setProperty('--cor-secundaria', t[1]);
    r.setProperty('--cor-fundo-1', t[2]);
    r.setProperty('--cor-fundo-2', t[3]);
    r.setProperty('--cor-fundo-3', t[4]);
    if (f) f.style.background = `linear-gradient(135deg, ${t[2]} 0%, ${t[3]} 50%, ${t[4]} 100%)`;
    localStorage.setItem('temaCor', cor);
}
const temaSalvo = localStorage.getItem('temaCor');
if (temaSalvo) aplicarTema(temaSalvo);

function embaralharRespostas(p) {
    const r = [...p.respostas];
    const c = r[p.correta];
    for (let i = r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [r[i], r[j]] = [r[j], r[i]];
    }
    return { ...p, respostas: r, correta: r.indexOf(c) };
}

function pegarPerguntaAleatoria(tema) {
    let lista;
    if (tema === 'surpresa') {
        const todos = Object.keys(perguntas);
        lista = [];
        todos.forEach(t => lista.push(...perguntas[t]));
    } else {
        lista = perguntas[tema];
    }
    const disp = lista.filter((_, i) => !perguntasUsadas.includes(i));
    if (disp.length === 0) { perguntasUsadas = []; return pegarPerguntaAleatoria(tema); }
    const idx = lista.indexOf(disp[Math.floor(Math.random() * disp.length)]);
    perguntasUsadas.push(idx);
    return embaralharRespostas(lista[idx]);
}

function selecionarModo(modo) {
    modoJogo = modo;
    document.getElementById('btnModoAmigo').classList.toggle('ativo', modo === 'amigo');
    document.getElementById('btnModoMaquina').classList.toggle('ativo', modo === 'maquina');
}

function criarSala() {
    nomeJogador = document.getElementById('nomeJogador').value.trim();
    if (!nomeJogador) { alert('Digite seu nome!'); return; }
    codigoSala = Math.random().toString(36).substring(2, 8).toUpperCase();
    ehDono = true;
    mostrarTela('tela-espera');
    document.getElementById('codigoSala').textContent = codigoSala;
    if (modoJogo === 'maquina') {
        adversarioConectado = true;
        nomeAdversario = 'Máquina';
        document.getElementById('statusAguardando').textContent = 'Máquina pronta!';
        document.getElementById('btnIniciarAgora').style.display = 'block';
    }
}

function entrarSala() {
    nomeJogador = document.getElementById('nomeJogadorEntrada').value.trim();
    codigoSala = document.getElementById('codigoEntrada').value.trim().toUpperCase();
    senhaSala = document.getElementById('senhaEntrada').value.trim();
    if (!nomeJogador || !codigoSala) { alert('Preencha tudo!'); return; }
    ehDono = false;
    adversarioConectado = true;
    nomeAdversario = 'Jogador 1';
    irParaConfiguracoes();
}

function irParaConfiguracoes() {
    mostrarTela('tela-config');
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

function confirmarConfig() {
    mostrarTela('tela-temas');
}

function escolherTema(tema) {
    temaAtual = tema;
    perguntasUsadas = [];
    pontos1 = 0;
    pontos2 = 0;
    indicePergunta = 0;
    acertosTotal = 0;
    errosTotal = 0;
    sequenciaAtual = 0;
    maiorSequencia = 0;
    powerups = { dica: true, trocar: true, eliminar: true, tempo: true };
    iniciarJogo();
}

function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(t => t.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function iniciarJogo() {
    mostrarTela('tela-jogo');
    document.getElementById('nome1').textContent = nomeJogador;
    document.getElementById('nome2').textContent = nomeAdversario;
    atualizarPlacar();
    proximaPergunta();
}

function proximaPergunta() {
    if (indicePergunta >= quantidadePerguntas) {
        fimDeJogo();
        return;
    }
    respondiu = false;
    dicaUsada = false;
    respostaEliminada = -1;
    perguntaAtualObj = pegarPerguntaAleatoria(temaAtual);
    document.getElementById('pergunta').textContent = perguntaAtualObj.pergunta;
    document.getElementById('dicaTexto').style.display = 'none';
    document.getElementById('dicaTexto').textContent = '';
    montarBotoesRespostas();
    resetarPowerupsVisuais();
    tempoRestante = tempoPorPergunta;
    atualizarCronometro();
    cronometro = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();
        if (tempoRestante <= 0) {
            clearInterval(cronometro);
            if (!respondiu) tempoEsgotado();
        }
    }, 1000);
    indicePergunta++;
}

function montarBotoesRespostas() {
    const container = document.getElementById('botoesResposta');
    container.innerHTML = '';
    perguntaAtualObj.respostas.forEach((resp, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-resposta';
        btn.textContent = `${String.fromCharCode(65 + i)}) ${resp}`;
        btn.onclick = () => responder(i);
        btn.id = `resposta-${i}`;
        container.appendChild(btn);
    });
}

function atualizarCronometro() {
    const el = document.getElementById('cronometro');
    el.textContent = tempoRestante;
    el.classList.toggle('urgente', tempoRestante <= 5);
}

function responder(indice) {
    if (respondiu) return;
    respondiu = true;
    clearInterval(cronometro);
    const correta = perguntaAtualObj.correta;
    const botoes = document.querySelectorAll('.btn-resposta');
    
    botoes[correta].classList.add('correta');
    if (indice !== correta) {
        botoes[indice].classList.add('errada');
        som.tocar('erro');
        errosTotal++;
        sequenciaAtual = 0;
    } else {
        som.tocar('acerto');
        acertosTotal++;
        sequenciaAtual++;
        if (sequenciaAtual > maiorSequencia) maiorSequencia = sequenciaAtual;
        let pontosGanho = 10;
        if (tempoRestante >= tempoPorPergunta - 3) {
            pontosGanho += 5;
            if (tempoPorPergunta - tempoRestante <= 3) verificarConquistas('rapido');
        }
        if (sequenciaAtual >= 3) pontosGanho += sequenciaAtual * 2;
        pontos1 += pontosGanho;
    }
    botoes.forEach(b => b.disabled = true);
    atualizarPlacar();
    
    setTimeout(() => {
        if (modoJogo === 'maquina') respostaMaquina();
        mostrarResultadoRodada();
    }, 1000);
}

function tempoEsgotado() {
    respondiu = true;
    const botoes = document.querySelectorAll('.btn-resposta');
    botoes[perguntaAtualObj.correta].classList.add('correta');
    errosTotal++;
    sequenciaAtual = 0;
    botoes.forEach(b => b.disabled = true);
    setTimeout(() => {
        if (modoJogo === 'maquina') respostaMaquina();
        mostrarResultadoRodada();
    }, 1000);
}

function respostaMaquina() {
    const acertar = { facil: 0.5, medio: 0.7, dificil: 0.95 }[dificuldade];
    if (Math.random() < acertar) {
        pontos2 += 10;
    }
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('pontos1').textContent = pontos1;
    document.getElementById('pontos2').textContent = pontos2;
}

function mostrarResultadoRodada() {
    mostrarTela('tela-intervalo');
    document.getElementById('resultadoRodada').textContent = 
        pontos1 > pontos2 ? '🎉 Você está na frente!' :
        pontos1 < pontos2 ? '😰 O adversário está na frente!' : '⚡ Empate!';
    document.getElementById('intervalo-nome1').textContent = nomeJogador;
    document.getElementById('intervalo-pontos1').textContent = pontos1;
    document.getElementById('intervalo-nome2').textContent = nomeAdversario;
    document.getElementById('intervalo-pontos2').textContent = pontos2;
    document.getElementById('sequenciaAcertos').textContent = sequenciaAtual >= 3 ? `🔥 ${sequenciaAtual} acertos seguidos!` : '';
    
    let contador = 5;
    document.getElementById('contadorIntervalo').textContent = contador;
    const intervalo = setInterval(() => {
        contador--;
        document.getElementById('contadorIntervalo').textContent = contador;
        if (contador <= 0) {
            clearInterval(intervalo);
            proximaPergunta();
        }
    }, 1000);
}

function usarDica() {
    if (!powerups.dica || dicaUsada) return;
    powerups.dica = false;
    dicaUsada = true;
    document.getElementById('btnDica').disabled = true;
    if (perguntaAtualObj.dica) {
        document.getElementById('dicaTexto').textContent = '💡 ' + perguntaAtualObj.dica;
        document.getElementById('dicaTexto').style.display = 'block';
    } else {
        const erradas = [];
        for (let i = 0; i < perguntaAtualObj.respostas.length; i++) {
            if (i !== perguntaAtualObj.correta) erradas.push(i);
        }
        if (erradas.length > 1) {
            const remover = erradas[Math.floor(Math.random() * erradas.length)];
            const el = document.getElementById(`resposta-${remover}`);
            if (el) el.classList.add('eliminada');
        }
    }
}

function usarTrocar() {
    if (!powerups.trocar) return;
    powerups.trocar = false;
    document.getElementById('btnTrocar').disabled = true;
    clearInterval(cronometro);
    indicePergunta--;
    proximaPergunta();
}

function usarEliminar() {
    if (!powerups.eliminar) return;
    powerups.eliminar = false;
    document.getElementById('btnEliminar').disabled = true;
    const erradas = [];
    for (let i = 0; i < perguntaAtualObj.respostas.length; i++) {
        if (i !== perguntaAtualObj.correta) erradas.push(i);
    }
    if (erradas.length > 0) {
        respostaEliminada = erradas[Math.floor(Math.random() * erradas.length)];
        const el = document.getElementById(`resposta-${respostaEliminada}`);
        if (el) el.classList.add('eliminada');
    }
}

function usarTempo() {
    if (!powerups.tempo) return;
    powerups.tempo = false;
    document.getElementById('btnTempo').disabled = true;
    tempoRestante += 5;
    atualizarCronometro();
}

function resetarPowerupsVisuais() {
    document.getElementById('btnDica').disabled = !powerups.dica;
    document.getElementById('btnTrocar').disabled = !powerups.trocar;
    document.getElementById('btnEliminar').disabled = !powerups.eliminar;
    document.getElementById('btnTempo').disabled = !powerups.tempo;
}

function enviarEmoji(e) {
    document.getElementById('emojiRecebido').textContent = e;
}

function fimDeJogo() {
    clearInterval(cronometro);
    mostrarTela('tela-resultado');
    const venceu = pontos1 > pontos2;
    const empate = pontos1 === pontos2;
    
    if (venceu) {
        som.tocar('vitoria');
        document.getElementById('textoResultado').innerHTML = '🏆 <strong>PARABÉNS! Você VENCEU!</strong>';
        salvarRanking(nomeJogador, true, false);
        if (errosTotal === 0) verificarConquistas('perfeito');
    } else if (empate) {
        document.getElementById('textoResultado').innerHTML = '🤝 <strong>Que empate incrível!</strong>';
        salvarRanking(nomeJogador, false, true);
    } else {
        document.getElementById('textoResultado').innerHTML = '😢 <strong>Quase! Tente novamente!</strong>';
        salvarRanking(nomeJogador, false, false);
    }
    
    const est = getEstatisticas();
    atualizarEstatisticas({
        partidas: est.partidas + 1,
        vitorias: est.vitorias + (venceu ? 1 : 0),
        derrotas: est.derrotas + (!venceu && !empate ? 1 : 0),
        empates: est.empates + (empate ? 1 : 0),
        totalAcertos: est.totalAcertos + acertosTotal,
        totalErros: est.totalErros + errosTotal,
        pontos: est.pontos + pontos1
    });
    
    document.getElementById('estatisticasFinais').innerHTML = `
        <div class="est-linha"><span>Seus Pontos</span><strong>${pontos1}</strong></div>
        <div class="est-linha"><span>Pontos Adversário</span><strong>${pontos2}</strong></div>
        <div class="est-linha"><span>Acertos</span><strong>${acertosTotal}</strong></div>
        <div class="est-linha"><span>Erros</span><strong>${errosTotal}</strong></div>
        <div class="est-linha"><span>Maior Sequência</span><strong>${maiorSequencia}</strong></div>
    `;
    verificarConquistas();
}

function reiniciar() {
    mostrarTela('tela-inicio');
    document.getElementById('nomeJogador').value = '';
    document.getElementById('nomeJogadorEntrada').value = '';
    document.getElementById('codigoEntrada').value = '';
    document.getElementById('senhaEntrada').value = '';
    document.getElementById('novaConquista').style.display = 'none';
}

function abrirRanking() {
    mostrarTela('tela-ranking');
    const r = getRanking();
    document.getElementById('listaRanking').innerHTML = r.length === 0 ? 
        '<p style="text-align:center;color:#999;">Nenhuma partida registrada ainda!</p>' :
        r.map((j, i) => `
            <div style="display:flex;justify-content:space-between;padding:0.5rem;border-bottom:1px solid #333;">
                <span>${i+1}º ${j.nome}</span>
                <span>${j.vitorias}V ${j.empates}E ${j.derrotas}D</span>
            </div>
        `).join('');
}
function fecharRanking() { mostrarTela('tela-inicio'); }

function abrirConquistas() {
    mostrarTela('tela-conquistas');
    const c = getConquistas();
    document.getElementById('gradeConquistas').innerHTML = listaConquistas.map(x => `
        <div class="conquista-card ${c[x.id] ? 'desbloqueada' : 'bloqueada'}">
            <div class="conquista-icone">${x.icone}</div>
            <strong>${x.nome}</strong>
            <p style="font-size:0.8rem;color:#aaa;">${x.desc}</p>
        </div>
    `).join('');
}
function fecharConquistas() { mostrarTela('tela-inicio'); }

function abrirEstatisticas() {
    mostrarTela('tela-estatisticas');
    const e = getEstatisticas();
    document.getElementById('caixaEstatisticas').innerHTML = `
        <div class="est-linha"><span>Partidas Jogadas</span><strong>${e.partidas}</strong></div>
        <div class="est-linha"><span>Vitórias</span><strong style="color:#10b981;">${e.vitorias}</strong></div>
        <div class="est-linha"><span>Derrotas</span><strong style="color:#ef4444;">${e.derrotas}</strong></div>
        <div class="est-linha"><span>Empates</span><strong style="color:#f59e0b;">${e.empates}</strong></div>
        <div class="est-linha"><span>Total de Acertos</span><strong>${e.totalAcertos}</strong></div>
        <div class="est-linha"><span>Pontos Acumulados</span><strong>${e.pontos}</strong></div>
    `;
}
function fecharEstatisticas() { mostrarTela('tela-inicio'); }

function abrirCores() { mostrarTela('tela-cores'); }
function fecharCores() { mostrarTela('tela-inicio'); }

function escolherDificuldade(d) {
    dificuldade = d;
    mostrarTela('tela-temas');
}
