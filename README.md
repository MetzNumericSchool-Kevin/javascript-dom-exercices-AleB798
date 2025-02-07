[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2An2HWwO)
# Exercices sur les fonctions en JavaScript

- Écris toutes tes réponses dans le fichier `exercices.js`.
- Pour chaque exercice _(chaque sous-titre après le titre Exercices dans cet énoncé)_, fais un commit avec le titre de l'exercice.

## Rappels

- N'hésite pas à consulter tes notes de cours et la documentation en ligne.
- Utilise `console.log` ou le `debugger` de ton navigateur pour déboguer ton code.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu incarnes le sorcier Archibald 🧙‍♂️ qui gère une petite boutique de potions magiques 🧪.

## Exercices

### Quel est le titre de la boutique

**Objectif**: Apprendre à sélectionner un noeud HTML unique dans le DOM avec querySelector et à récupérer son contenu textuel.

**Instructions**:

- Utilise la méthode `querySelector` sur `document` pour récupérer le noeud HTML du titre `<h1>` et stocke-le dans une constante.
- Récupère le texte contenu dans ce noeud avec la propriété `textContent` et affiche sa valeur dans la `console`.

**Résultat attendu**: Le texte "Boutique d'Archibald le Sorcier de pacotille 🧙‍♂️" s'affiche dans la console du navigateur.

### Des informations manquent !

**Objectif**: Apprendre à créer et ajouter des noeuds HTML dans le DOM de manière dynamique.

**Instructions**:

- Tu dois ajouter un paragraphe qui contiendra une instruction d'aide à l'achat dans la description de ta boutique.
  - Utilise la méthode `querySelector` sur `document` pour récupérer le noeud HTML parent `<div id="description_boutique">` qui contient déjà un paragraphe de bienvenue, et stocke-le dans une constante.
  - Crée un nouveau noeud HTML de type paragraphe avec la méthode `createElement('p')` de `document`.
  - Ajoute le texte suivant `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.` en l'affectant à la propriété `textContent` du nouveau paragraphe.
  - Ajoute ce nouveau paragraphe comme enfant du noeud parent avec la méthode `appendChild`.

**Résultat attendu**: Un nouveau paragraphe apparaît sous le message de bienvenue avec les instructions d'achat.

### Roger, enfoiré !

**Objectif**: Apprendre à supprimer des noeuds HTML du DOM.

**Instructions**:
Roger, un collègue sorcier jaloux, a saboté le titre de ta boutique en ajoutant le mot "pacotille".

- Utilise `querySelector` sur `document` pour récupérer le noeud HTML `<span id="blague_de_roger_le_sorcier">` qui contient le texte indésirable.
- Supprime ce noeud du DOM avec la méthode `remove()`.

**Résultat attendu**: Le texte "de pacotille" disparaît du titre de la boutique, ne laissant que "Boutique d'Archibald le Sorcier 🧙‍♂️".

### Archibald n'est pas là, appelons le !

**Objectif**: Apprendre à gérer les événements de clic et à afficher des alertes dans le navigateur.

**Instructions**:

- Utilise `querySelector` sur `document` pour récupérer le noeud HTML du bouton `<button id="call_archibald">`.
- Attache un écouteur d'événement de type `click` à ce bouton avec la méthode `addEventListener`.
- Dans la fonction de rappel de l'événement (callback), utilise `alert` pour afficher le message `🧙‍♂️ J'arrive, j'arrive Aventurier !`.

**Résultat attendu**: Une boîte de dialogue apparaît avec le message quand on clique sur le bouton "Appeler Archibald".

### Faisons un peu de magie 🪄

**Objectif**: Apprendre à sélectionner plusieurs noeuds HTML et à modifier leurs styles dynamiquement.

**Instructions**:

Pour divertir l'Aventurier pendant ton arrivée, il peut jouer avec des boutons magiques qui changent la couleur des boîtes.

- Utilise `querySelectorAll` pour récupérer tous les noeuds HTML des boîtes (classe 'boite') à l'intérieur de la `<div id="boites_magique">`.
- Récupère chaque bouton de couleur avec `querySelector` (`#btn_change_red`, `#btn_change_blue`, `#btn_change_green`).
- Pour chaque bouton, attache un écouteur d'événement qui modifiera la propriété `style.backgroundColor` des boîtes appropriées.

**Résultat attendu**:

- Le bouton rouge change la couleur de fond de la première boîte en 'red'
- Le bouton bleu change la couleur de fond des deux premières boîtes en 'blue'
- Le bouton vert change la couleur de fond de toutes les boîtes en 'green'

### Aventurier, voici ma boutique !

**Objectif**: Apprendre à utiliser les templates HTML pour insérer des éléments plus complexes dans le DOM.

**Note**: Un exemple visuel d'une carte de potion est présent dans le HTML sous `<section id="liste_potions" class="row">`. Cet exemple est à ignorer, le vrai template à utiliser se trouve dans la balise `<template>` à la fin du document.

Récupérez cette liste de potions :

```js
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
```

- Pour chaque potion :
  - Utilise `querySelector` pour récupérer le contenant du noeud HTML de la liste des potions `<div id="liste_potions">`.
  - Les éléments à créer sont plus conséquents avec `createElement`. Nous allons donc plutôt utiliser les `template`. Vous trouverez celui d'une carte de potion dans l'HTML `<template id="template_potion">`
    - Utilise `querySelector` pour récupérer le template avec son id.
    - Clone le contenu dans une constante avec `.content.cloneNode(true);`.
  - À partir d'ici, remplace certains éléments HTML du template avec `querySelector` et `textContent`.
    - `<h5 class="nom_potion">` contient le nom de la potion.
    - `<span class="prix_potion"></span>` contient le prix de la potion.
    - `<p class="card-text description_potion">` contient la description de la potion.

**Résultat attendu**: Les deux cartes des potions sont affichées sous le titre "Les potions de la boutique".

### Plus de potions, nous avons besoin de plus de potions !

**Objectif**: Apprendre à manipuler les formulaires et à réutiliser du code existant pour ajouter dynamiquement du contenu à la page.

Un formulaire a été ajouté pour te permettre d'ajouter plus de potions à la boutique et se faire plus de sous !

- Utilise `querySelector` pour récupérer le formulaire `<form>` et affecte-le à une constante.
- Gère la soumission du formulaire en y attachant un évènement `submit`.
- Utilise l'objet `FormData` pour extraire les valeurs du formulaire.
  - `FormData` se crée avec le mot-clef `new` et tu peux y passer directement un `FormHtmlElement` (le formulaire que tu as affecté à ta constante). Par exemple : `const formData = new FormData(formHtmlElement)`.
  - Utilise la méthode `get` pour récupérer la valeur d'un champ de formulaire.
- Trouve un moyen pour réutiliser le code de l'exercice précédent avec une ou plusieurs fonctions, qui te permettra de rajouter cette nouvelle potion dans la boutique.

**Résultat attendu**: Quand le formulaire est soumis avec des valeurs valides, une nouvelle potion apparaît dans la boutique avec les informations saisies.
