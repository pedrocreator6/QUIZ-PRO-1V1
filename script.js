const firebaseConfig = {
  apiKey: "AIzaSyCycmTLR2oXEIr7yMc0S09HIG4sb8w4o2s",
  authDomain: "quiz-1v1-pro.firebaseapp.com",
  databaseURL: "https://quiz-1v1-pro-default-rtdb.firebaseio.com",
  projectId: "quiz-1v1-pro",
  storageBucket: "quiz-1v1-pro.appspot.com",
  messagingSenderId: "154693950784",
  appId: "1:154693950784:web:68098fc6655c1f425feea5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
// ================= PERGUNTAS =================
const perguntas = {
    gerais: [
        { p: "Quantos dias tem um ano bissexto?", r: ["366", "365", "364", "367"], c: 0 },
        { p: "Qual é o maior planeta do Sistema Solar?", r: ["Júpiter", "Saturno", "Marte", "Terra"], c: 0 },
        { p: "Quantas cores tem a bandeira do Brasil?", r: ["4", "5", "6", "3"], c: 0 },
        { p: "Quem pintou a Mona Lisa?", r: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Michelangelo"], c: 0 },
        { p: "Quantos meses têm 28 dias?", r: ["Todos", "1", "2", "Nenhum"], c: 0 },
        { p: "Qual é o símbolo químico do ouro?", r: ["Au", "Ag", "Fe", "O"], c: 0 },
        { p: "Quantos segundos tem 1 hora?", r: ["3600", "60", "600", "360"], c: 0 },
        { p: "Quantos lados tem um hexágono?", r: ["6", "5", "7", "8"], c: 0 },
        { p: "Qual é o maior continente?", r: ["Ásia", "América", "África", "Europa"], c: 0 },
        { p: "Quantos planetas fazem parte do sistema solar?", r: ["8", "7", "9", "10"], c: 0 },
        { p: "Qual é a capital do Brasil?", r: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], c: 0 },
        { p: "Quantos oceanos existem?", r: ["5", "4", "6", "7"], c: 0 }
    ],
    filmes: [
        { p: "Qual filme tem uma menina que controla o gelo?", r: ["Frozen", "Moana", "Valente", "A Bela e a Fera"], c: 0 },
        { p: "'O Senhor dos Anéis' se passa em qual mundo?", r: ["Terra Média", "Nárnia", "Westeros", "Hogwarts"], c: 0 },
        { p: "Em 'Star Wars', qual é a arma dos Jedi?", r: ["Sabre de Luz", "Espada", "Pistola", "Escudo"], c: 0 },
        { p: "Quem é o super-herói com o martelo Mjolnir?", r: ["Thor", "Hulk", "Homem de Ferro", "Capitão América"], c: 0 },
        { p: "No filme 'O Rei Leão', quem é o vilão irmão de Mufasa?", r: ["Scar", "Simba", "Timão", "Cobra"], c: 0 }
    ],
    esportes: [
        { p: "Quantos jogadores tem um time de futebol em campo?", r: ["11", "10", "12", "9"], c: 0 },
        { p: "Qual país tem mais títulos de Copa do Mundo?", r: ["Brasil", "Alemanha", "Itália", "Argentina"], c: 0 },
        { p: "Quantos minutos dura um jogo de futebol regulamentar?", r: ["90 min", "80 min", "100 min", "120 min"], c: 0 },
        { p: "Nos Jogos Olímpicos, quantos anéis há no símbolo?", r: ["5", "6", "4", "7"], c: 0 },
        { p: "Quem é considerado o Rei do Futebol?", r: ["Pelé", "Maradona", "Messi", "Cristiano Ronaldo"], c: 0 }
    ],
    musica: [
        { p: "Quem é conhecido como o Rei do Pop?", r: ["Michael Jackson", "Elvis Presley", "Justin Bieber", "Bruno Mars"], c: 0 },
        { p: "Qual banda tinha Freddie Mercury como vocalista?", r: ["Queen", "The Beatles", "Led Zeppelin", "AC/DC"], c: 0 },
        { p: "O violão tem quantas cordas?", r: ["6", "4", "8", "12"], c: 0 },
        { p: "Quem cantou 'Hey Jude'?", r: ["The Beatles", "Queen", "Rolling Stones", "U2"], c: 0 },
        { p: "Qual instrumento tem teclas e martelos internos?", r: ["Piano", "Violão", "Bateria", "Saxofone"], c: 0 }
    ],
    curiosidades: [
        { p: "Quantos ossos tem um adulto humano?", r: ["206", "300", "150", "250"], c: 0 },
        { p: "Qual é o maior oceano do mundo?", r: ["Pacífico", "Atlântico", "Índico", "Ártico"], c: 0 },
        { p: "Qual animal tem impressão digital igual à humana?", r: ["Coala", "Macaco", "Gorila", "Cachorro"], c: 0 },
        { p: "O sol é formado principalmente por qual gás?", r: ["Hidrogênio", "Oxigênio", "Hélio", "Nitrogênio"], c: 0 },
        { p: "Qual é o único mamífero que pode voar?", r: ["Morcego", "Esquilo-voador", "Ave", "Raposa"], c: 0 }
    ]
};

// ================= VARIÁVEIS GLOBAIS =================
let nomeJogador = '';
let codigoSala = '';
let ehDono = false;
let salaRef = null;
let jogadorId = '';
let escutaSala = null;
let escutaJogo = null;
let cronometroInterval = null;
let passouParaProxima = false; // Evita múltiplas chamadas

// ================= FUNÇÕES =================
function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}

function gerarCodigo() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function embaralhar(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function criarSala() {
    nomeJogador = document.getElementById('nomeCriador').value.trim();
    if (!nomeJogador) { alert('Digite seu nome!'); return; }
    
    codigoSala = gerarCodigo();
    ehDono = true;
    jogadorId = 'p1';
    salaRef = db.ref('salas/' + codigoSala);
    
    salaRef.set({
        criador: nomeJogador,
        p1: { nome: nomeJogador, pronto: true },
        p2: null,
        qtdPerguntas: 10,
        tempoPorPergunta: 20,
        tema: 'gerais',
        status: 'esperando',
        perguntaAtual: 0,
        placar: { p1: 0, p2: 0 },
        acertos: { p1: 0, p2: 0 }, // Contador de acertos
        respostas: {}
    });
    
    document.getElementById('codigoExibido').textContent = codigoSala;
    document.getElementById('configDono').style.display = 'block';
    mostrarTela('tela-espera');
    
    escutaSala = salaRef.on('value', snapshot => {
        const dados = snapshot.val();
        if (!dados) return;
        
        if (dados.p2) {
            document.getElementById('statusSala').textContent = `${dados.p2.nome} entrou!`;
            document.getElementById('btnIniciarPartida').style.display = 'block';
        }
        
        if (dados.status === 'jogando') {
            escutaSala.off();
            escutarJogo();
        }
        if (dados.status === 'finalizado') {
            escutaSala.off();
            escutarJogo();
        }
    });
}

function entrarSala() {
    nomeJogador = document.getElementById('nomeJogador').value.trim();
    codigoSala = document.getElementById('codigoSalaEntrada').value.trim().toUpperCase();
    
    if (!nomeJogador || !codigoSala) { alert('Preencha tudo!'); return; }
    
    salaRef = db.ref('salas/' + codigoSala);
    jogadorId = 'p2';
    
    salaRef.once('value').then(snapshot => {
        const dados = snapshot.val();
        if (!dados) { alert('Sala não encontrada!'); return; }
        if (dados.p2) { alert('Sala já está cheia!'); return; }
        
        ehDono = false;
        salaRef.update({
            p2: { nome: nomeJogador, pronto: true }
        });
        
        document.getElementById('codigoExibido').textContent = codigoSala;
        document.getElementById('statusSala').textContent = `Aguardando ${dados.criador} iniciar...`;
        mostrarTela('tela-espera');
        
        escutaSala = salaRef.on('value', snap => {
            const d = snap.val();
            if (!d) return;
            if (d.status === 'jogando' || d.status === 'finalizado') {
                escutaSala.off();
                escutarJogo();
            }
        });
    });
}

function definirQtd(qtd) {
    document.querySelectorAll('.btn-q').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
    if (salaRef) salaRef.update({ qtdPerguntas: qtd });
}

function definirTempo(t) {
    document.querySelectorAll('.btn-t').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
    if (salaRef) salaRef.update({ tempoPorPergunta: t });
}

function definirTema(tema) {
    document.querySelectorAll('.btn-tema-sel').forEach(b => b.classList.remove('ativo'));
    event.target.classList.add('ativo');
    if (salaRef) salaRef.update({ tema: tema });
}

function iniciarPartida() {
    if (!confirm('Iniciar o jogo?')) return;
    
    salaRef.once('value').then(snap => {
        const d = snap.val();
        const banco = perguntas[d.tema];
        const selecionadas = embaralhar([...banco]).slice(0, d.qtdPerguntas);
        
        salaRef.update({
            status: 'jogando',
            perguntas: selecionadas,
            perguntaAtual: 0,
            placar: { p1: 0, p2: 0 },
            acertos: { p1: 0, p2: 0 },
            respostas: {},
            tempoAtual: d.tempoPorPergunta,
            perguntaCarregada: true
        });
        passouParaProxima = false;
    });
}

function escutarJogo() {
    escutaJogo = salaRef.on('value', snapshot => {
        const d = snapshot.val();
        if (!d) return;
        
        // Atualiza nomes e placar
        document.getElementById('nomeP1').textContent = d.p1.nome;
        document.getElementById('nomeP2').textContent = d.p2.nome;
        document.getElementById('pontosP1').textContent = d.placar.p1;
        document.getElementById('pontosP2').textContent = d.placar.p2;
        
        if (d.status === 'finalizado') {
            clearInterval(cronometroInterval);
            cronometroInterval = null;
            mostrarTela('tela-resultado');
            exibirResultadoFinal(d);
            return;
        }
        
        if (!d.perguntas || d.perguntaAtual >= d.perguntas.length) return;
        
        const pergunta = d.perguntas[d.perguntaAtual];
        const jaRespondi = d.respostas && d.respostas[jogadorId] !== undefined;
        const todosResponderam = d.respostas && d.respostas.p1 !== undefined && d.respostas.p2 !== undefined;
        
        mostrarTela('tela-jogo');
        document.getElementById('perguntaTexto').textContent = pergunta.p;
        document.getElementById('cronometro').textContent = d.tempoAtual;
        document.getElementById('cronometro').classList.toggle('urgente', d.tempoAtual <= 5);
        
        const container = document.getElementById('botoesRespostas');
        
        // Prepara respostas embaralhadas e salva índice correto
        const respostasEmbaralhadas = embaralhar([...pergunta.r]);
        const indiceCorreta = respostasEmbaralhadas.indexOf(pergunta.r[pergunta.c]);
        
        // Se ninguém respondeu ainda e eu não respondi
        if (!jaRespondi && !todosResponderam) {
            container.innerHTML = '';
            respostasEmbaralhadas.forEach((texto, i) => {
                const btn = document.createElement('button');
                btn.className = 'btn-resposta';
                btn.textContent = `${String.fromCharCode(65+i)}) ${texto}`;
                btn.onclick = () => responder(i, indiceCorreta);
                container.appendChild(btn);
            });
            
            // Inicia cronômetro só no dono
            if (ehDono && !cronometroInterval) {
                iniciarCronometro(d.tempoPorPergunta);
            }
        } else {
            // Já respondi ou os dois responderam → mostra cores
            container.innerHTML = '';
            
            respostasEmbaralhadas.forEach((texto, i) => {
                const btn = document.createElement('button');
                btn.className = 'btn-resposta';
                btn.textContent = `${String.fromCharCode(65+i)}) ${texto}`;
                btn.disabled = true;
                
                // CORRETA SEMPRE VERDE nos dois
                if (i === indiceCorreta) {
                    btn.classList.add('correta');
                }
                // A ERRADA que EU escolhi fica VERMELHA (só a minha)
                else if (i === d.respostas[jogadorId] && d.respostas[jogadorId] !== indiceCorreta) {
                    btn.classList.add('errada');
                }
                
                container.appendChild(btn);
            });
            
            // Se os dois responderam, passa para próxima pergunta — UMA VEZ SÓ
            if (ehDono && todosResponderam && !passouParaProxima) {
                passouParaProxima = true; // BLOQUEIA REPETIÇÃO
                clearInterval(cronometroInterval);
                cronometroInterval = null;
                
                setTimeout(() => {
                    proximaPergunta(d);
                }, 1500);
            }
        }
    });
}

function iniciarCronometro(tempoInicial) {
    let tempo = tempoInicial;
    clearInterval(cronometroInterval);
    
    cronometroInterval = setInterval(() => {
        tempo--;
        salaRef.update({ tempoAtual: tempo });
        
        if (tempo <= 0) {
            clearInterval(cronometroInterval);
            cronometroInterval = null;
            // Tempo esgotado → resposta vazia
            salaRef.once('value').then(snap => {
                const d = snap.val();
                const novasRespostas = { ...d.respostas };
                if (novasRespostas.p1 === undefined) novasRespostas.p1 = null;
                if (novasRespostas.p2 === undefined) novasRespostas.p2 = null;
                
                salaRef.update({ respostas: novasRespostas });
            });
        }
    }, 1000);
}

function responder(indiceEscolhido, indiceCorreta) {
    salaRef.once('value').then(snap => {
        const d = snap.val();
        if (!d || !d.respostas) return;
        if (d.respostas[jogadorId] !== undefined) return; // Já respondi — ignora
        
        // ✅ 1 PONTO + 1 ACERTO por resposta correta
        const acertou = indiceEscolhido === indiceCorreta;
        const ganhouPonto = acertou ? 1 : 0;
        
        const novoPlacar = { ...d.placar };
        novoPlacar[jogadorId] = (novoPlacar[jogadorId] || 0) + ganhouPonto;
        
        const novosAcertos = { ...d.acertos };
        novosAcertos[jogadorId] = (novosAcertos[jogadorId] || 0) + ganhouPonto;
        
        const novasRespostas = { ...d.respostas };
        novasRespostas[jogadorId] = indiceEscolhido;
        
        salaRef.update({
            placar: novoPlacar,
            acertos: novosAcertos,
            respostas: novasRespostas
        });
    });
}

function proximaPergunta(dadosAtuais) {
    const proximoIndice = dadosAtuais.perguntaAtual + 1;
    
    if (proximoIndice >= dadosAtuais.perguntas.length) {
        // Acabou o jogo — finaliza
        salaRef.update({ status: 'finalizado' });
        return;
    }
    
    // Próxima pergunta — reseta flag de proteção
    salaRef.update({
        perguntaAtual: proximoIndice,
        respostas: {},
        tempoAtual: dadosAtuais.tempoPorPergunta
    });
    passouParaProxima = false; // Libera para a próxima rodada
}

function exibirResultadoFinal(d) {
    const p1Nome = d.p1.nome;
    const p2Nome = d.p2.nome;
    const p1Pontos = d.placar.p1;
    const p2Pontos = d.placar.p2;
    const p1Acertos = d.acertos.p1 || 0;
    const p2Acertos = d.acertos.p2 || 0;
    const totalPerguntas = d.perguntas.length;
    
    // Define posições
    let primeiroNome, primeiroPontos, primeiroAcertos;
    let segundoNome, segundoPontos, segundoAcertos;
    
    if (p1Pontos > p2Pontos) {
        primeiroNome = p1Nome; primeiroPontos = p1Pontos; primeiroAcertos = p1Acertos;
        segundoNome = p2Nome; segundoPontos = p2Pontos; segundoAcertos = p2Acertos;
    } else if (p2Pontos > p1Pontos) {
        primeiroNome = p2Nome; primeiroPontos = p2Pontos; primeiroAcertos = p2Acertos;
        segundoNome = p1Nome; segundoPontos = p1Pontos; segundoAcertos = p1Acertos;
    } else {
        // Empate
        primeiroNome = p1Nome; primeiroPontos = p1Pontos; primeiroAcertos = p1Acertos;
        segundoNome = p2Nome; segundoPontos = p2Pontos; segundoAcertos = p2Acertos;
    }
    
    // Texto do título
    if (p1Pontos === p2Pontos) {
        document.getElementById('textoVencedor').innerHTML = '🤝 EMPATE TÉCNICO!';
    } else {
        const vencedor = p1Pontos > p2Pontos ? p1Nome : p2Nome;
        document.getElementById('textoVencedor').innerHTML = `🏆 ${vencedor} VENCEU!`;
    }
    
    // Pódio + Estatísticas
    const container = document.querySelector('.caixa-centro');
    // Remove pódio anterior se existir
    const podioAnterior = document.getElementById('secao-podio');
    if (podioAnterior) podioAnterior.remove();
    
    const podioHTML = `
    <div id="secao-podio" style="margin: 2rem 0;">
        <h3 style="text-align:center; color:var(--cor-primaria); margin-bottom:1.5rem;">🏆 PÓDIO 🏆</h3>
        
        <div style="display:flex; justify-content:center; align-items:flex-end; gap:1rem; margin-bottom:2rem;">
            <!-- SEGUNDO LUGAR -->
            <div style="text-align:center; flex:1; max-width:140px;">
                <div style="font-size:2rem; margin-bottom:0.3rem;">🥈</div>
                <div style="font-weight:bold; color:var(--cor-texto); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${segundoNome}</div>
                <div style="color:var(--cor-primaria); font-size:1.3rem; font-weight:bold;">${segundoPontos} pts</div>
                <div style="color:var(--cor-texto-claro); font-size:0.9rem;">${segundoAcertos}/${totalPerguntas} acertos</div>
                <div style="height:60px; background:linear-gradient(180deg, #9ca3af, #6b7280); margin-top:0.5rem; border-radius:8px 8px 0 0;"></div>
            </div>
            
            <!-- PRIMEIRO LUGAR -->
            <div style="text-align:center; flex:1; max-width:160px; transform:scale(1.1);">
                <div style="font-size:2.5rem; margin-bottom:0.3rem;">🥇</div>
                <div style="font-weight:bold; color:var(--cor-primaria); font-size:1.1rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${primeiroNome}</div>
                <div style="color:var(--cor-primaria); font-size:1.5rem; font-weight:bold;">${primeiroPontos} pts</div>
                <div style="color:var(--cor-texto-claro); font-size:0.9rem;">${primeiroAcertos}/${totalPerguntas} acertos</div>
                <div style="height:90px; background:linear-gradient(180deg, #fcd34d, #f59e0b); margin-top:0.5rem; border-radius:8px 8px 0 0; box-shadow:0 0 15px rgba(245,158,11,0.4);"></div>
            </div>
            
            <!-- Terceiro lugar — escondido, só 2 jogadores -->
            <div style="visibility:hidden; flex:1; max-width:140px;"></div>
        </div>
        
        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:8px; margin-top:1rem;">
            <p style="margin-bottom:0.5rem;"><strong>${p1Nome}:</strong> ${p1Acertos} de ${totalPerguntas} acertadas (${Math.round((p1Acertos/totalPerguntas)*100)}%)</p>
            <p><strong>${p2Nome}:</strong> ${p2Acertos} de ${totalPerguntas} acertadas (${Math.round((p2Acertos/totalPerguntas)*100)}%)</p>
        </div>
    </div>`;
    
    // Insere antes do botão
    const botaoVoltar = container.querySelector('button:last-child');
    botaoVoltar.insertAdjacentHTML('beforebegin', podioHTML);
}

function sairSala() {
    clearInterval(cronometroInterval);
    if (escutaJogo) escutaJogo.off();
    if (escutaSala) escutaSala.off();
    if (salaRef && ehDono) salaRef.remove();
    nomeJogador = '';
    codigoSala = '';
    salaRef = null;
    jogadorId = '';
    ehDono = false;
    cronometroInterval = null;
    passouParaProxima = false;
    mostrarTela('tela-inicio');
}

window.onload = function() {
    mostrarTela('tela-inicio');
};
