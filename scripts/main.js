// Récupère les éléments nécessaires
const boutonClic = document.getElementById("boutonClic");
const containerPlusUn = document.getElementById("containerPlusUn");
const compteur = document.getElementById("nombreClics");
const boutonDesactiver = document.getElementById("desactiver");

let clics = 0; // Variable pour compter les clics

// Gestion du clic sur le bouton principal
boutonClic.addEventListener("click", (event) => {
  // Incrémente le compteur
  clics++;
  compteur.textContent = clics;

  // Crée un élément "+1"
  const plusUn = document.createElement("span");
  plusUn.textContent = "+1";
  plusUn.classList.add("plusUn");

  // Récupère les coordonnées du clic
  const rect = boutonClic.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  // Positionne le "+1" sur le bouton
  plusUn.style.position = "absolute";
  plusUn.style.left = `${clickX}px`;
  plusUn.style.top = `${clickY}px`;

  // Ajoute l'élément "+1" au conteneur
  boutonClic.appendChild(plusUn);

  // Supprime le "+1" après l'animation
  setTimeout(() => {
    plusUn.remove();
  }, 1000);
});

// Gestion du bouton "Remettre le compteur à 0"
boutonDesactiver.addEventListener("click", () => {
  clics = 0; // Réinitialise le compteur
  compteur.textContent = clics; // Met à jour l'affichage
});
