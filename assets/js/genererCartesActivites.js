document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("section.row");

  const sections = [
    { name: "aquarelle", label: "Aquarelle", image: "assets/img/Aquarelle.jpg" },
    { name: "art-du-fil", label: "Art du fil", image: "assets/img/Art-du-fil.jpg" },
    { name: "art-floral", label: "Art floral", image: "assets/img/Art-floral.jpeg" },
    { name: "travaux-manuels", label: "Travaux manuels", image: "assets/img/Travaux-manuels.jpg" },
    { name: "peinture-sur-soie", label: "Peinture sur soie", image: "assets/img/Peinture-sur-soie.jpeg" },
    { name: "yoga", label: "Yoga", image: "assets/img/Yoga.avif" },
    { name: "sophrologie", label: "Sophrologie", image: "assets/img/Sophrologie.png" },
    { name: "randonnée", label: "Randonnée", image: "assets/img/Randonnee.jpeg" },
    { name: "atelier-memoire", label: "Atelier Mémoire", image: "assets/img/Atelier-memoire.jpeg" },
    { name: "petanque", label: "Pétanque", image: "assets/img/Petanque.jpeg" },
    { name: "ludocordee", label: "LudoCordée", image: "assets/img/Ludo-Cordée.jpg" },
    { name: "mandala-sonore", label: "Mandala Sonore", image: "assets/img/Mandala-sonore.jpg" },
    { name: "fete-des-confitures", label: "Fête des confitures", image: "assets/img/Fete-des-confitures.jpg" }
  ];

  sections.forEach(({ name, label, image }) => {
    container.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${image}" class="section-img" alt="${label}" />
          <div class="card-body">
            <h5 class="card-title">${label}</h5>
            <p class="card-text">Découvrez nos activités de ${label.toLowerCase()}.</p>
            <a href="activite.html?name=${name}" class="btn btn-theme">En savoir plus</a>
          </div>
        </div>
      </div>
    `;
  });
});
