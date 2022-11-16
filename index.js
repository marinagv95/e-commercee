let lanches = [
  {
    id: 1,
    image: "./asserts/xpicanha.png",
    name: "X-Picanha",
    type: "sanduiche",
    info: "Sanduiche feito de picanha, acompanhado com salada, bacon, maionese especial e onion rings",
    price: 33.9,
  },

  {
    id: 2,
    image: "./asserts/dublesmash.png",
    name: "Duble Smash",
    type: "sanduiche",
    info: "Sanduiche acampanhado de salada, dois hamburgueres e queijo chedar",
    price: 26.4,
  },
  {
    id: 3,
    image: "./asserts/colosso.png",
    name: "Colosso",
    type: "sanduiche",
    info: "Sanduiche acompanhado de muito bacon, barbecue, queijo cheddar e hamburguer",
    price: 35.5,
  },
  {
    id: 4,
    image: "./asserts/cocacola.png",
    name: "Refrigerante",
    type: "bebidas",
    info: "Lata de 250ml de refrigerante",
    price: 4.3,
  },
  {
    id: 5,
    image: "./asserts/sucoLaranja.png",
    name: "Suco de Laranja",
    type: "bebidas",
    info: "Copo de 500ml de suco de laranja natural",
    price: 8.2,
  },
  {
    id: 6,
    image: "./asserts/energetico.png",
    name: "Red Bull",
    type: "bebidas",
    info: "Latinha energetico de 250ml",
    price: 9.7,
  },
  {
    id: 7,
    image: "./asserts/sacoBatata.png",
    name: "Batata Frita",
    type: "outros",
    info: "porção de batatas fritas",
    price: 7.25,
  },
  {
    id: 8,
    image: "./asserts/onionRings.png",
    name: "Onion Rings",
    type: "outros",
    info: "porção de onion Rings",
    price: 10.0,
  },
];

let carrinho = [];

function addCarrinho() {
  let ulLanches = document.querySelector(".ulLanches");
  ulLanches.addEventListener("click", (e) => {
    let element = e.target;

    if (element.tagName == "BUTTON") {
      let produto = procuraLanche(element.id);
      carrinho.push(produto);
      comprasCarrinho(carrinho);
    }
  });
}
addCarrinho();

function comprasCarrinho(lista) {
  let ulCarrinho = document.querySelector(".ulCarrinho");
  ulCarrinho.innerHTML = "";

  if (lista.length == 0) {
    ulCarrinho.innerHTML = `<div class="divNameCompleto">
<h2 class="nameCarrinhoVazio">O carrinho está vázio!</h2>
<h3 class="nameCarrinhoVazio">Adicione itens</h3>


</div>`;
    somaTotal();
  } else {
    for (let i = 0; i < lista.length; i++) {
      ulCarrinho.append(carrinhoCompras(lista[i], i));
    }
    somaTotal();
  }
}

function somaTotal() {
  let ulCarrinho = document.querySelector(".carrinhoCompras");
  let nomeValorTotal = document.querySelector(".total");
  let quantItens = document.querySelector(".contador");

  nomeValorTotal.innerText = `Valor Total R$: ${carrinho
    .reduce((contador, element) => contador + element.price, 0)
    .toFixed(2)}`;

  quantItens.innerText = `Quantidade de Itens: ${carrinho.length}`;
}

function creatCard(lista) {
  let vitrine = document.querySelector(".vitrine");

  let lancheCard = document.querySelector(".lancheCard");
  let ulLanches = document.querySelector(".ulLanches");
  lancheCard.appendChild(ulLanches);

  for (let i = 0; i < lista.length; i++) {
    let lanche = lista[i];

    let image = lanche.image;
    let name = lanche.name;
    let type = lanche.type;
    let info = lanche.info;
    let price = lanche.price;

    let liLanches = document.createElement("li");
    liLanches.classList.add("liLanches");
    ulLanches.appendChild(liLanches);

    let divCardCompleto = document.createElement("div");
    divCardCompleto.classList.add("divCardCompleto");
    liLanches.appendChild(divCardCompleto);

    let divImg = document.createElement("div");
    divImg.classList.add("divImg");
    divCardCompleto.appendChild(divImg);

    let lancheImg = document.createElement("img");
    lancheImg.src = image;
    lancheImg.classList.add("image");
    divImg.appendChild(lancheImg);

    let cardInfoLanche = document.createElement("div");
    cardInfoLanche.classList.add("cardInfoLanche");
    divCardCompleto.appendChild(cardInfoLanche);

    let tipoLanche = document.createElement("p");
    tipoLanche.innerHTML = type;
    tipoLanche.classList.add("tipoLanche");
    cardInfoLanche.appendChild(tipoLanche);

    let nomeLanche = document.createElement("h2");
    nomeLanche.innerHTML = name;
    nomeLanche.classList.add("nomeLanche");
    cardInfoLanche.appendChild(nomeLanche);

    let infoLanche = document.createElement("p");
    infoLanche.innerHTML = info;
    infoLanche.classList.add("infoLanche");
    cardInfoLanche.appendChild(infoLanche);

    let precoLanche = document.createElement("h3");
    precoLanche.innerHTML = `R$ ${price}`;
    precoLanche.classList.add("precoLanche");
    cardInfoLanche.appendChild(precoLanche);

    let botaoAdicionar = document.createElement("button");
    botaoAdicionar.innerHTML = "Adicionar ao carrinho";
    botaoAdicionar.classList.add("botaoAdicionar");
    botaoAdicionar.id = lanche.id;
    cardInfoLanche.appendChild(botaoAdicionar);
  }
  let liLanches = document.querySelector(".liLanches");
  return liLanches;
}
creatCard(lanches);

function procuraLanche(id) {
  for (let i = 0; i < lanches.length; i++) {
    let lanche = lanches[i];
    if (lanche.id == id) {
      return lanche;
    }
  }

  return "Lanche não encontrado";
}

function carrinhoCompras(lanche, i) {
  let ulCarrinho = document.querySelector(".ulCarrinho");

  let liCarrinho = document.createElement("li");
  liCarrinho.classList.add("liCarrinho");
  ulCarrinho.appendChild(liCarrinho);

  let lancheImg = document.createElement("img");
  lancheImg.src = lanche.image;
  lancheImg.classList.add("image2");
  liCarrinho.appendChild(lancheImg);

  let divInfoLanche = document.createElement("div");
  divInfoLanche.classList.add("divInfoLanche");
  liCarrinho.appendChild(divInfoLanche);

  let nomeLanche = document.createElement("h2");
  nomeLanche.innerText = lanche.name;
  nomeLanche.classList.add("nomeLanche2");
  divInfoLanche.appendChild(nomeLanche);

  let precoLanche = document.createElement("h3");
  precoLanche.innerText = `R$ ${lanche.price}`;
  precoLanche.classList.add("precoLanche2");
  divInfoLanche.appendChild(precoLanche);

  let buttonRemover = document.createElement("button");
  buttonRemover.classList.add("botaoRemover");
  buttonRemover.innerText = "Remover";
  buttonRemover.id = i;

  liCarrinho.appendChild(buttonRemover);

  buttonRemover.addEventListener("click", function (e) {
    carrinho.splice(buttonRemover.id, 1);
    comprasCarrinho(carrinho);
  });

  return liCarrinho;
}

let botaoPesquisar = document.querySelector(".botaoPesquisar");
let barraPesquisar = document.querySelector(".barraPesquisar");

function pesquisaLanche(barraPesquisar) {
  let arr = [];
  for (let i = 0; i < lanches.length; i++) {
    let lanche = lanches[i];

    if (barraPesquisar == "") {
      arr.push(lanche)
    }

    if (lanche.type.toLowerCase().includes(barraPesquisar.toLowerCase())) {
      arr.push(lanche);
    }

    if (lanche.name.toLowerCase().includes(barraPesquisar.toLowerCase())) {
      arr.push(lanche);
    }
  }
  return arr;
}

botaoPesquisar.addEventListener("click", function (e) {
  let ulLanches = document.querySelector(".ulLanches");
  e.preventDefault();
  let busca = pesquisaLanche(barraPesquisar.value);
  ulLanches.innerHTML = "";
  creatCard(busca);
  console.log(busca);
});

document.querySelector("body");
let sectionInfos = document.querySelector("infos");
let valorTotal = document.querySelector(".valorTotal");

menuLink = document.querySelector(".divBotoes");

menuLink.addEventListener("click", function (e) {
  e.preventDefault(e);
  let desaparecer = document.querySelector(".ulLanches");
  let select = parseInt(e.target.id.slice(4));

  let separate = sanduiche(lanches);
  desaparecer.innerHTML = "";
  let separate2 = bebidas(lanches);
  desaparecer.innerHTML = "";
  let separate3 = outros(lanches);
 desaparecer.innerHTML = "";

  if (select == 1) {
    creatCard(lanches);
  }
  if (select == 2) {
    creatCard(separate);
  }
  if (select == 3) {
    creatCard(separate2);
  }
  if (select == 4) {
    creatCard(separate3);
  }
});

function sanduiche(lista) {
  let ulLanches = document.querySelector(".ulLanches");
  let sand = [];

  for (let i = 0; i < lista.length; i++) {
    let separar = lista[i];

    if (separar.type == "sanduiche") {
      sand.push(separar)
    }
  }
  return sand
}
sanduiche(lanches)



function bebidas(lista) {
  let ulLanches = document.querySelector(".ulLanches");
  let sand = [];

  for (let i = 0; i < lista.length; i++) {
    let separar = lista[i];

    if (separar.type == "bebidas") {
      sand.push(separar)
    }
  }
  return sand
}
bebidas(lanches)

function outros(lista) {
  let ulLanches = document.querySelector(".ulLanches");
  let sand = [];

  for (let i = 0; i < lista.length; i++) {
    let separar = lista[i];

    if (separar.type == "outros") {
      sand.push(separar)
    }
  }
  return sand
}
outros(lanches)

