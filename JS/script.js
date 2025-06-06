document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.product-card');

    // Click alert
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Thank you for your interest! Visit us in-store to purchase.');
        });
    });

    window.filterProducts = function (category) {
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    };
});
