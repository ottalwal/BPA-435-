document.addEventListener('DOMContentLoaded', () => {
    const memberCards = document.querySelectorAll('.member-card');

    memberCards.forEach(card => {
        card.addEventListener('click', () => {
            if ('ontouchstart' in window || navigator.maxTouchPoints) {
                card.classList.toggle('active-mobile');
            }
        });

        card.addEventListener('touchstart', () => {
            //Nothin
        });
    });
});