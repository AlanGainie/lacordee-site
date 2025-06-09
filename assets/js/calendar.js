const events = [
    { date: "2025-06-10", title: "Atelier Aquarelle" },
    { date: "2025-06-12", title: "Séance Yoga" },
    { date: "2025-06-15", title: "Randonnée mensuelle" },
    { date: "2025-07-01", title: "Fête des confitures" },
    // ajoute ici les autres événements
];

function renderCalendar() {
    const container = document.getElementById('calendar');
    container.innerHTML = "";

    // Regrouper les événements par date
    const eventsByDate = {};
    events.forEach(e => {
        if (!eventsByDate[e.date]) eventsByDate[e.date] = [];
        eventsByDate[e.date].push(e.title);
    });

    const dates = Object.keys(eventsByDate).sort();

    dates.forEach(date => {
        const dateElem = document.createElement('h5');
        dateElem.textContent = new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        container.appendChild(dateElem);

        const ul = document.createElement('ul');
        ul.classList.add('list-group', 'mb-3');

        eventsByDate[date].forEach(title => {
            const li = document.createElement('li');
            li.textContent = title;
            li.classList.add('list-group-item');
            ul.appendChild(li);
        });

        container.appendChild(ul);
    });
}

window.onload = renderCalendar;