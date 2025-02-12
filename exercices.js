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

// Le bouton rouge change la couleur de fond de la première boîte en 'red'
// Le bouton bleu change la couleur de fond des deux premières boîtes en 'blue'
// Le bouton vert change la couleur de fond de toutes les boîtes en 'green'

// On sélectionne toutes les boites ayant la classe .boite
let box = document.querySelectorAll('.boite')
console.log(box)

// On récupère les boutons représentant les couleurs
let redBtn = document.querySelector('#btn_change_red')
redBtn.addEventListener('click', function() {
    box[0].style.backgroundColor = 'red'
});

let blueBtn = document.querySelector('#btn_change_blue')
blueBtn.addEventListener('click', () => {
    for (i=0; i<2; i++) {
      box[i].style.backgroundColor = 'blue'
    }
});

let greenBtn = document.querySelector('#btn_change_green')
greenBtn.addEventListener('click', () => {
  box.forEach(element => {
    element.style.backgroundColor = 'green'
  });
});


// ===== Aventurier, voici ma boutique ! =====

const potions = [
    {
      nom: "Potion de soin",
      description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
      prix: 10,
    },
    {
      nom: "Potion de sommeil",
      description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
      prix: 50,
    },
  ];
// On récupère le conteneur dans lequel sera affiché les potions
let potionList = document.querySelector("#liste_potions")

// On récupère le template
let template = document.querySelector('#template_potion')

// On itère sur le tableau contenant les potions pour ajouter un nouveau template pour chaque potion
potions.forEach(potion => {
    // On clone le template et true sert à indiquer qu'on clone aussi tous ses enfants (pas seulement le conteneur)
    const potionElement = template.content.cloneNode(true);
  
    // On remplace les éléments dans le clone
    potionElement.querySelector(".nom_potion").textContent = potion.nom;
    potionElement.querySelector(".prix_potion").textContent = `${potion.prix} pièces d'or`;
    potionElement.querySelector(".description_potion").textContent = potion.description;
  
    // Grâce à appenChild on ajoute et affiche la nouvelle potion dans le conteneur
    potionList.appendChild(potionElement);
  });


// ===== Plus de potions, nous avons besoin de plus de potions ! ===== 

// On récupère le formulaire et on y rattache un event submit pour soumettre les données
const formAddPotion = document.querySelector('form')
console.log(formAddPotion)
formAddPotion.addEventListener('submit', (e)=>{
  e.preventDefault(); // Arrête le comportement par défaut et évite notamment le rechargement de la page

  // formData est un objet JavaScript qui permet de créer facilement un ensemble de données au format clé/valeur : utile pour envoyer des données de formulaire.
  // on passe en paramètre le formulaire ciblé
  const formData = new FormData(formAddPotion) 
  console.log(formData)

  // Récupération des valeurs d'un champ grâce à GET
  const potionName = formData.get('nom');
  const potionDescription = formData.get('description');
  const potionPrice = formData.get('prix');

  // Contrôle avant envoi + validation
  if (potionName && potionDescription && potionPrice) {
    // On créé la nouvelle potion
    const addNewPotion = {
      nom: potionName,
      description: potionDescription,
      prix: potionPrice
    };

    // On l'ajoute au tableaux des potions
    potions.push(addNewPotion);

    // On utilise la fonction addPotion pour ajout + affichage 
    addPotion(addNewPotion);

    // On reset le formulaire pour effacer les infos
    formAddPotion.reset()

  } else {
    alert('Veuillez vérifier que tous les champs soient bien remplis.');
  };
});


/* ------------------- function de création et affichage d'une nouvelle potion ------------------- */
function addPotion(potion) {
  let potionList = document.querySelector("#liste_potions")
  let template = document.querySelector('#template_potion')

  const potionElement = template.content.cloneNode(true);

  potionElement.querySelector(".nom_potion").textContent = potion.nom;
  potionElement.querySelector(".prix_potion").textContent = `${potion.prix} pièces d'or`;
  potionElement.querySelector(".description_potion").textContent = potion.description;

  potionList.appendChild(potionElement);
};




