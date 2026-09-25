let nomeJogador = '';
let codigoSala = '';
let ehDono = false;
let pontos1 = 0;
let pontos2 = 0;
let indicePergunta = 0;
let temaAtual = '';

const perguntas = {
    gerais: [
        { pergunta: "Quantos dias tem um ano bissexto?", respostas: ["366", "365", "364", "367"], correta: 0 },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", respostas: ["Júpiter", "Saturno", "Marte", "Terra"], correta: 0 },
        { pergunta: "Quantas cores tem a bandeira do Brasil?", respostas: ["4", "5", "6", "3"], correta: 0 },
        { pergunta: "Quem pintou a Mona Lisa?", respostas: ["Leonardo da Vinci", "Michelangelo", "Van Gogh", "Picasso"], correta: 0 },
        { pergunta: "Qual o animal é o símbolo da República Brasileira?", respostas: ["O Leão", "A Águia", "O Gato", "O Cão"], correta: 0 }
    ],
    historia: [
        { pergunta: "Em que ano o Brasil foi descoberto?", respostas: ["1500", "1492", "1600", "1822"], correta: 0 },
        { pergunta: "Quem foi o primeiro imperador do Brasil?", respostas: ["D. Pedro I", "D. João VI", "D. Pedro II", "Tiradentes"], correta: 0 },
        { pergunta: "A Segunda Guerra Mundial terminou em:", respostas: ["1945", "1939", "1914", "1918"], correta: 0 },
        { pergunta: "Qual civilização construiu Machu Picchu?", respostas: ["Os Incas", "Os Maias", "Os Astecas", "Os Egípcios"], correta: 0 },
        { pergunta: "A Revolução Francesa começou em:", respostas: ["1789", "1776", "1800", "1848"], correta: 0 }
    ],
    ciencias: [
        { pergunta: "Qual é o gás que as plantas usam para respirar de dia?", respostas: ["Gás Carbônico", "Oxigênio", "Nitrogênio", "Hidrogênio"], correta: 0 },
        { pergunta: "A água é composta por quais elementos?", respostas: ["Hidrogênio e Oxigênio", "Oxigênio e Carbono", "Nitrogênio e Hidrogênio", "Carbono e Ferro"], correta: 0 },
        { pergunta: "Qual é o planeta mais próximo do Sol?", respostas: ["Mercúrio", "Vênus", "Terra", "Marte"], correta: 0 },
        { pergunta: "O coração humano tem quantas câmaras?", respostas: ["4", "2", "3", "5"], correta: 0 },
        { pergunta: "A fotossíntese acontece em qual parte da planta?", respostas: ["Folhas", "Raiz", "Caule", "Flor"], correta: 0 }
    ],
    geografia: [
        { pergunta: "Qual é o maior país do mundo em área?", respostas: ["Rússia", "Brasil", "China", "Estados Unidos"], correta: 0 },
        { pergunta: "O rio Amazonas fica em qual continente?", respostas: ["América do Sul", "África", "Ásia", "Europa"], correta: 0 },
        { pergunta: "Qual é a capital do Brasil?", respostas: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], correta: 0 },
        { pergunta: "O deserto do Saara está na:", respostas: ["África", "Ásia", "América", "Europa"], correta: 0 },
        { pergunta: "Quantos oceanos existem?", respostas: ["5", "4", "6", "7"], correta: 0 }
    ]
};

function criarSala() {
    nomeJogador = document.getElementById('nomeJogador').value.trim() || "Jogador 1";
    codigoSala = gerarCodigo();
    ehDono = true;
    
    document.getElementById('tela-inicio').style.display = 'none';
    document.getElementById('tela-espera').style.display = 'block';
    document.getElementById('codigoSala').textContent = codigoSala;
    
    setTimeout(() => {
        document.getElementById('statusAguardando').textContent = "✅ Adversário encontrado!";
        setTimeout(() => mostrarTemas(), 1500);
    }, 2000);
}

function entrarSala() {
    nomeJogador = document.getElementById('nomeJogador').value.trim() || "Jogador 2";
    codigoSala = document.getElementById('codigoEntrada').value.trim().toUpperCase();
    
    if (!codigoSala) {
        alert("Digite um código!");
        return;
    }
    
    ehDono = false;
    document.getElementById('tela-inicio').style.display = 'none';
    document.getElementById('tela-espera').style.display = 'block';
    document.getElementById('codigoSala').textContent = codigoSala;
    document.getElementById('statusAguardando').textContent = "Conectando...";
    
    setTimeout(() => {
        document.getElementById('statusAguardando').textContent = "✅ Conectado!";
        setTimeout(() => mostrarTemas(), 1500);
    }, 1500);
}

function gerarCodigo() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cod = "";
    for (let i = 0; i < 6; i++) {
        cod += letras[Math.floor(Math.random() * letras.length)];
    }
    return cod;
}

function mostrarTemas() {
    document.getElementById('tela-espera').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'block';
}

function escolherTema(tema) {
    temaAtual = tema;
    indicePergunta = 0;
    pontos1 = 0;
    pontos2 = 0;
    document.getElementById('tela-jogo').style.display = 'none';
    document.getElementById('telaJogo').style.display = 'block';
    document.getElementById('nome1').textContent = ehDono ? nomeJogador : "Adversário";
    document.getElementById('nome2').textContent = ehDono ? "Adversário" : nomeJogador;
    mostrarPergunta();
}

function mostrarPergunta() {
    const lista = perguntas[temaAtual];
    if (indicePergunta >= lista.length) {
        mostrarResultado();
        return;
    }
    
    const perguntaAtual = lista[indicePergunta];
    document.getElementById('pergunta').textContent = perguntaAtual.pergunta;
    const container = document.getElementById('botoesResposta');
    container.innerHTML = "";
    
    perguntaAtual.respostas.forEach((resp, i) => {
        const btn = document.createElement('button');
        btn.textContent = resp;
        btn.onclick = () => verificarResposta(i, perguntaAtual.correta);
        container.appendChild(btn);
    });
}

function verificarResposta(escolhida, correta) {
    const botoes = document.querySelectorAll('#botoesResposta button');
    
    botoes[correta].classList.add('resposta-correta');
    
    if (escolhida === correta) {
        if (ehDono) pontos1++;
        else pontos2++;
    } else {
        botoes[escolhida].classList.add('resposta-errada');
        if (!ehDono) pontos1++;
        else pontos2++;
    }
    
    document.getElementById('pontos1').textContent = pontos1;
    document.getElementById('pontos2').textContent = pontos2;
    
    setTimeout(() => {
        indicePergunta++;
        mostrarPergunta();
    }, 1500);
}

function mostrarResultado() {
    document.getElementById('telaJogo').style.display = 'none';
    document.getElementById('telaResultado').style.display = 'block';
    
    let mensagem = "";
    const p1 = ehDono ? pontos1 : pontos2;
    const p2 = ehDono ? pontos2 : pontos1;
    
    if (p1 > p2) mensagem = `🎉 ${nomeJogador} venceu! ${p1} x ${p2}`;
    else if (p2 > p1) mensagem = `😢 O adversário venceu! ${p2} x ${p1}`;
    else mensagem = `🤝 Empate! ${p1} x ${p2}`;
    
    document.getElementById('textoResultado').textContent = mensagem;
}

function reiniciar() {
    document.getElementById('telaResultado').style.display = 'none';
    document.getElementById('tela-inicio').style.display = 'block';
    document.getElementById('nomeJogador').value = "";
    document.getElementById('codigoEntrada').value = "";
    pontos1 = 0;
    pontos2 = 0;
    indicePergunta = 0;
    temaAtual = '';
}
