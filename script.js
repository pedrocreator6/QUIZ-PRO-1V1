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
let sequenciaAtual = 0;
let maiorSequencia = 0;
let perguntaAtualObj = null;

// Power-ups
let powerups = { dica: true, trocar: true, eliminar: true, tempo: true };
let dicaUsada = false;
let respostaEliminada = -1;

// Sistema de Conquistas
const listaConquistas = [
    { id: 'primeira_vitoria', nome: 'Primeira Vitória!', icone: '🏆', desc: 'Vencer sua primeira partida' },
    { id: 'dez_acertos', nome: 'Mestre do Conhecimento', icone: '🧠', desc: 'Acertar 10 perguntas seguidas' },
    { id: 'filmes_5', nome: 'Crítico de Cinema', icone: '🎬', desc: 'Vencer 5 partidas de Filmes' },
    { id: 'series_5', nome: 'Maratonista', icone: '📺', desc: 'Vencer 5 partidas de Séries' },
    { id: 'rapido', nome: 'Relâmpago', icone: '⚡', desc: 'Acertar em menos de 3 segundos' },
    { id: 'perfeito', nome: 'Imbatível', icone: '💯', desc: 'Vencer sem errar nenhuma' },
    { id: 'contra_maquina_dificil', nome: 'Gênio', icone: '🤖', desc: 'Vencer a Máquina no Difícil' },
    { id: 'todas_perguntas', nome: 'Sábio', icone: '📚', desc: 'Responder 100 perguntas no total' },
    { id: 'pontos_100', nome: 'Centurião', icone: '💎', desc: 'Acumular 100 pontos' },
    { id: 'surpresa_vitoria', nome: 'Surpresa!', icone: '🎲', desc: 'Vencer no modo Surpresa' }
];

function getConquistas() {
    return JSON.parse(localStorage.getItem('quizConquistas') || '{}');
}

function salvarConquista(id) {
    const conquistas = getConquistas();
    if (!conquistas[id]) {
        conquistas[id] = true;
        localStorage.setItem('quizConquistas', JSON.stringify(conquistas));
        const nova = listaConquistas.find(c => c.id === id);
        if (nova) {
            document.getElementById('novaConquista').style.display = 'block';
            document.getElementById('nomeConquistaNova').textContent = nova.icone + ' ' + nova.nome;
        }
    }
}

function verificarConquistas(tipo = '') {
    const est = getEstatisticas();
    if (est.vitorias >= 1) salvarConquista('primeira_vitoria');
    if (est.totalAcertos >= 100) salvarConquista('todas_perguntas');
    if (est.pontos >= 100) salvarConquista('pontos_100');
    if (est.vitoriasFilmes >= 5) salvarConquista('filmes_5');
    if (est.vitoriasSeries >= 5) salvarConquista('series_5');
    if (maiorSequencia >= 10) salvarConquista('dez_acertos');
    if (tipo === 'rapido') salvarConquista('rapido');
    if (tipo === 'perfeito') salvarConquista('perfeito');
    if (tipo === 'maquina_dificil') salvarConquista('contra_maquina_dificil');
    if (tipo === 'surpresa') salvarConquista('surpresa_vitoria');
}

// Sistema de Estatísticas
function getEstatisticas() {
    return JSON.parse(localStorage.getItem('quizEstatisticas') || '{"vitorias":0,"derrotas":0,"empates":0,"totalAcertos":0,"totalErros":0,"pontos":0,"vitoriasFilmes":0,"vitoriasSeries":0,"tempoRespostaMedio":0,"partidas":0}');
}

function atualizarEstatisticas(dados) {
    const est = getEstatisticas();
    Object.assign(est, dados);
    localStorage.setItem('quizEstatisticas', JSON.stringify(est));
}

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
            } else if (tipo === 'conquista') {
                [659, 784, 1047, 1319].forEach((f, i) => {
                    const n = a.createOscillator();
                    const gn = a.createGain();
                    n.connect(gn); gn.connect(a.destination);
                    n.frequency.setValueAtTime(f, a.currentTime + i * 0.12);
                    gn.gain.setValueAtTime(0.06, a.currentTime + i * 0.12);
                    gn.gain.exponentialRampToValueAtTime(0.01, a.currentTime + i * 0.12 + 0.25);
                    n.start(a.currentTime + i * 0.12);
                    n.stop(a.currentTime + i * 0.12 + 0.25);
                });
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

// Embaralhar respostas
function embaralharRespostas(pergunta) {
    const respostas = [...pergunta.respostas];
    const corretaTexto = respostas[pergunta.correta];
    for (let i = respostas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [respostas[i], respostas[j]] = [respostas[j], respostas[i]];
    }
    const novaCorreta = respostas.indexOf(corretaTexto);
    return { ...pergunta, respostas, correta: novaCorreta };
}

// Pegar pergunta ALEATÓRIA sem repetir
function pegarPerguntaAleatoria(tema) {
    let lista;
    if (tema === 'surpresa') {
        const todos = ['gerais','historia','ciencias','geografia','esportes','filmes','series','tecnologia','animais','musica','mitologia','futebol'];
        lista = [];
        todos.forEach(t => lista.push(...perguntas[t]));
    } else {
        lista = perguntas[tema];
    }
    
    const disponiveis = lista.filter((_, i) => !perguntasUsadas.includes(i));
    if (disponiveis.length === 0) {
        perguntasUsadas = [];
        return pegarPerguntaAleatoria(tema);
    }
    const indiceOriginal = lista.indexOf(disponiveis[Math.floor(Math.random() * disponiveis.length)]);
    perguntasUsadas.push(indiceOriginal);
    return embaralharRespostas(lista[indiceOriginal]);
}

// Banco de Perguntas — MUITO MAIS COMPLETO!
const perguntas = {
    gerais: [
        { pergunta: "Quantos dias tem um ano bissexto?", respostas: ["366", "365", "364", "367"], correta: 0, dica: "É um dia a mais que o ano comum" },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Marte", "Terra"], correta: 0, dica: "É o gigante gasoso" },
        { pergunta: "Quantas cores tem a bandeira do Brasil?", respostas: ["4", "5", "6", "3"], correta: 0, dica: "Verde, amarelo, azul, branco" },
        { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Leonardo da Vinci", "Michelangelo", "Van Gogh", "Picasso"], correta: 0, dica: "Também era inventor" },
        { pergunta: "Quantos meses têm 28 dias?", respostas: ["Todos", "1", "2", "Nenhum"], correta: 0, dica: "Pense bem..." },
        { pergunta: "Qual é o símbolo químico do ouro?", respostas: ["Au", "Ag", "Fe", "O"], correta: 0, dica: "Vem do latim 'aurum'" },
        { pergunta: "Quantos segundos tem 1 hora?", respostas: ["3600", "60", "600", "360"], correta: 0, dica: "60×60" },
        { pergunta: "O que significa a sigla 'ONU'?", respostas: ["Organização das Nações Unidas", "Ordem das Nações Unidas", "Organização dos Núcleos Unidos", "Operação Nacional Unida"], correta: 0 },
        { pergunta: "Quantos lados tem um hexágono?", respostas: ["6", "5", "7", "8"], correta: 0, dica: "Hexa = seis" },
        { pergunta: "Qual é o continente maior do mundo?", respostas: ["Ásia", "América", "África", "Europa"], correta: 0 },
        { pergunta: "Quantos graus tem um ângulo reto?", respostas: ["90°", "180°", "45°", "360°"], correta: 0 },
        { pergunta: "Qual é o metal mais abundante na crosta terrestre?", respostas: ["Alumínio", "Ferro", "Cobre", "Ouro"], correta: 0 },
        { pergunta: "Em qual país fica a Torre Eiffel?", respostas: ["França", "Itália", "Inglaterra", "Espanha"], correta: 0 },
        { pergunta: "Quantas pernas tem uma aranha?", respostas: ["8", "6", "4", "10"], correta: 0 },
        { pergunta: "Qual é o número romano para 10?", respostas: ["X", "V", "L", "C"], correta: 0 },
        { pergunta: "Qual é o planeta mais quente do Sistema Solar?", respostas: ["Vênus", "Mercúrio", "Marte", "Júpiter"], correta: 0 },
        { pergunta: "Quantos meses têm 30 dias?", respostas: ["11", "10", "12", "9"], correta: 0 },
        { pergunta: "Qual é o maior oceano do mundo?", respostas: ["Pacífico", "Atlântico", "Índico", "Ártico"], correta: 0 },
        { pergunta: "Quantos dentes tem um adulto saudável?", respostas: ["32", "28", "30", "36"], correta: 0 },
        { pergunta: "Qual é a moeda oficial do Brasil?", respostas: ["Real", "Cruzeiro", "Dólar", "Peso"], correta: 0 }
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
        { pergunta: "Qual muro dividiu uma cidade alemã por décadas?", respostas: ["Muro de Berlim", "Muro de Paris", "Muro de Roma", "Muro de Londres"], correta: 0 },
        { pergunta: "Quem foi a primeira mulher a governar o Brasil?", respostas: ["Dilma Rousseff", "Marina Silva", "Luiza Erundina", "Fernanda Montenegro"], correta: 0 },
        { pergunta: "Em que ano o homem pisou na Lua pela primeira vez?", respostas: ["1969", "1959", "1979", "1989"], correta: 0 },
        { pergunta: "Quem escreveu 'Os Lusíadas'?", respostas: ["Camões", "Fernando Pessoa", "Machado de Assis", "Eça de Queirós"], correta: 0 },
        { pergunta: "Qual era o nome da cidade perdida dos Incas?", respostas: ["Machu Picchu", "Cusco", "Lima", "Tiahuanaco"], correta: 0 },
        { pergunta: "Quantos anos durou a escravidão no Brasil aproximadamente?", respostas: ["300 anos", "100 anos", "500 anos", "200 anos"], correta: 0 },
        { pergunta: "Quem proclamou a Independência do Brasil?", respostas: ["D. Pedro I", "D. João VI", "Tiradentes", "Getúlio Vargas"], correta: 0 },
        { pergunta: "Em que ano ocorreu a Revolução de 1930?", respostas: ["1930", "1945", "1922", "1954"], correta: 0 },
        { pergunta: "Qual cidade foi a primeira capital do Brasil?", respostas: ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"], correta: 0 },
        { pergunta: "Quem foi o responsável pela construção de Brasília?", respostas: ["Juscelino Kubitschek", "Getúlio Vargas", "D. Pedro II", "Tancredo Neves"], correta: 0 },
        { pergunta: "A Grande Depressão começou em que ano?", respostas: ["1929", "1914", "1945", "1939"], correta: 0 }
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
        { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", respostas: ["Marte", "Vênus", "Júpiter", "Saturno"], correta: 0 },
        { pergunta: "O sangue de que cor é quando circula no corpo?", respostas: ["Vermelho", "Azul", "Verde", "Roxo"], correta: 0 },
        { pergunta: "Quantos cromossomos tem o ser humano?", respostas: ["46", "48", "44", "23"], correta: 0 },
        { pergunta: "Qual é a estrela mais próxima da Terra?", respostas: ["Sol", "Lua", "Alfa Centauri", "Sírius"], correta: 0 },
        { pergunta: "O que as plantas liberam durante a fotossíntese?", respostas: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Hidrogênio"], correta: 0 },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Urano", "Netuno"], correta: 0 },
        { pergunta: "Quantos pulmões temos?", respostas: ["2", "1", "3", "4"], correta: 0 },
        { pergunta: "Qual é o elemento químico mais abundante no universo?", respostas: ["Hidrogênio", "Oxigênio", "Hélio", "Carbono"], correta: 0 },
        { pergunta: "O cérebro pesa aproximadamente quanto num adulto?", respostas: ["1,4 kg", "2 kg", "500g", "3 kg"], correta: 0 },
        { pergunta: "Qual órgão bombeia o sangue?", respostas: ["Coração", "Cérebro", "Pulmão", "Fígado"], correta: 0 },
        { pergunta: "Quantos dentes tem uma criança em média?", respostas: ["20", "24", "28", "32"], correta: 0 }
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
        { pergunta: "O Japão é formado principalmente por quantas ilhas grandes?", respostas: ["4", "3", "5", "6"], correta: 0 },
        { pergunta: "Qual é a capital da França?", respostas: ["Paris", "Londres", "Roma", "Berlim"], correta: 0 },
        { pergunta: "Em qual continente fica o Egito?", respostas: ["África", "Ásia", "Europa", "América"], correta: 0 },
        { pergunta: "Qual é o país com maior população do mundo?", respostas: ["Índia", "China", "Estados Unidos", "Brasil"], correta: 0 },
        { pergunta: "Quantos continentes existem?", respostas: ["6", "5", "7", "8"], correta: 0 },
        { pergunta: "Qual é a montanha mais alta do mundo?", respostas: ["Everest", "K2", "Aconcágua", "Kilimanjaro"], correta: 0 },
        { pergunta: "O Brasil faz fronteira com quantos países?", respostas: ["10", "8", "12", "15"], correta: 0 },
        { pergunta: "Qual é a capital da Austrália?", respostas: ["Camberra", "Sydney", "Melbourne", "Brisbane"], correta: 0 },
        { pergunta: "Qual é o maior deserto do mundo?", respostas: ["Saara", "Gobi", "Atacama", "Kalahari"], correta: 0 },
        { pergunta: "Em qual país fica a Torre de Pisa?", respostas: ["Itália", "França", "Espanha", "Grécia"], correta: 0 },
        { pergunta: "Qual
