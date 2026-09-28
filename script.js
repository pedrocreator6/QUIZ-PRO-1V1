// CONFIGURAÇÃO FIREBASE — NÃO MUDA!
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

// 10 TEMAS
const TEMAS = {
  filmes: {
    nome: "🎬 Filmes e Séries",
    perguntas: [
      {q: "Qual filme tem um boneco de neve chamado Olaf?", a: ["Frozen", "Moana", "Aladdin", "A Bela e a Fera"], certa: 0},
      {q: "Quem é o diretor de 'Titanic'?", a: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"], certa: 1},
      {q: "Em qual série os personagens vivem em Wisteria Lane?", a: ["Friends", "Desperate Housewives", "The Office", "Stranger Things"], certa: 1},
      {q: "Qual super-herói aparece pela primeira vez em 'Homem-Aranha'?", a: ["Batman", "Deadpool", "Homem de Ferro", "Super-Homem"], certa: 2},
      {q: "Qual filme tem a frase: 'Que a força esteja com você'?", a: ["Avatar", "Guerras nas Estrelas", "E.T.", "Os Vingadores"], certa: 1}
    ]
  },
  marvel: {
    nome: "🦸 Marvel / DC",
    perguntas: [
      {q: "Qual é o nome verdadeiro do Homem de Ferro?", a: ["Steve Rogers", "Tony Stark", "Bruce Banner", "Peter Parker"], certa: 1},
      {q: "Quem é o inimigo principal do Batman em Gotham?", a: ["Loki", "Coringa", "Thanos", "Venom"], certa: 1},
      {q: "Qual herói tem o martelo Mjolnir?", a: ["Capitão América", "Thor", "Hulk", "Homem-Aranha"], certa: 1},
      {q: "Quem matou a maioria dos heróis com um estalar de dedos?", a: ["Loki", "Apocalipse", "Thanos", "Darkseid"], certa: 2},
      {q: "Qual a cor do anel do Lanterna Verde?", a: ["Vermelho", "Azul", "Verde", "Amarelo"], certa: 2}
    ]
  },
  comida: {
    nome: "🍔 Comida",
    perguntas: [
      {q: "Qual país é famoso pela pizza?", a: ["França", "Itália", "Espanha", "Portugal"], certa: 1},
      {q: "O que é feito principalmente de farinha, água e sal?", a: ["Arroz", "Macarrão", "Feijão", "Carne"], certa: 1},
      {q: "Qual fruta tem a casca amarela e é curvada?", a: ["Maçã", "Banana", "Laranja", "Uva"], certa: 1},
      {q: "O que é a feijoada?", a: ["Sopa de legumes", "Prato com feijão e carne", "Doce de leite", "Tipo de pão"], certa: 1},
      {q: "Qual tempero é feito de pimenta moída?", a: ["Sal", "Açúcar", "Pimenta-do-reino", "Vinagre"], certa: 2}
    ]
  },
  anime: {
    nome: "🎌 Anime",
    perguntas: [
      {q: "Qual é o nome do protagonista de Naruto?", a: ["Sasuke", "Naruto", "Itachi", "Kakashi"], certa: 1},
      {q: "Em Dragon Ball, quem se transformou em Super Saiyajin primeiro?", a: ["Vegeta", "Goku", "Gohan", "Trunks"], certa: 1},
      {q: "O que é One Piece?", a: ["Um navio", "Um tesouro", "Uma ilha", "Uma espada"], certa: 1},
      {q: "Qual anime tem um gato chamado Luna?", a: ["Naruto", "Sailor Moon", "Pokémon", "Digimon"], certa: 1},
      {q: "Quantas caudas tem o Kurama?", a: ["7", "8", "9", "10"], certa: 2}
    ]
  },
  ciencia: {
    nome: "🔬 Ciência",
    perguntas: [
      {q: "Qual é o gás que as plantas usam para fazer fotossíntese?", a: ["Oxigênio", "Dióxido de Carbono", "Nitrogênio", "Hidrogênio"], certa: 1},
      {q: "Qual é a fórmula da água?", a: ["CO2", "H2O", "O2", "NaCl"], certa: 1},
      {q: "Quantos ossos tem o corpo humano adulto?", a: ["206", "250", "180", "300"], certa: 0},
      {q: "Qual planeta é conhecido como Planeta Vermelho?", a: ["Vênus", "Marte", "Júpiter", "Saturno"], certa: 1},
      {q: "A que temperatura a água ferve ao nível do mar?", a: ["80°C", "90°C", "100°C", "120°C"], certa: 2}
    ]
  },
  historia: {
    nome: "📜 História",
    perguntas: [
      {q: "Em que ano o Brasil foi descoberto?", a: ["1492", "1500", "1600", "1700"], certa: 1},
      {q: "Quem foi o primeiro imperador do Brasil?", a: ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "Getúlio Vargas"], certa: 0},
      {q: "Qual muro dividiu uma cidade por décadas e caiu em 1989?", a: ["Muro de Berlim", "Muro da China", "Muro de Paris", "Muro de Roma"], certa: 0},
      {q: "Quem descobriu o caminho marítimo para o Brasil?", a: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"], certa: 1},
      {q: "Qual era o nome do antigo Egito?", a: ["Império do Nilo", "Kemet", "Faraó", "Alexandria"], certa: 1}
    ]
  },
  tecnologia: {
    nome: "💻 Tecnologia",
    perguntas: [
      {q: "O que significa a sigla 'WWW' em sites?", a: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"], certa: 0},
      {q: "Qual empresa criou o sistema operacional Windows?", a: ["Apple", "Google", "Microsoft", "Samsung"], certa: 2},
      {q: "O que é um vírus de computador?", a: ["Um programa de proteção", "Um programa malicioso", "Um tipo de hardware", "Um site"], certa: 1},
      {q: "Qual é o nome do navegador do Google?", a: ["Firefox", "Edge", "Chrome", "Safari"], certa: 2},
      {q: "O que significa 'download'?", a: ["Enviar arquivo", "Receber arquivo", "Apagar arquivo", "Copiar arquivo"], certa: 1}
    ]
  },
  futebol: {
    nome: "⚽ Futebol",
    perguntas: [
      {q: "Quantos jogadores tem cada time em campo no futebol?", a: ["9", "10", "11", "12"], certa: 2},
      {q: "Qual jogador é conhecido como 'O Rei do Futebol'?", a: ["Pelé", "Maradona", "Zico", "Romário"], certa: 0},
      {q: "Quantas copas do mundo tem a seleção brasileira?", a: ["4", "5", "6", "7"], certa: 1},
      {q: "Qual é o maior clássico paulista entre Corinthians e Palmeiras?", a: ["Fla-Flu", "Majestoso", "Paulista", "Mineirão"], certa: 1},
      {q: "Qual jogador marcou 1.000 gols oficialmente?", a: ["Romário", "Pelé", "Garrincha", "Zico"], certa: 1}
    ]
  },
  biologia: {
    nome: "🧬 Biologia",
    perguntas: [
      {q: "Qual é a célula responsável por transportar oxigênio no sangue?", a: ["Glóbulo branco", "Hemácia", "Plasma", "Plaqueta"], certa: 1},
      {q: "Qual órgão bombeia o sangue no corpo?", a: ["Cérebro", "Pulmão", "Coração", "Estômago"], certa: 2},
      {q: "O que as plantas absorvem do solo para crescer?", a: ["Água e sais minerais", "Oxigênio", "Dióxido de carbono", "Calor"], certa: 0},
      {q: "Qual é a unidade básica da vida?", a: ["Átomo", "Célula", "Tecido", "Órgão"], certa: 1},
      {q: "Quantos cromossomos tem uma célula humana comum?", a: ["23", "46", "48", "52"], certa: 1}
    ]
  },
  matematica: {
    nome: "➗ Matemática",
    perguntas: [
      {q: "Quanto é 7 × 8?", a: ["54", "56", "63", "49"], certa: 1},
      {q: "Qual é o número primo entre 10 e 20?", a: ["12", "15", "17", "18"], certa: 2},
      {q: "Quanto é 15²?", a: ["150", "200", "225", "250"], certa: 2},
      {q: "Qual é o resultado de 100 ÷ 4?", a: ["20", "25", "30", "40"], certa: 1},
      {q: "Qual é o valor de π aproximadamente?", a: ["3,14", "2,72", "1,41", "4,13"], certa: 0}
    ]
  }
};

// ESTADO DO JOGO
let estado = {
  nomeJogador: "",
  salaId: "",
  ehCriador: false,
  jogadorId: "",
  adversarioNome: "",
  adversarioPontos: 0,
  meusPontos: 0,
  perguntaAtual: 0,
  totalPerguntas: 10,
  tempoPorPergunta: 20,
  temaEscolhido: "filmes",
  perguntasSorteadas: [],
  respondi: false,
  adversarioRespondeu: false,
  cronometro: null,
  tempoRestante: 0
};

// INICIALIZA
window.onload = function() {
  preencherTemas();
};

function preencherTemas() {
  const select = document.getElementById("tema-jogo");
  select.innerHTML = "";
  for (let chave in TEMAS) {
    const opt = document.createElement("option");
    opt.value = chave;
    opt.textContent = TEMAS[chave].nome;
    select.appendChild(opt);
  }
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}

function gerarCodigo() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function iniciarCriacao() {
  const nome = document.getElementById("nome-criador").value.trim();
  if (!nome) return alert("Digite seu nome!");
  estado.nomeJogador = nome;
  estado.ehCriador = true;
  estado.salaId = gerarCodigo();
  estado.jogadorId = "jogador1";
  
  const salaRef = db.ref("salas/" + estado.salaId);
  salaRef.set({
    criador: nome,
    jogador1: { nome: nome, pontos: 0, respondeu: false },
    jogador2: { nome: null, pontos: 0, respondeu: false },
    configurado: false,
    emJogo: false,
    perguntaAtual: 0
  });
  
  alert("Código da sala: " + estado.salaId);
  mostrarTela("tela-config");
  configurarOuvintes(salaRef);
}

function entrarSala() {
  const codigo = document.getElementById("codigo-sala").value.trim().toUpperCase();
  const nome = document.getElementById("nome-convidado").value.trim();
  if (!codigo || !nome) return alert("Preencha tudo!");
  
  const salaRef = db.ref("salas/" + codigo);
  salaRef.once("value").then(snap => {
    if (!snap.exists()) return alert("Sala não existe!");
    const dados = snap.val();
    if (dados.jogador2.nome) return alert("Sala já está cheia!");
    
    estado.salaId = codigo;
    estado.nomeJogador = nome;
    estado.ehCriador = false;
    estado.jogadorId = "jogador2";
    
    salaRef.update({
      jogador2: { nome: nome, pontos: 0, respondeu: false }
    });
    
    mostrarTela("tela-config");
    document.getElementById("aguarde-jogador").style.display = "none";
    document.getElementById("btn-iniciar").disabled = true;
    configurarOuvintes(salaRef);
  });
}

function configurarOuvintes(ref) {
  ref.on("value", snap => {
    const dados = snap.val();
    if (!dados) return;
    
    if (dados.jogador2.nome && estado.ehCriador) {
      document.getElementById("btn-iniciar").disabled = false;
      document.getElementById("aguarde-jogador").textContent = "Adversário já entrou! Pode começar! ✅";
      estado.adversarioNome = dados.jogador2.nome;
    }
    if (!estado.ehCriador && dados.jogador2.nome) {
      estado.adversarioNome = dados.jogador1.nome;
      document.getElementById("nome-adversario").textContent = estado.adversarioNome;
    }
    
    if (dados.emJogo && !document.getElementById("tela-jogo").classList.contains("ativa")) {
      estado.temaEscolhido = dados.tema;
      estado.totalPerguntas = dados.qtdPerguntas;
      estado.tempoPorPergunta = dados.tempo;
      estado.perguntasSorteadas = embaralhar(TEMAS[estado.temaEscolhido].perguntas).slice(0, estado.totalPerguntas);
      estado.perguntaAtual = 0;
      estado.meusPontos = 0;
      estado.adversarioPontos = 0;
      mostrarTela("tela-jogo");
      carregarProximaPergunta();
    }
    
    if (dados.respostaAtual && dados.respostaAtual.jogador1 && dados.respostaAtual.jogador2) {
      if (!estado.respondi || !estado.adversarioRespondeu) {
        mostrarRespostas(dados.respostaAtual);
      }
    }
    
    if (dados.perguntaAtual !== undefined) {
      estado.perguntaAtual = dados.perguntaAtual;
    }
    
    if (dados.fim) {
      estado.meusPontos = estado.jogadorId === "jogador1" ? dados.jogador1.pontos : dados.jogador2.pontos;
      estado.adversarioPontos = estado.jogadorId === "jogador1" ? dados.jogador2.pontos : dados.jogador1.pontos;
      estado.adversarioNome = estado.jogadorId === "jogador1" ? dados.jogador2.nome : dados.jogador1.nome;
      mostrarResultado();
    }
  });
}

function embaralhar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function iniciarPartida() {
  const tema = document.getElementById("tema-jogo").value;
  const qtd = parseInt(document.getElementById("qtd-perguntas").value);
  const tempo = parseInt(document.getElementById("tempo-resposta").value);
  
  estado.temaEscolhido = tema;
  estado.totalPerguntas = qtd;
  estado.tempoPorPergunta = tempo;
  estado.perguntasSorteadas = embaralhar(TEMAS[tema].perguntas).slice(0, qtd);
  estado.perguntaAtual = 0;
  estado.meusPontos = 0;
  estado.adversarioPontos = 0;
  
  db.ref("salas/" + estado.salaId).update({
    emJogo: true,
    tema: tema,
    qtdPerguntas: qtd,
    tempo: tempo,
    perguntaAtual: 0,
    jogador1: { nome: estado.nomeJogador, pontos: 0, respondeu: false },
    jogador2: { ...db.ref("salas/" + estado.salaId + "/jogador2"), pontos: 0, respondeu: false },
    respostaAtual: null,
    fim: false
  });
  
  mostrarTela("tela-jogo");
  document.getElementById("nome-adversario").textContent = estado.adversarioNome;
  carregarProximaPergunta();
}

function carregarProximaPergunta() {
  if (estado.perguntaAtual >= estado.totalPerguntas) {
    finalizarJogo();
    return;
  }
  
  estado.respondi = false;
  estado.adversarioRespondeu = false;
  const pergunta = estado.perguntasSorteadas[estado.perguntaAtual];
  
  document.getElementById("contador-pergunta").textContent = `${estado.perguntaAtual + 1} / ${estado.totalPerguntas}`;
  document.getElementById("pergunta").textContent = pergunta.q;
  
  const container = document.getElementById("alternativas");
  container.innerHTML = "";
  
  pergunta.a.forEach((texto, idx) => {
    const btn = document.createElement("div");
    btn.className = "alternativa";
    btn.textContent = `${String.fromCharCode(65 + idx)}) ${texto}`;
    btn.onclick = () => responder(idx);
    container.appendChild(btn);
  });
  
  estado.tempoRestante = estado.tempoPorPergunta;
  document.getElementById("cronometro").textContent = estado.tempoRestante;
  document.getElementById("cronometro").classList.remove("urgente");
  
  if (estado.cronometro) clearInterval(estado.cronometro);
  estado.cronometro = setInterval(() => {
    estado.tempoRestante--;
    document.getElementById("cronometro").textContent = estado.tempoRestante;
    if (estado.tempoRestante <= 5) document.getElementById("cronometro").classList.add("urgente");
    if (estado.tempoRestante <= 0) {
      clearInterval(estado.cronometro);
      if (!estado.respondi) responder(-1);
    }
  }, 1000);
  
  db.ref("salas/" + estado.salaId + "/perguntaAtual").set(estado.perguntaAtual);
}

function responder(indice) {
  if (estado.respondi) return;
  estado.respondi = true;
  clearInterval(estado.cronometro);
  
  const pergunta = estado.perguntasSorteadas[estado.perguntaAtual];
  const acertou = indice === pergunta.certa;
  
  if (acertou) estado.meusPontos++;
  
  const salaRef = db.ref("salas/" + estado.salaId);
  salaRef.once("value").then(snap => {
    const dados = snap.val();
    const jogadorAdversario = estado.jogadorId === "jogador1" ? "jogador2" : "jogador1";
    estado.adversarioPontos = dados[jogadorAdversario].pontos;
    
    const atualizacao = {};
    atualizacao[estado.jogadorId + "/pontos"] = estado.meusPontos;
    atualizacao[estado.jogadorId + "/respondeu"] = true;
    atualizacao["respostaAtual/" + estado.jogadorId] = {
      escolha: indice,
      certa: acertou
    };
    
    salaRef.update(atualizacao);
  });
  
  const botoes = document.querySelectorAll(".alternativa");
  botoes.forEach(b => b.classList.add("respondida"));
  if (indice !== -1) {
    botoes[pergunta.certa].classList.add("certa");
    if (indice !== pergunta.certa) botoes[indice].classList.add("errada");
  } else {
    botoes[pergunta.certa].classList.add("certa");
  }
  
  verificarProxima();
}

function mostrarRespostas(respostaAtual) {
  const eu = respostaAtual[estado.jogadorId];
  const adversario = respostaAtual[estado.jogadorId === "jogador1" ? "jogador2" : "jogador1"];
  
  if (!eu || !adversario) return;
  if (estado.adversarioRespondeu) return;
  
  estado.adversarioRespondeu = true;
  estado.adversarioPontos = adversario.certa ? estado.adversarioPontos + 1 : estado.adversarioPontos;
  document.getElementById("pontos-adversario").textContent = estado.adversarioPontos + " ✅";
  
  setTimeout(() => {
    estado.perguntaAtual++;
    carregarProximaPergunta();
  }, 2000);
}

function verificarProxima() {
  const salaRef = db.ref("salas/" + estado.salaId);
  salaRef.once("value").then(snap => {
    const dados = snap.val();
    if (dados.jogador1.respondeu && dados.jogador2.respondeu) {
      setTimeout(() => {
        estado.perguntaAtual++;
        carregarProximaPergunta();
      }, 2000);
    }
  });
}

function finalizarJogo() {
  db.ref("salas/" + estado.salaId).once("value").then(snap => {
    const dados = snap.val();
    const j1 = { ...dados.jogador1 };
    const j2 = { ...dados.jogador2 };
    
    db.ref("salas/" + estado.salaId).update({
      fim: true,
      jogador1: j1,
      jogador2: j2
    });
    
    mostrarResultado();
  });
}

function mostrarResultado() {
  clearInterval(estado.cronometro);
  mostrarTela("tela-resultado");
  
  document.getElementById("acertos-voce").textContent = estado.meusPontos + " de " + estado.totalPerguntas;
  document.getElementById("nome-final-adversario").textContent = estado.adversarioNome;
  document.getElementById("acertos-adversario").textContent = estado.adversarioPontos + " de " + estado.totalPerguntas;
  
  const resVoce = document.getElementById("resultado-voce");
  const resAdv = document.getElementById("resultado-adversario");
  
  resVoce.querySelector(".posicao").textContent = estado.meusPontos > estado.adversarioPontos ? "🥇" : "🥈";
  resAdv.querySelector(".posicao").textContent = estado.adversarioPontos > estado.meusPontos ? "🥇" : "🥈";
  
  if (estado.meusPontos === estado.adversarioPontos) {
    resVoce.querySelector(".posicao").textContent = "🤝";
    resAdv.querySelector(".posicao").textContent = "🤝";
  }
}
