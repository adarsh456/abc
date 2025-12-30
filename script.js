document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipeSearch');
    const cards = document.querySelectorAll('.recipe-card');

    searchInput.addEventListener('input', (e) => {
        const filter = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.recipe-title').textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});