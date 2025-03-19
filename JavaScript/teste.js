function mostrarSecao(secao) {
    document.getElementById("campeoes").style.display = "none";
    document.getElementById("contato").style.display = "none";
    
    document.getElementById(secao).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const campeoes = [
        { name: "Ahri", role: "Mago", image: "Ahri_splash.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Ahri", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },

        ];
        const container = document.getElementById("champions-container");

    champions.forEach(champ => {
        let card = document.createElement("div");
        card.classList.add("champion-card");

        card.innerHTML = `
            <img src="${champ.image}" alt="${champ.name}">
            <div class="champion-info">
                <h3>${champ.name}</h3>
                <p>${champ.role}</p>
                <p>${champ.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
});