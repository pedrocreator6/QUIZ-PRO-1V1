// 🔥 FIREBASE — NÃO ALTERAR!
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

// 📚 TEMAS COMPLETOS
const TEMAS = {
  filmes: {
    nome: "🎬 Filmes e Séries",
    perguntas: [
      {q: "Qual filme tem uma rainha que cria gelo mágica?", a: ["Frozen", "Moana", "Aladdin", "A Bela e a Fera"], certa: 0},
      {q: "Quem é o diretor de 'Titanic'?", a: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"], certa: 1},
      {q: "Qual filme tem a frase: 'Que a força esteja com você'?", a: ["Avatar", "Guerra nas Estrelas", "E.T.", "Os Vingadores"], certa: 1},
      {q: "Qual animação fala de um peixe chamado Nemo?", a: ["Procurando Nemo", "Shrek", "Kung Fu Panda", "Carros"], certa: 0},
      {q: "Quantos anões tem na Branca de Neve?", a: ["5", "6", "7", "8"], certa: 2},
      {q: "Qual animal é o símbolo da casa Lannister em Game of Thrones?", a: ["Leão", "Lobo", "Dragão", "Águia"], certa: 0},
      {q: "Quem é o protagonista de 'O Senhor dos Anéis'?", a: ["Harry Potter", "Frodo", "Luke Skywalker", "Neo"], certa: 1},
      {q: "Em qual filme o personagem viaja para o passado num DeLorean?", a: ["Jornada nas Estrelas", "De Volta para o Futuro", "Interestelar", "A Viagem"], certa: 1},
      {q: "Qual é o nome do robô amarelo em 'Os Minions'?", a: ["Kevin", "Bob", "Stuart", "Todos acima"], certa: 3},
      {q: "Qual série se passa na cidade de Hawkins?", a: ["The Walking Dead", "Stranger Things", "Breaking Bad", "Friends"], certa: 1},
      {q: "Qual filme tem um monstro chamado Godzilla?", a: ["King Kong", "Godzilla", "Jurassic Park", "Tubarão"], certa: 1},
      {q: "Quem é a princesa que foi salva por uma fada madrinha?", a: ["Aurora", "Cinderela", "Bela", "Jasmim"], certa: 1},
      {q: "Qual filme tem um mundo de brinquedos vivos?", a: ["Turma da Mônica", "Toy Story", "Os Caça-Fantasmas", "Madagascar"], certa: 1},
      {q: "Em 'Harry Potter', qual é o animal da casa Grifinória?", a: ["Cobra", "Leão", "Águia", "Texugo"], certa: 1},
      {q: "Qual filme ganhou o Oscar de Melhor Filme em 2024?", a: ["Barbie", "Oppenheimer", "Homem-Aranha", "Missão Impossível"], certa: 1},
      {q: "Quem é o diretor de 'Avatar'?", a: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"], certa: 0},
      {q: "Qual filme se passa em uma nave espacial chamada Nostromo?", a: ["Alien", "Guerra nas Estrelas", "Star Trek", "Duna"], certa: 0},
      {q: "Qual animação tem um dragão chamado Fúria da Noite?", a: ["Como Treinar o Seu Dragão", "Shrek", "Mulan", "Aladdin"], certa: 0},
      {q: "Em qual filme o herói tem um escudo com estrelas?", a: ["Homem de Ferro", "Capitão América", "Thor", "Batman"], certa: 1},
      {q: "Qual é o nome do parque com dinossauros?", a: ["Parque dos Dinossauros", "Jurassic Park", "Mundo Pré-Histórico", "Terra dos Gigantes"], certa: 1},
      {q: "Em qual filme a protagonista tem cabelos extremamente longos?", a: ["A Bela Adormecida", "Rapunzel", "Ariel", "Moana"], certa: 1},
      {q: "Qual série acompanha a vida de seis amigos em Nova York?", a: ["How I Met Your Mother", "Friends", "The Big Bang Theory", "Modern Family"], certa: 1},
      {q: "Qual filme tem uma espada que só pode ser tirada de uma pedra pelo verdadeiro rei?", a: ["Merlin", "Rei Arthur", "O Senhor dos Anéis", "Harry Potter"], certa: 1},
      {q: "Qual é o nome do robô que limpa a Terra no filme 'WALL-E'?", a: ["WALL-E", "R2-D2", "C-3PO", "Baymax"], certa: 0},
      {q: "Em qual filme o personagem diz 'Eu sou o Groot'?", a: ["Os Vingadores", "Guardiões da Galáxia", "Homem de Ferro", "Thor"], certa: 1},
      {q: "Qual animação se passa no Brasil com macacos e araras?", a: ["Rio", "Madagascar", "A Era do Gelo", "O Rei Leão"], certa: 0},
      {q: "Qual filme tem uma bruxa má que quer destruir a Terra?", a: ["Malévola", "A Bela Adormecida", "Branca de Neve", "Cinderela"], certa: 0},
      {q: "Qual filme tem um carro que tem vida própria?", a: ["Carros", "Herbie", "Transformers", "Velozes e Furiosos"], certa: 1},
      {q: "Qual é o nome do reino gelado em Frozen?", a: ["Arendelle", "Encantia", "Nárnia", "Valinor"], certa: 0},
      {q: "Em qual filme o personagem encontra uma fera num castelo?", a: ["A Bela e a Fera", "Frozen", "Cinderela", "Ariel"], certa: 0}
    ]
  },
  marvel: {
    nome: "🦸 Marvel/DC",
    perguntas: [
      {q: "Qual é o nome verdadeiro do Homem de Ferro?", a: ["Steve Rogers", "Tony Stark", "Bruce Banner", "Peter Parker"], certa: 1},
      {q: "Quem é o maior inimigo do Batman que ri muito?", a: ["Loki", "Coringa", "Thanos", "Venom"], certa: 1},
      {q: "Qual herói tem o martelo Mjolnir?", a: ["Capitão América", "Thor", "Hulk", "Homem-Aranha"], certa: 1},
      {q: "Quem usou as Joias do Infinito para dizimar metade do universo?", a: ["Loki", "Apocalipse", "Thanos", "Darkseid"], certa: 2},
      {q: "Qual é a cor do traje do Super-Homem predominante?", a: ["Vermelho", "Azul", "Verde", "Preto"], certa: 1},
      {q: "Quem é o parceiro do Batman?", a: ["Super-Homem", "Robin", "Flash", "Lanterna Verde"], certa: 1},
      {q: "De onde vêm os poderes do Homem-Aranha?", a: ["Nasceu assim", "Picada de aranha radioativa", "Experiência científica", "Raio cósmico"], certa: 1},
      {q: "Qual herói é conhecido como 'O Demônio de Tasmânia'?", a: ["Wolverine", "Hulk", "Deadpool", "Homem de Aço"], certa: 0},
      {q: "Qual a cidade do Homem-Aranha?", a: ["Gotham", "Nova York", "Metrópolis", "Los Angeles"], certa: 1},
      {q: "Qual herói da DC é rápido o suficiente para quebrar a barreira do som?", a: ["Batman", "Aquaman", "Flash", "Lanterna Verde"], certa: 2},
      {q: "Quem é a Deusa da Justiça nos quadrinhos da DC?", a: ["Mulher-Gato", "Mulher-Maravilha", "Super-Girl", "Viúva Negra"], certa: 1},
      {q: "Qual metal é o único que corta o escudo do Capitão América?", a: ["Ouro", "Vibranium", "Aço", "Prata"], certa: 1},
      {q: "Quem é o rei de Wakanda?", a: ["Namor", "Pantera Negra", "Cavaleiro da Lua", "Falcão"], certa: 1},
      {q: "Qual grupo inclui Homem de Ferro, Capitão América e Thor?", a: ["X-Men", "Os Vingadores", "Guardiões da Galáxia", "Liga da Justiça"], certa: 1},
      {q: "Qual é a fraqueza do Super-Homem?", a: ["Fogo", "Kryptonita", "Água", "Raio"], certa: 1},
      {q: "Quem é o líder dos X-Men?", a: ["Wolverine", "Ciclope", "Homem de Gelo", "Tempestade"], certa: 1},
      {q: "Qual vilão da Marvel é um simbionte preto?", a: ["Carnificina", "Venom", "Garra Sombria", "Escuridão"], certa: 1},
      {q: "Qual herói tem visão de raio-X e voa?", a: ["Super-Homem", "Homem de Ferro", "Lanterna Verde", "Ciclope"], certa: 0}
    ]
  },
  comida: {
    nome: "🍔 Comida",
    perguntas: [
      {q: "Qual país é famoso pela pizza?", a: ["França", "Itália", "Espanha", "Portugal"], certa: 1},
      {q: "Qual fruta tem casca amarela e é curvada?", a: ["Maçã", "Banana", "Laranja", "Uva"], certa: 1},
      {q: "A feijoada é um prato típico de qual país?", a: ["Portugal", "Brasil", "Espanha", "Itália"], certa: 1},
      {q: "Qual é o ingrediente principal do brigadeiro?", a: ["Açúcar", "Leite condensado", "Chocolate", "Coco"], certa: 1},
      {q: "Qual bebida é feita de café, leite e espuma?", a: ["Café preto", "Cappuccino", "Chá", "Suco"], certa: 1},
      {q: "O que é açaí?", a: ["Um suco de laranja", "Uma fruta roxa da Amazônia", "Um tipo de sorvete", "Uma sopa"], certa: 1},
      {q: "Qual fruta é rica em vitamina C?", a: ["Banana", "Laranja", "Batata", "Arroz"], certa: 1},
      {q: "O que é o churrasco?", a: ["Comida frita", "Carne assada na brasa", "Sopa de legumes", "Salada crua"], certa: 1},
      {q: "O que é o pão de queijo?", a: ["Doce", "Salgado típico brasileiro", "Tipo de pão francês", "Sopa"], certa: 1},
      {q: "Qual é o sabor do limão?", a: ["Doce", "Azedo", "Salgado", "Amargo"], certa: 1},
      {q: "Qual fruta tem polpa alaranjada e caroço grande?", a: ["Laranja", "Manga", "Banana", "Maçã"], certa: 1}
    ]
  },
  anime: {
    nome: "🎌 Anime",
    perguntas: [
      {q: "Qual é o nome do protagonista de Naruto?", a: ["Sasuke", "Naruto", "Itachi", "Kakashi"], certa: 1},
      {q: "O que os piratas procuram em One Piece?", a: ["Ouro", "O tesouro One Piece", "Uma espada", "Uma ilha"], certa: 1},
      {q: "Quantas caudas tem a Raposa de Nove Caudas de Naruto?", a: ["7", "8", "9", "10"], certa: 2},
      {q: "Em Pokémon, qual é o mascote principal?", a: ["Bulbasaur", "Charmander", "Pikachu", "Squirtle"], certa: 2},
      {q: "Quem é o protagonista de 'One Punch Man'?", a: ["Goku", "Saitama", "Naruto", "Luffy"], certa: 1},
      {q: "Em 'Death Note', o que é o caderno da morte?", a: ["Um diário", "Quem tem o nome escrito morre", "Um livro de feitiços", "Um presente"], certa: 1},
      {q: "Qual é o sonho de Naruto?", a: ["Ser rico", "Ser Hokage", "Ser o mais forte", "Salvar o mundo"], certa: 1},
      {q: "Quantas esferas formam o Dragão em Dragon Ball?", a: ["5", "6", "7", "8"], certa: 2}
    ]
  },
  ciencia: {
    nome: "🔬 Ciência",
    perguntas: [
      {q: "Qual gás as plantas absorvem para fazer fotossíntese?", a: ["Oxigênio", "Dióxido de Carbono", "Nitrogênio", "Hidrogênio"], certa: 1},
      {q: "Qual é a fórmula química da água?", a: ["CO2", "H2O", "O2", "NaCl"], certa: 1},
      {q: "Quantos ossos tem um adulto humano?", a: ["206", "250", "180", "300"], certa: 0},
      {q: "Qual planeta é conhecido como Planeta Vermelho?", a: ["Vênus", "Marte", "Júpiter", "Saturno"], certa: 1},
      {q: "A que temperatura a água ferve ao nível do mar?", a: ["80°C", "90°C", "100°C", "120°C"], certa: 2},
      {q: "Qual é o maior planeta do Sistema Solar?", a: ["Terra", "Júpiter", "Saturno", "Netuno"], certa: 1},
      {q: "Qual é a estrela mais próxima da Terra?", a: ["Lua", "Sol", "Marte", "Vênus"], certa: 1},
      {q: "O que é a célula?", a: ["Um tipo de bactéria", "A unidade básica da vida", "Um órgão", "Um vírus"], certa: 1},
      {q: "Qual é o órgão que bombeia o sangue?", a: ["Cérebro", "Pulmão", "Coração", "Fígado"], certa: 2},
      {q: "Quantos segundos tem um minuto?", a: ["30", "60", "90", "100"], certa: 1}
    ]
  },
  historia: {
    nome: "📜 História",
    perguntas: [
      {q: "Em que ano o Brasil foi descoberto?", a: ["1492", "1500", "1600", "1700"], certa: 1},
      {q: "Qual muro caiu em 1989 dividindo uma cidade?", a: ["Muro de Berlim", "Muro da China", "Muro de Paris", "Muro de Roma"], certa: 0},
      {q: "Quem chegou ao Brasil em 1500?", a: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"], certa: 1},
      {q: "Qual civilização construiu as pirâmides?", a: ["Romanos", "Egípcios", "Gregos", "Persas"], certa: 1},
      {q: "Em que ano o Brasil proclamou a República?", a: ["1822", "1889", "1900", "1950"], certa: 1},
      {q: "Quem foi o primeiro homem a pisar na Lua?", a: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], certa: 1},
      {q: "Quem proclamou a Independência do Brasil?", a: ["Tiradentes", "Dom Pedro I", "Dom João VI", "Getúlio Vargas"], certa: 1},
      {q: "Qual país construiu a Grande Muralha?", a: ["Japão", "China", "Índia", "Coreia"], certa: 1}
    ]
  }
};

// === VARIÁVEIS GLOBAIS ===
let nomeJogador = "";
let codigoSala = "";
let ehDono = false;
let ehModoMaquina = false;
let temaEscolhido = null;
let qtdPerguntas = 10;
let tempoPorPergunta = 20;
let perguntasSorteadas = [];
let indiceAtual = 0;
let pontos = { p1: 0, p2: 0 };
let respostasRecebidas = { p1: false, p2: false };
let cronometro = null;
let tempoRestante = 0;
let jogadorId = "";
let salaRef = null;
let inscricaoSala = null;

// === ELEMENTOS DA TELA ===
const telas = {
  inicio: document.getElementById("tela-inicio"),
  config: document.getElementById("tela-config"),
  jogo: document.getElementById("tela-jogo"),
  resultado: document.getElementById("tela-resultado")
};

function mostrarTela(nome) {
  Object.values(telas).forEach(t => t.classList.remove("ativa"));
  telas[nome].classList.add("ativa");
}

// === EVENTOS ===
document.getElementById("btn-criar").addEventListener("click", () => {
  nomeJogador = document.getElementById("nome-jogador").value.trim();
  if (!nomeJogador) return alert("Digite seu nome!");
  ehDono = true;
  ehModoMaquina = false;
  criarSala();
});

document.getElementById("btn-entrar").addEventListener("click", () => {
  document.getElementById("area-codigo").classList.remove("escondido");
});

document.getElementById("btn-confirmar-codigo").addEventListener("click", () => {
  nomeJogador = document.getElementById("nome-jogador").value.trim();
  codigoSala = document.getElementById("codigo-sala").value.trim().toUpperCase();
  if (!nomeJogador || !codigoSala) return alert("Preencha tudo!");
  ehDono = false;
  ehModoMaquina = false;
  entrarSala();
});

document.getElementById("btn-maquina").addEventListener("click", () => {
  nomeJogador = document.getElementById("nome-jogador").value.trim();
  if (!nomeJogador) return alert("Digite seu nome!");
  ehModoMaquina = true;
  ehDono = true;
  codigoSala = "MAQUINA";
  jogadorId = "p1";
  mostrarTela("config");
  carregarTemas();
});

document.getElementById("btn-iniciar").addEventListener("click", iniciarJogo);
document.getElementById("btn-novo").addEventListener("click", reiniciar);

// === CRIAR SALA ===
function criarSala() {
  codigoSala = gerarCodigo();
  jogadorId = "p1";
  salaRef = db.ref("salas/" + codigoSala);
  salaRef.set({
    p1: { nome: nomeJogador, pronto: false },
    p2: null,
    configuracoes: null,
    estado: "esperando"
  });
  document.getElementById("cod-exibido").textContent = codigoSala;
  mostrarTela("config");
  carregarTemas();
  escutarSala();
}

// === ENTRAR SALA ===
function entrarSala() {
  jogadorId = "p2";
  salaRef = db.ref("salas/" + codigoSala);
  salaRef.once("value").then(snap => {
    const sala = snap.val();
    if (!sala || sala.p2 || sala.estado !== "esperando") {
      return alert("Sala não existe ou já está cheia!");
    }
    salaRef.child("p2").set({ nome: nomeJogador, pronto: false });
    document.getElementById("cod-exibido").textContent = codigoSala;
    mostrarTela("config");
    escutarSala();
  });
}

// === GERAR CÓDIGO ===
function gerarCodigo() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// === CARREGAR TEMAS ===
function carregarTemas() {
  const container = document.getElementById("lista-temas");
  container.innerHTML = "";
  for (const [chave, tema] of Object.entries(TEMAS)) {
    const btn = document.createElement("button");
    btn.textContent = tema.nome;
    btn.dataset.tema = chave;
    btn.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(b => b.classList.remove("selecionado"));
      btn.classList.add("selecionado");
      temaEscolhido = chave;
    });
    container.appendChild(btn);
  }
  document.querySelectorAll(".btn-qtd")[0].classList.add("selecionado");
  document.querySelectorAll(".btn-tempo")[1].classList.add("selecionado");
}

document.querySelectorAll(".btn-qtd").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn-qtd").forEach(b => b.classList.remove("selecionado"));
    btn.classList.add("selecionado");
    qtdPerguntas = parseInt(btn.dataset.qtd);
  });
});

document.querySelectorAll(".btn-tempo").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn-tempo").forEach(b => b.classList.remove("selecionado"));
    btn.classList.add("selecionado");
    tempoPorPergunta = parseInt(btn.dataset.seg);
  });
});

// === ESCUTAR ALTERAÇÕES NA SALA ===
function escutarSala() {
  if (inscricaoSala) inscricaoSala.off();
  inscricaoSala = salaRef.on("value", snap => {
    const sala = snap.val();
    if (!sala) return;
    
    // Atualizar nomes
    if (sala.p1) document.getElementById("nome-1").textContent = sala.p1.nome;
    if (sala.p2) document.getElementById("nome-2").textContent = sala.p2.nome || "Aguardando...";
    
    // Aguardar configuração do dono
    if (!ehDono && sala.configuracoes) {
      temaEscolhido = sala.configuracoes.tema;
      qtdPerguntas = sala.configuracoes.qtd;
      tempoPorPergunta = sala.configuracoes.tempo;
    }
    
    // Iniciar jogo
    if (sala.estado === "jogando" && telas.config.classList.contains("ativa")) {
      perguntasSorteadas = sala.perguntas;
      indiceAtual = 0;
      pontos = { p1: 0, p2: 0 };
      mostrarTela("jogo");
      carregarPergunta();
    }
    
    // Atualizar respostas e avançar
    if (sala.estado === "jogando" && sala.indice === indiceAtual) {
      respostasRecebidas = sala.respostas || { p1: false, p2: false };
      if (respostasRecebidas.p1 && respostasRecebidas.p2) {
        verificarProxima();
      }
    }
    
    // Resultado
    if (sala.estado === "resultado") {
      clearInterval(cronometro);
      mostrarTela("resultado");
      mostrarResultado(sala.pontos);
    }
  });
}

// === INICIAR JOGO ===
function iniciarJogo() {
  if (!temaEscolhido) return alert("Escolha um tema!");
  
  // Pegar e embaralhar perguntas
  const todas = [...TEMAS[temaEscolhido].perguntas];
  perguntasSorteadas = embaralhar(todas).slice(0, qtdPerguntas);
  
  if (ehModoMaquina) {
    // Modo contra máquina
    indiceAtual = 0;
    pontos = { p1: 0, p2: 0 };
    document.getElementById("nome-1").textContent = nomeJogador;
    document.getElementById("nome-2").textContent = "🤖 Máquina";
    mostrarTela("jogo");
    carregarPergunta();
  } else {
    // Multiplayer
    salaRef.update({
      configuracoes: { tema: temaEscolhido, qtd: qtdPerguntas, tempo: tempoPorPergunta },
      perguntas: perguntasSorteadas,
      indice: 0,
      pontos: { p1: 0, p2: 0 },
      respostas: { p1: false, p2: false },
      estado: "jogando"
    });
  }
}

// === EMBARALHAR ===
function embaralhar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// === CARREGAR PERGUNTA ===
function carregarPergunta() {
  respostasRecebidas = { p1: false, p2: false };
  
  const pergunta = perguntasSorteadas[indiceAtual];
  document.getElementById("texto-pergunta").textContent = pergunta.q;
  document.getElementById("contagem-perguntas").textContent = `${indiceAtual + 1} / ${perguntasSorteadas.length}`;
  document.getElementById("status-resposta").textContent = "";
  
  const container = document.getElementById("lista-alternativas");
  container.innerHTML = "";
  
  pergunta.a.forEach((texto, i) => {
    const btn = document.createElement("div");
    btn.className = "alternativa";
    btn.textContent = `${String.fromCharCode(65 + i)}) ${texto}`;
    btn.addEventListener("click", () => escolherResposta(i));
    container.appendChild(btn);
  });
  
  // Iniciar cronômetro
  tempoRestante = tempoPorPergunta;
  document.getElementById("cronometro").textContent = tempoRestante;
  document.getElementById("cronometro").classList.remove("urgente");
  
  clearInterval(cronometro);
  cronometro = setInterval(() => {
    tempoRestante--;
    document.getElementById("cronometro").textContent = tempoRestante;
    if (tempoRestante <= 5) document.getElementById("cronometro").classList.add("urgente");
    if (tempoRestante <= 0) {
      clearInterval(cronometro);
      escolherResposta(-1); // Tempo esgotado
    }
  }, 1000);
}

// === ESCOLHER RESPOSTA ===
function escolherResposta(indiceEscolhido) {
  if (respostasRecebidas[jogadorId] === true) return; // Já respondeu
  
  respostasRecebidas[jogadorId] = true;
  const pergunta = perguntasSorteadas[indiceAtual];
  const acertou = indiceEscolhido === pergunta.certa;
  
  // Bloquear cliques
  document.querySelectorAll(".alternativa").forEach(btn => btn.classList.add("desativada"));
  
  // Mostrar cores
  document.querySelectorAll(".alternativa").forEach((btn, i) => {
    if (i === pergunta.certa) btn.classList.add("correta");
    else if (i === indiceEscolhido && !acertou) btn.classList.add("errada");
  });
  
  if (acertou) {
    document.getElementById("status-resposta").textContent = "✅ Acertou!";
    pontos[jogadorId]++;
  } else {
    document.getElementById("status-resposta").textContent = "❌ Errou!";
  }
  
  // Atualizar pontuação na tela
  document.getElementById("pontos-1").textContent = pontos.p1;
  document.getElementById("pontos-2").textContent = pontos.p2;
  
  // Salvar no Firebase (apenas no multiplayer)
  if (!ehModoMaquina) {
    salaRef.child("respostas/" + jogadorId).set(true);
    if (acertou) {
      salaRef.child("pontos/" + jogadorId).set(pontos[jogadorId]);
    }
  }
  
  // No modo máquina: ela responde sozinha
  if (ehModoMaquina && jogadorId === "p1") {
    setTimeout(() => {
      const acertoMaquina = Math.random() < 0.6; // 60% de acerto
      if (acertoMaquina) {
        pontos.p2++;
        document.getElementById("pontos-2").textContent = pontos.p2;
      }
      respostasRecebidas.p2 = true;
      verificarProxima();
    }, 1000 + Math.random() * 1000);
  }
  
  if (ehModoMaquina) verificarProxima();
}

// === VERIFICAR SE PODE IR PARA PRÓXIMA ===
function verificarProxima() {
  const todosResponderam = respostasRecebidas.p1 && respostasRecebidas.p2;
  if (!todosResponderam) return;
  
  clearInterval(cronometro);
  
  setTimeout(() => {
    indiceAtual++;
    if (indiceAtual >= perguntasSorteadas.length) {
      if (!ehModoMaquina && ehDono) {
        salaRef.update({ estado: "resultado", pontos: pontos });
      }
      mostrarTela("resultado");
      mostrarResultado(pontos);
    } else {
      if (!ehModoMaquina && ehDono) {
        salaRef.update({ indice: indiceAtual, respostas: { p1: false, p2: false } });
      }
      carregarPergunta();
    }
  }, 1500);
}

// === MOSTRAR RESULTADO ===
function mostrarResultado(pontuacao) {
  document.getElementById("nome-1-res").textContent = nomeJogador + (jogadorId === "p1" ? " (Você)" : "");
  document.getElementById("pontos-1-res").textContent = pontuacao.p1 + " pontos";
  document.getElementById("nome-2-res").textContent = 
    ehModoMaquina ? "🤖 Máquina" : (document.getElementById("nome-2").textContent + (jogadorId === "p2" ? " (Você)" : ""));
  document.getElementById("pontos-2-res").textContent = pontuacao.p2 + " pontos";
  
  let msg = "";
  if (pontuacao.p1 > pontuacao.p2) {
    msg = jogadorId === "p1" ? "🎉 VOCÊ VENCEU!" : "😢 Você perdeu...";
  } else if (pontuacao.p2 > pontuacao.p1) {
    msg = jogadorId === "p2" ? "🎉 VOCÊ VENCEU!" : "😢 Você perdeu...";
  } else {
    msg = "🤝 EMPATE!";
  }
  document.getElementById("mensagem-vencedor").textContent = msg;
}

// === REINICIAR JOGO ===
function reiniciar() {
  if (inscricaoSala) inscricaoSala.off();
  if (salaRef && !ehModoMaquina) salaRef.remove();
  nomeJogador = "";
  codigoSala = "";
  ehDono = false;
  ehModoMaquina = false;
  temaEscolhido = null;
  qtdPerguntas = 10;
  tempoPorPergunta = 20;
  perguntasSorteadas = [];
  indiceAtual = 0;
  pontos = { p1: 0, p2: 0 };
  respostasRecebidas = { p1: false, p2: false };
  jogadorId = "";
  salaRef = null;
  inscricaoSala = null;
  mostrarTela("inicio");
}
