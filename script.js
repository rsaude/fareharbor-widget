document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
    fetch('/.netlify/functions/fetchItems')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('widget-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const image = document.createElement('img');
            image.className = 'card-image';
            image.src = item.fields.Image;
            image.alt = item.fields.Name;

            const content = document.createElement('div');
            content.className = 'card-content';

            const title = document.createElement('h2');
            title.className = 'card-title';
            title.textContent = item.fields.Name;

            const info = document.createElement('p');
            info.className = 'card-info';
            info.textContent = `${item.fields.Duration} • ${item.fields.Location}`;

            const rating = document.createElement('p');
            rating.className = 'card-rating';
            rating.textContent = `⭐ ${item.fields.Ratings} (${item.fields.Reviews} reviews)`;

            const price = document.createElement('p');
            price.className = 'card-price';
            price.textContent = `From €${item.fields.Price} per person`;

            content.appendChild(title);
            content.appendChild(info);
            content.appendChild(rating);
            content.appendChild(price);
            card.appendChild(image);
            card.appendChild(content);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
