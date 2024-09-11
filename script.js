

function searchPlanet() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const planetSections = ['mercurio', 'venus', 'terra', 'marte', 'jupiter', 'saturno', 'urano', 'netuno'];

    // Remover o destaque de todos os planetas
    planetSections.forEach(planet => {
        document.getElementById(planet).classList.remove('highlight');
    });

    // Destacar o planeta pesquisado
    if (planetSections.includes(input)) {
        const planetElement = document.getElementById(input);
        planetElement.scrollIntoView({ behavior: 'smooth' });
        planetElement.classList.add('highlight');
    } else {
        alert('Planeta não encontrado');
    }
}