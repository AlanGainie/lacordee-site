document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  const content = document.getElementById("activity-content");
  const activite = activites[name];

  if (!activite) {
    content.innerHTML = "<p>Activité introuvable.</p>";
    return;
  }

  document.title = `${activite.title} - La Cordée`;

  content.innerHTML = `
    <h1 class="mb-4">${activite.title}</h1>
    <img src="${activite.image}" alt="${activite.title}" class="img-fluid mb-4 rounded shadow" />
    <p class="lead">${activite.description}</p>
    <a href="index.html" class="btn btn-secondary mt-3">← Retour à l’accueil</a>
  `;
});
