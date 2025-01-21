document.addEventListener('DOMContentLoaded', () => {
    const tourCarousel = document.getElementById('tour-carousel');
    const prevButton = document.getElementById('prev-tour');
    const nextButton = document.getElementById('next-tour');
    const tours = [
        { image: './res/tour1.jpg', location: 'New York', date: '2025-07-15', ticketId: 'tourTicket1' },
        { image: './res/tour2.jpg', location: 'Los Angeles', date: '2025-07-22', ticketId: 'tourTicket2' },
        { image: './res/tour3.jpg', location: 'Chicago', date: '2025-07-29', ticketId: 'tourTicket3' },
        { image: './res/tour4.jpg', location: 'London', date: '2025-08-05', ticketId: 'tourTicket4' },
    ];

    let currentIndex = 0;

    function updateCarousel() {
        tourCarousel.innerHTML = '';
        const tourItem = document.createElement('div');
        tourItem.classList.add('tour-item');
        tourItem.innerHTML = `
            <img src="${tours[currentIndex].image}" alt="Tour at ${tours[currentIndex].location}">
            <div class="tour-info">
                <h3>${tours[currentIndex].location}</h3>
                <p>${tours[currentIndex].date}</p>
                <button class="buy-ticket-button" data-ticket-id="${tours[currentIndex].ticketId}">Purchase Ticket</button>
            </div>
        `;
        tourCarousel.appendChild(tourItem);
    
        const buyTicketButton = tourItem.querySelector('.buy-ticket-button');
        buyTicketButton.addEventListener('click', () => {
            const ticketId = buyTicketButton.dataset.ticketId;
            window.location.href = `./shop.html?addToCart=${ticketId}`;
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + tours.length) % tours.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % tours.length;
        updateCarousel();
    });

    updateCarousel();
});