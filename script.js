document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
    fetch('/.netlify/functions/fetchItems')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.getElementById('widget-container');
        data.records.forEach(item => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = item.fields['Booking Link'];
            card.target = '_blank';

            const image = document.createElement('img');
            image.className = 'card-image';
            image.src = item.fields['Image'][0].url;
            card.appendChild(image);

            const body = document.createElement('div');
            body.className = 'card-body';
            card.appendChild(body);

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.fields['Name'];
            body.appendChild(title);

            const location = document.createElement('p');
            location.className = 'card-text';
            location.textContent = item.fields['Location'];
            body.appendChild(location);

            const duration = document.createElement('p');
            duration.className = 'card-text';
            duration.textContent = item.fields['Duration'] + ' • Skip the line';
            body.appendChild(duration);

            const rating = document.createElement('div');
            rating.className = 'card-rating';
            rating.textContent = '⭐ ' + item.fields['Ratings']; // Adjust according to how you want to display ratings
            body.appendChild(rating);

            const reviewCount = document.createElement('span');
            reviewCount.className = 'review-count';
            reviewCount.textContent = ` (${item.fields['Reviews']} reviews)`;
            rating.appendChild(reviewCount);

            const price = document.createElement('p');
            price.className = 'card-price';
            price.textContent = `From €${item.fields['Price']} per person`;
            body.appendChild(price);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
