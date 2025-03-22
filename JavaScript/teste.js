function mostrarSecao(secao) {
    document.getElementById("campeoes").style.display = "none";
    document.getElementById("contato").style.display = "none";
    
    document.getElementById(secao).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const campeoes = [
        { name: "Ahri", role: "Mago", image: "Ahri_splash.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Akali", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Aphelios", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Evelynn", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Gwen", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Hwei", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Irelia", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Lux", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Lillia", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Morgana", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Nilah", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Qiyana", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Samira", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Senna", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },
        { name: "Seraphine", role: "Mago", image: "images/ahri.jpg", description: "Uma vastaya com poderes encantadores." },

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