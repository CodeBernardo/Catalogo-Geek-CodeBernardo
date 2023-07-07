const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle PLaystation",
    price: "R$ 99,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price:  "R$ 700,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price:"R$ 870,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures"
  },
];

const actionFiguresArray = []
const paitingsArray = []

function separeteItems(itemsList) {
  for(let i=0; i<itemsList.length; i++) {
    if(itemsList[i].type === "Paintings") {
      paitingsArray.push(itemsList[i])
    } else if(itemsList[i].type === "Action Figures") {
      actionFiguresArray.push(itemsList[i])
    }
  }
}

separeteItems(productsArray)

let paintingsSection = document.querySelector(".paintings_list")
let actionFiguresSection = document.querySelector(".action_figures_list")
let actionFiguresList = document.querySelector('.action_figures_list')
let paitingList = document.querySelector('.paintings_list')

function insertItems(typeArray, list) {

  for(let i=0; i<typeArray.length; i++) {

    let createLi = document.createElement('li');
    createLi.className = 'item'
    list.appendChild(createLi)

    let createfigure = document.createElement('figure')
    createfigure.className = "item_img_container"
    createLi.appendChild(createfigure)

    let createImg = document.createElement('img')
    createImg.className = "item_figure"
    createImg.src = typeArray[i].image
    createImg.alt = `imagem de ${typeArray[i].name}`
    createfigure.appendChild(createImg)

    let createDiv = document.createElement('div')
    createDiv.className = "products_info"
    createfigure.appendChild(createDiv)

    let createFigcaption = document.createElement('figcaption')
    createFigcaption.className = 'item_name"'
    createFigcaption.innerText = typeArray[i].name
    createDiv.appendChild(createFigcaption)

    let createParagraph = document.createElement('p')
    createParagraph.className = "item_price"
    createParagraph.innerText = typeArray[i].price
    createDiv.appendChild(createParagraph)
  }
}

insertItems(paitingsArray, paitingList)
insertItems(actionFiguresArray, actionFiguresList)
