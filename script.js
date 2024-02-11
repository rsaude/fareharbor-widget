document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
    fetch('/.netlify/functions/fetchItems')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('widget-container');
        data.forEach(item => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = item.fields['Booking Link']; // Make sure 'Booking Link' matches the field name in Airtable
            card.target = '_blank';
            card.style.textDecoration = 'none'; // Prevents the default underline style of links

            const image = document.createElement('img');
            image.className = 'card-image';
            image.src = item.fields.Image[0].url; // Adjust according to your actual field structure
            image.alt = item.fields.Name;
            card.appendChild(image);

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.fields.Name;
            card.appendChild(title);

            const location = document.createElement('p');
            location.className = 'card-text';
            location.textContent = item.fields.Location;
            card.appendChild(location);

            const duration = document.createElement('p');
            duration.className = 'card-text';
            duration.textContent = item.fields.Duration + ' • Skip the line';
            card.appendChild(duration);

            const rating = document.createElement('div');
            rating.className = 'card-rating';
            const stars = document.createElement('span');
            stars.className = 'stars';
            // Here you would generate the actual stars based on the rating number
            stars.textContent = '★★★★☆'; // For example purposes only
            rating.appendChild(stars);
            const ratingNumber = document.createElement('span');
            ratingNumber.className = 'rating-number';
            ratingNumber.textContent = `(${item.fields.Reviews})`;
            rating.appendChild(ratingNumber);
            card.appendChild(rating);

            const price = document.createElement('p');
            price.className = 'card-price';
            price.textContent = `From €${item.fields.Price} per person`;
            card.appendChild(price);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
