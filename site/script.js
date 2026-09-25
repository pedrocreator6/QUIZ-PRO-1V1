const firebaseConfig = {
  apiKey: "AIzaSyCmTLR2y0XEIr7yMc0S09HIg4sb0h8w4o2s",
  authDomain: "quiz-1v1-pro.firebaseapp.com",
  databaseURL: "https://quiz-1v1-pro-default-rtdb.firebaseio.com",
  projectId: "quiz-1v1-pro",
  storageBucket: "quiz-1v1-pro.firebasestorage.app",
  messagingSenderId: "154693950784",
  appId: "1:154693950784:web:04b0c6318fe59a55feea55",
  measurementId: "G-8Y79PBZCFJ"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let salaId = null;
let meuJogador = null;
let sala = null;
let minhaResposta = null;

const bancoPerguntas = {
  games: [
    { texto: "🎮 Qual é o encanador mais famoso do mundo?", respostas: ["Mario", "Luigi", "Peach", "Bowser"], correta: 0 },
    { texto: "🦔 Quem é o ouriço azul que corre muito rápido?", respostas: ["Knuckles", "Sonic", "Tails", "Shadow"], correta: 1 },
    { texto: "💻 Qual empresa criou o PlayStation?", respostas: ["Microsoft", "Nintendo", "Sony", "Sega"], correta: 2 },
    { texto: "⛏️ Em qual jogo você constrói e sobrevive com blocos?", respostas: ["Fortnite", "Minecraft", "Roblox", "GTA"], correta: 1 },
    { texto: "🏰 Qual série de jogos tem Link e a Princesa Zelda?", respostas: ["Super Mario", "Pokémon", "The Legend of Zelda", "Final Fantasy"], correta: 2 }
  ],
  futebol: [
    { texto: "⚽ Quantos minutos dura uma partida de futebol oficial?", respostas: ["60 min", "75 min", "90 min", "120 min"], correta: 2 },
    { texto: "🏆 Quantas Copas do Mundo o Brasil já ganhou?", respostas: ["4 🏆", "5 🏆🏆", "6 🏆🏆🏆", "7"], correta: 1 },
    { texto: "🥅 O que significa 'hat-trick'?", respostas: ["3 cartões", "3 gols ⚽⚽⚽", "3 faltas", "3 jogadores"], correta: 1 },
    { texto: "👑 Quem é o maior artilheiro da história das Copas?", respostas: ["Pelé", "Ronaldo Fenômeno", "Messi", "Miroslav Klose"], correta: 3 },
    { texto: "🌍 Qual país sediou a primeira Copa do Mundo em 1930?", respostas: ["Brasil 🇧🇷", "Argentina 🇦🇷", "Uruguai 🇺🇾", "Itália 🇮🇹"], correta: 2 }
  ],
  gerais: [
    { texto: "📅 Quantos dias tem um ano bissexto?", respostas: ["365 dias", "366 dias ✨", "364 dias", "367 dias"], correta: 1 },
    { texto: "🪐 Qual é o maior planeta do Sistema Solar?", respostas: ["Terra 🌍", "Marte 🔴", "Júpiter 🟠", "Saturno 💍"], correta: 2 },
    { texto: "🏛️ Qual é a capital do Brasil?", respostas: ["Rio de Janeiro 🌴", "São Paulo 🏙️", "Brasília 🏛️", "Salvador 🌊"], correta: 2 },
    { texto: "🧠 Quantos continentes existem no mundo?", respostas: ["5 🌍", "6 🌎", "7 🌏", "8"], correta: 2 },
    { texto: "💧 A água ferve a quantos graus Celsius?", respostas: ["80°C 🌡️", "90°C 🔥", "100°C 💨", "120°C ☁️"], correta: 2 }
  ],
  historia: [
    { texto: "🇧🇷 Em que ano o Brasil foi descoberto?", respostas: ["1492", "1500 🚢", "1600", "1700"], correta: 1 },
    { texto: "⚔️ Qual muro caiu em 1989?", respostas: ["Muro de Paris", "Muro de Berlim 🧱", "Muro de Roma", "Muro de Londres"], correta: 1 },
    { texto: "👑 Quem foi o primeiro imperador do Brasil?", respostas: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Dom João VI"], correta: 0 },
    { texto: "🌎 Qual foi a primeira civilização da América?", respostas: ["Maias", "Astecas", "Incas", "Olmecas"], correta: 3 },
    { texto: "🚀 Em que ano o homem pisou na Lua?", respostas: ["1959", "1969 🌙", "1979", "1989"], correta: 1 }
  ],
  ciencia: [
    { texto: "🔬 Qual é o símbolo da água?", respostas: ["CO2", "H2O 💧", "O2", "N2"], correta: 1 },
    { texto: "☀️ Qual é a estrela mais próxima da Terra?", respostas: ["Lua 🌙", "Sol ☀️", "Marte 🔴", "Vênus"], correta: 1 },
    { texto: "🧬 Onde fica o DNA nas células?", respostas: ["Mitocôndria", "Núcleo 🧠", "Citoplasma", "Membrana"], correta: 1 },
    { texto: "⚡ Quem descobriu a lei da gravidade?", respostas: ["Einstein", "Newton 🍎", "Tesla", "Edison"], correta: 1 },
    { texto: "🦷 Quantos dentes tem um adulto?", respostas: ["28", "32 🦷", "36", "24"], correta: 1 }
  ],
  entretenimento: [
    { texto: "🎬 Qual filme tem a frase 'Com grandes poderes...'?", respostas: ["Batman", "Homem-Aranha 🕸️", "Super-Homem", "Os Vingadores"], correta: 1 },
    { texto: "🎵 Qual cantora é conhecida como 'Rainha do Pop'?", respostas: ["Beyoncé", "Madonna", "Lady Gaga", "Rihanna"], correta: 1 },
    { texto: "📺 Qual série se passa em Westeros?", respostas: ["The Walking Dead", "Game of Thrones ⚔️", "Stranger Things", "Friends"], correta: 1 },
    { texto: "🎤 Qual grupo é formado por 5 meninos coreanos famosos?", respostas: ["Blackpink", "BTS 💜", "Twice", "Seventeen"], correta: 1 },
    { texto: "🎭 Qual Disney tem uma princesa chamada Moana?", respostas: ["Frozen", "Moana 🌊", "A Bela e a Fera", "Aladdin"], correta: 1 }
  ],
  geografia: [
    { texto: "🌍 Qual é o maior país do mundo?", respostas: ["China", "Estados Unidos", "Brasil 🇧🇷", "Rússia"], correta: 3 },
    { texto: "🏔️ Qual é a montanha mais alta do mundo?", respostas: ["K2", "Monte Evereste ⛰️", "Aconcágua", "Kilimanjaro"], correta: 1 },
    { texto: "🌊 Qual é o maior oceano?", respostas: ["Atlântico", "Pacífico 🌊", "Índico", "Ártico"], correta: 1 },
    { texto: "🏝️ Quantos estados tem o Brasil?", respostas: ["24", "26 + DF 🇧🇷", "28", "30"], correta: 1 },
    { texto: "🌋 Qual país tem formato de bota?", respostas: ["França", "Espanha", "Itália 🇮🇹", "Grécia"], correta: 2 }
  ]
};

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => {
    t.classList.remove("ativa");
    setTimeout(() => t.style.display = "none", 300);
  });
  setTimeout(() => {
    const tela = document.getElementById(id);
    tela.style.display = "block";
    setTimeout(() => tela.classList.add("ativa"), 30);
  }, 300);
}

function confete() {
  const cores = ["#fbbf24", "#3b82f6", "#ec4899", "#10b981", "#8b5cf6"];
  for (let i = 0; i < 30; i++) {
    const particula = document.createElement("div");
    particula.className = "confete";
    particula.style.left = `${Math.random() * 100}%`;
    particula.style.background = cores[Math.floor(Math.random() * cores.length)];
    particula.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(particula);
    setTimeout(() => particula.remove(), 2500);
  }
}

window.criarSala = function() {
  const nome = document.getElementById("nomeJogador").value.trim();
  if (!nome) { alert("✍️ Digite seu nome para começar!"); return; }

  salaId = Math.random().toString(36).substring(2, 8).toUpperCase();
  meuJogador = 1;

  set(ref(db, `salas/${salaId}`), {
    jogador1: { nome, pontos: 0, respondeu: false },
    jogador2: { nome: "", pontos: 0, respondeu: false },
    tema: null,
    perguntas: null,
    perguntaAtual: 0,
    estado: "esperando"
  });

  document.getElementById("codigoSala").textContent = salaId;
  mostrarTela("telaEsperando");
  
  onValue(ref(db, `salas/${salaId}`), (snapshot) => {
    sala = snapshot.val();
    if (!sala) return;
    if (sala.jogador2 && sala.jogador2.nome) {
      document.getElementById("nomeJogador2").textContent = "✅ " + sala.jogador2.nome + " entrou!";
      document.getElementById("statusSala").textContent = "Tudo pronto! Escolha um tema abaixo 👇";
      document.getElementById("areaTema").style.display = "block";
      confete();
    }
    if (sala.estado === "jogando") {
      mostrarTela("telaJogo");
      atualizarPlacar();
      mostrarPerguntaAtual();
    }
    if (sala.estado === "resultado") {
      atualizarPlacar();
    }
    if (sala.estado === "finalizado") {
      mostrarResultadoFinal();
    }
  });
};

window.entrarSala = function() {
  const nome = document.getElementById("nomeJogador").value.trim();
  const codigo = document.getElementById("codigoEntrada").value.trim().toUpperCase();
  
  if (!nome || !codigo) { alert("📝 Preencha seu nome e o código da sala!"); return; }

  get(ref(db, `salas/${codigo}`)).then((snapshot) => {
    if (!snapshot.exists()) { alert("❌ Sala não encontrada! Verifique o código."); return; }
    
    salaId = codigo;
    meuJogador = 2;
    
    update(ref(db, `salas/${salaId}/jogador2`), { nome, pontos: 0, respondeu: false });
    
    mostrarTela("telaEsperando");
    document.getElementById("codigoSala").textContent = salaId;
    document.getElementById("statusSala").textContent = "Aguardando o adversário escolher o tema... ⏳";
    document.getElementById("nomeJogador2").textContent = "✅ Você entrou!";
    confete();
    
    onValue(ref(db, `salas/${salaId}`), (snapshot) => {
      sala = snapshot.val();
      if (!sala) return;
      if (sala.estado === "jogando") {
        mostrarTela("telaJogo");
        atualizarPlacar();
        mostrarPerguntaAtual();
      }
      if (sala.estado === "resultado") {
        atualizarPlacar();
      }
      if (sala.estado === "finalizado") {
        mostrarResultadoFinal();
      }
    });
  });
};

window.escolherTema = function(tema) {
  const perguntas = [...bancoPerguntas[tema]].sort(() => Math.random() - 0.5);
  update(ref(db, `salas/${salaId}`), {
    tema, perguntas, perguntaAtual: 0, estado: "jogando"
  });
  confete();
};

function atualizarPlacar() {
  if (!sala) return;
  const p1 = sala.jogador1?.pontos || 0;
  const p2 = sala.jogador2?.pontos || 0;
  const res1 = sala.jogador1?.respondeu ? "✅" : "⏳";
  const res2 = sala.jogador2?.respondeu ? "✅" : "⏳";
  
  document.getElementById("placar").innerHTML = `
    <div class="jogador-card ${meuJogador === 1 ? 'seu-turno' : ''}">
      <span class="emoji-jogador">🟡 ${res1}</span>
      <span class="nome-jogador">${sala.jogador1?.nome || "Jogador 1"}</span>
      <span class="pontos">${p1} pts</span>
    </div>
    <div class="versus">⚔️</div>
    <div class="jogador-card ${meuJogador === 2 ? 'seu-turno' : ''}">
      <span class="emoji-jogador">🔴 ${res2}</span>
      <span class="nome-jogador">${sala.jogador2?.nome || "Jogador 2"}</span>
      <span class="pontos">${p2} pts</span>
    </div>
  `;
}

function mostrarPerguntaAtual() {
  if (!sala || !sala.perguntas) return;
  const pergunta = sala.perguntas[sala.perguntaAtual];
  if (!pergunta) return;

  minhaResposta = null;

  document.getElementById("perguntaTexto").innerHTML = `
    <span class="progresso">${sala.perguntaAtual + 1} de ${sala.perguntas.length} 📊</span>
    <br>${pergunta.texto}
  `;
  
  const area = document.getElementById("botoesRespostas");
  area.innerHTML = "";
  pergunta.respostas.forEach((resp, i) => {
    const btn = document.createElement("button");
    btn.className = "botao-resposta";
    btn.innerHTML = `<span class="letra">${String.fromCharCode(65 + i)}</span> ${resp}`;
    btn.onclick = () => responder(i, pergunta.correta, btn);
    area.appendChild(btn);
  });
}

async function responder(escolhida, correta, botao) {
  if (minhaResposta !== null) return;

  const botoes = document.querySelectorAll(".botao-resposta");
  botoes.forEach(b => b.disabled = true);

  minhaResposta = escolhida;
  
  if (escolhida === correta) {
    botao.classList.add("acerto");
    confete();
  } else {
    botao.classList.add("erro");
    botoes[correta].classList.add("correta-revelada");
  }

  const jogadorKey = meuJogador === 1 ? "jogador1" : "jogador2";
  const pontosGanhos = escolhida === correta ? 1 : 0;
  const pontosAtuais = sala[jogadorKey]?.pontos || 0;

  await update(ref(db, `salas/${salaId}/${jogadorKey}`), {
    pontos: pontosAtuais + pontosGanhos,
    respondeu: true
  });

  setTimeout(async () => {
    const snap = await get(ref(db, `salas/${salaId}`));
    const dados = snap.val();
    if (!dados) return;
    
    const r1 = dados.jogador1?.respondeu;
    const r2 = dados.jogador2?.respondeu;
    
    if (r1 && r2) {
      await update(ref(db, `salas/${salaId}`), { estado: "resultado" });
      
      setTimeout(async () => {
        const novaPergunta = dados.perguntaAtual + 1;
        if (novaPergunta < dados.perguntas.length) {
          await update(ref(db, `salas/${salaId}`), {
            perguntaAtual: novaPergunta,
            estado: "jogando",
            "jogador1/respondeu": false,
            "jogador2/respondeu": false
          });
        } else {
          await update(ref(db, `salas/${salaId}`), { estado: "finalizado" });
        }
      }, 2500);
    }
  }, 300);
}

function mostrarResultadoFinal() {
  const p1 = sala.jogador1.pontos || 0;
  const p2 = sala.jogador2.pontos || 0;
  let mensagem, emoji;
  
  if (p1 > p2) {
    emoji = meuJogador === 1 ? "🎉🏆" : "😢💔";
    mensagem = `${emoji} ${sala.jogador1.nome} VENCEU!\n\n🟡 ${p1} x ${p2} 🔴`;
  } else if (p2 > p1) {
    emoji = meuJogador === 2 ? "🎉🏆" : "😢💔";
    mensagem = `${emoji} ${sala.jogador2.nome} VENCEU!\n\n🟡 ${p1} x ${p2} 🔴`;
  } else {
    mensagem = `🤝 EMPATE!\n\n🟡 ${p1} x ${p2} 🔴\nQue jogo disputado! 🔥`;
  }
  
  confete();
  confete();
  mostrarTela("telaResultado");
  document.getElementById("resultadoFinal").textContent = mensagem;
}

window.reiniciar = function() {
  location.reload();
};
