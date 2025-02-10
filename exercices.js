// ===== Quel est le titre de ta boutique ===== 

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


// ===== Archibald n'est pas là, appelons le ! ===== 

let callArchi = document.querySelector('#call_archibald')
callArchi.addEventListener('click', function() {
    alert('J\'arrive, j\'arrive Aventurier !')
});


// ===== Faisons un peu de magie =====

// On sélectionne toutes les boites ayant la classe .boite
let box = document.querySelectorAll('.boite')

// On récupère les boutons représentant les couleurs
// ensuite on place un écouteur d'event au click qui changera le fond de la boite ciblée (grâce à son index)
let redBtn = document.querySelector('#btn_change_red')
redBtn.addEventListener('click', function() {
    box[0].style.backgroundColor = 'red'
});

let blueBtn = document.querySelector('#btn_change_blue')
blueBtn.addEventListener('click', function() {
    box[1].style.backgroundColor = 'blue'
});

let greenBtn = document.querySelector('#btn_change_green')
greenBtn.addEventListener('click', function() {
    box[2].style.backgroundColor = 'green'
});




