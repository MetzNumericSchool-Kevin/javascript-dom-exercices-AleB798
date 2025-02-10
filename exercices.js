// ===== Quelle st le titre de ta boutique ===== 

let nameShop = document.querySelector('h1').textContent;
console.log(nameShop);

// ===== Des informations manquent ! ===== 

// On cible le parent qui contiendra le nouveau paragraphe
let shopDescription = document.querySelector('#description_boutique')
// On crée un nouvel élément P
let newElement = document.createElement("p")
// On précise le texte qui sera contenu dans le p grâce à textContent
newElement.textContent = 'Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l\'acheter.'
// On utilise la méthode appenchild() pour ajouter le nouvel élément à son parent en passant en paramètre le nouvel élément
shopDescription.appendChild(newElement)


// ===== Roger, enfoiré ! ===== 

let nameShoptoVerify = document.querySelector('h1')
let wordToDelete = document.querySelector('h1>span')
nameShoptoVerify.removeChild(wordToDelete)
