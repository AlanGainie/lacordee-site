document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    const mainLogo = document.getElementById('main-logo');
    const favicon = document.getElementById('favicon');
    const footer = document.getElementById('site-footer');
    const header = document.getElementById('site-header');

    const logoPaths = {
        'bleu-rose': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo bleu sur fond rose.png',
        'bleu-vert': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo bleu sur fond vert.png',
        'jaune-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo jaune sur fond bleu.png',
        'rose-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo rose sur fond bleu.png',
        'vert-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo vert sur fond bleu.png'
    };

    const faviconPaths = {
        'bleu-rose': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône bleu.png',
        'bleu-vert': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône vert.png',
        'jaune-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône jaune.png',
        'rose-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône rose.png',
        'vert-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône vert.png'
    };

    // Couleurs de fond complémentaires pour le header selon le thème
    const headerBackgroundColors = {
        'bleu-rose': '#FFD700',     // jaune
        'bleu-vert': '#FF00FF',     // magenta
        'jaune-bleu': '#00008B',    // bleu foncé
        'rose-bleu': '#00FF00',     // vert
        'vert-bleu': '#FF00FF'      // magenta
    };

    function applyTheme(theme) {
        if (!theme) return;

        // Logo
        if (mainLogo && logoPaths[theme]) {
            mainLogo.src = logoPaths[theme];
        }

        // Favicon
        if (favicon && faviconPaths[theme]) {
            favicon.href = faviconPaths[theme];
        }

        // Footer classe
        if (footer) {
            footer.className = 'text-center py-4 border-top'; // reset
            footer.classList.add(`footer-${theme}`);
        }

        // Header classe et fond dynamique
        if (header) {
            header.className = 'text-white p-3 mb-4'; // reset classes
            header.classList.add(`header-${theme}`);

            // Appliquer couleur de fond selon le thème
            const bgColor = headerBackgroundColors[theme];
            header.style.backgroundColor = bgColor || '#333'; // fallback
        }

        // Sauvegarde
        localStorage.setItem('selectedTheme', theme);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme && logoPaths[savedTheme]) {
            themeSelector.value = savedTheme;
            applyTheme(savedTheme);
        } else {
            const defaultTheme = themeSelector ? themeSelector.value : 'bleu-rose';
            applyTheme(defaultTheme);
        }
    }

    if (themeSelector) {
        themeSelector.addEventListener('change', () => {
            const selected = themeSelector.value;
            applyTheme(selected);
        });
    }

    loadTheme();
});
