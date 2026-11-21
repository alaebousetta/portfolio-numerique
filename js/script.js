// Checklist "Suis-je bien protégé ?" (page cybersécurité)

// On cherche le bouton grâce à son id
const bouton = document.getElementById("bouton-score");

// Le script est chargé sur toutes les pages, mais le bouton existe
// seulement sur la page cybersécurité : on vérifie qu'il existe
if (bouton) {
  // Quand on clique sur le bouton, on exécute cette fonction
  bouton.addEventListener("click", function () {
    // On récupère toutes les cases à cocher
    const cases = document.querySelectorAll(".regle");
    let score = 0;

    // On compte les cases cochées
    for (const uneCase of cases) {
      if (uneCase.checked) {
        score = score + 1;
      }
    }

    // On affiche un message selon le score
    const resultat = document.getElementById("resultat");
    const total = cases.length;

    if (score === total) {
      resultat.textContent = "Bravo, tu es bien protégé ! (" + score + "/" + total + ")";
    } else if (score >= total / 2) {
      resultat.textContent = "Pas mal, mais tu peux faire mieux. (" + score + "/" + total + ")";
    } else {
      resultat.textContent = "Attention, tu es en danger ! Relis les bonnes pratiques. (" + score + "/" + total + ")";
    }
  });
}
