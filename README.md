# Site statique de La Cordée

Ce dépôt contient le site statique de l'association **La Cordée**, développé en **HTML**, **CSS** et **JavaScript** vanilla.  
Le site présente les activités de l'association, un calendrier d'événements, ainsi qu’un système de personnalisation visuelle par **chartes graphiques**.

## 🌐 Structure du site

Voici un aperçu de l'arborescence du projet :

.\
├── index.html # Page d'accueil\
├── activite.html # Page listant les activités\
├── calendrier.html # Page des événements (avec calendrier)\
├── carrouselle.html # Carrousel (chargé dynamiquement)\
├── assets/\
│ ├── css/ # Feuilles de style\
│ │ └── style.css\
│ ├── js/ # Scripts JavaScript\
│ │ ├── activitesData.js\
│ │ ├── buttonTheme.js # Gestion du changement de thème (logo + favicon)\
│ │ ├── calendar.js \
│ │ ├── genererCartesActivites.js \
│ │ └── loadActivite.js
│ ├── img/ # Images utilisées dans le site \
│ │ ├── [images des activités : Aquarelle.jpg, Yoga.avif, etc.] \
│ │ ├── Chartre graphique - Dossier PNG/ \
│ │ │ ├── Icônes/ # Icônes (.png) déclinés par couleurs \
│ │ │ ├── Logos/ # Logos (.png) de l'association, selon les thèmes \
│ │ │ └── Motifs/ # Motifs visuels (.png) associés aux thèmes \
│ │ └── Objets promotionnels/ \
│ │ ├── Cup_lacordée.png, etc. \
│ └── pdf/ \
│ └── Chartre graphique - Dossier PDF/ \
│ ├── Couleurs/ # Palette PDF \
│ ├── Icônes/ # Icônes en .pdf \
│ ├── Logos/ # Logos en .pdf \
│ ├── Motifs/ # Motifs en .pdf \
│ └── Typos/ # Typographies utilisées (PDF) \


---

## 🎨 Personnalisation de la charte graphique

Le site propose plusieurs **chartes graphiques** via un sélecteur (`<select>`).  
Le script `buttonTheme.js` permet :

- Le **changement dynamique du logo** (dans la balise `<img id="main-logo">`).
- Le **changement de favicon**.
- La **persistance du thème sélectionné** via `localStorage`.

Thèmes disponibles :

- `bleu-rose`
- `bleu-vert`
- `jaune-bleu`
- `rose-bleu`
- `vert-bleu`

Tous les fichiers sont dans `assets/img/Chartre graphique - Dossier PNG/`.

---

## 📁 Pages principales

- `index.html` – Accueil du site.
- `activite.html` – Présentation des différentes sections de l'association.
- `calendrier.html` – Planning des événements à venir.
- `carrouselle.html` – Carrousel dynamique d’images, potentiellement intégré dans d'autres pages.

---

## 📌 Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript** (vanilla, sans framework)
- **Fetch API** pour chargement dynamique de contenus
- **`localStorage`** pour sauvegarder les préférences utilisateur

---

## 🚧 TODO (Améliorations prévues)

- Centralisation du système de thème (`themeManager.js`) avec gestion :
  - des logos
  - des favicons
  - des couleurs principales
- Intégration des motifs (`motif`) et couleurs dominantes dans les styles CSS
- Nettoyage automatique des chemins contenant des espaces
- Accessibilité : balises ARIA, contraste, tabulation

---

## 📄 Licence

Projet interne de l'association La Cordée – à usage non commercial.