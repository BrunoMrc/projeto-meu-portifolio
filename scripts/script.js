function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

const habilidades = [
  { nome: "HTML5", porcentagem: 85 },
  { nome: "CSS3", porcentagem: 75 },
  { nome: "JavaScript", porcentagem: 60 },
  { nome: "Git / GitHub", porcentagem: 70 },
  { nome: "Lógica de Programação", porcentagem: 80 },
];


const projetos = [
  {
    titulo: "Projeto Portfólio (curso)",
    descricao: "Primeira versão do portfólio, feita seguindo o curso de HTML/CSS.",
    link: "https://github.com/BrunoMrc/projeto-portifolio",
  },
  {
    titulo: "Projeto Login",
    descricao: "Tela de login desenvolvida para praticar HTML e CSS.",
    link: "https://github.com/BrunoMrc/projeto-login",
  },
  {
    titulo: "Projeto Social",
    descricao: "Página no estilo rede social, praticando layout e estilização.",
    link: "https://github.com/BrunoMrc/projeto-social",
  },
  {
    titulo: "Projeto Cordel",
    descricao: "Projeto de página temática desenvolvido durante o curso.",
    link: "https://github.com/BrunoMrc/projeto-cordel",
  },
];


const containerHabilidades = document.getElementById("lista-habilidades");

for (let i = 0; i < habilidades.length; i++) {
  const habilidade = habilidades[i];

  
  const linha = document.createElement("div");

  const nomeLinha = document.createElement("div");
  nomeLinha.className = "habilidade-nome";
  nomeLinha.innerHTML = "<span>" + habilidade.nome + "</span><span>" + habilidade.porcentagem + "%</span>";

  const fundo = document.createElement("div");
  fundo.className = "barra-fundo";

  const preenchida = document.createElement("div");
  preenchida.className = "barra-preenchida";
  preenchida.id = "barra-" + i;

  fundo.appendChild(preenchida);
  linha.appendChild(nomeLinha);
  linha.appendChild(fundo);
  containerHabilidades.appendChild(linha);
}


window.addEventListener("load", function () {
  setTimeout(function () {
    for (let i = 0; i < habilidades.length; i++) {
      const barra = document.getElementById("barra-" + i);
      barra.style.width = habilidades[i].porcentagem + "%";
    }
  }, 300);
});

const containerProjetos = document.getElementById("lista-projetos");

for (let i = 0; i < projetos.length; i++) {
  const projeto = projetos[i];

  const card = document.createElement("div");
  card.className = "card-projeto";

  const titulo = document.createElement("h3");
  titulo.textContent = projeto.titulo;

  const descricao = document.createElement("p");
  descricao.textContent = projeto.descricao;

  const link = document.createElement("a");
  link.href = projeto.link;
  link.target = "_blank";
  link.textContent = "Ver no GitHub";

  card.appendChild(titulo);
  card.appendChild(descricao);
  card.appendChild(link);
  containerProjetos.appendChild(card);
}

document.getElementById("ano-atual").textContent = new Date().getFullYear();
