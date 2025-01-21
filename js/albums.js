document.addEventListener('DOMContentLoaded', () => {
    const albumsContainer = document.getElementById('albums-container');

    const albums = [
        {
            title: 'Death March',
            image: './res/album1.jpg',
            tracks: ['Bathroom Break', 'Brick Road', 'Battlefield', 'Ballroom'],
            price: 12.99
        },
        {
            title: 'Metamorphosis',
            image: './res/album2.jpg',
            tracks: ['Cocoon ', 'Chemical', 'Color ', 'Cafe Clover'],
            price: 14.99
        },
        {
            title: 'Cheap',
            image: './res/album3.jpg',
            tracks: ['Dirty', 'Deeds', 'Done', 'Dirt'],
            price: 15.99
        },
    ];

    let currentAlbumIndex = 0;

    function renderAlbum(index) {
        const album = albums[index];
        const albumSection = document.createElement('div');
        albumSection.classList.add('album-section');
        albumSection.innerHTML = `
            <div class="album-image">
                <img src="${album.image}" alt="${album.title}">
            </div>
            <div class="album-details">
                <h2>${album.title}</h2>
                <ul class="track-list">
                    ${album.tracks.map(track => `<li>${track}</li>`).join('')}
                </ul>
                <p>Price: $${album.price.toFixed(2)}</p>
                <button class="add-to-cart-album">Add to Cart</button>
            </div>
        `;
        albumsContainer.innerHTML = '';
        albumsContainer.appendChild(albumSection);
    }

    function handleScroll(event) {
        const deltaY = event.deltaY;
        if (deltaY > 50) {
            currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
            renderAlbum(currentAlbumIndex);
        } else if (deltaY < -50) {
            currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
            renderAlbum(currentAlbumIndex);
        }
    }

    albumsContainer.addEventListener('wheel', handleScroll);
    renderAlbum(currentAlbumIndex);
});