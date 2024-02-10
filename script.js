document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
    fetch('/.netlify/functions/fetchItems')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('widget-container');
        data.forEach(item => {
            // Create container for each item
            const itemContainer = document.createElement('div');
            itemContainer.className = 'item';

            // Add image
            const img = document.createElement('img');
            img.src = item.fields.Image[0].url;
            img.className = 'item-image';
            itemContainer.appendChild(img);

            // Add badge
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.innerText = item.fields.Badge;
            itemContainer.appendChild(badge);

            // Add name
            const name = document.createElement('h2');
            name.className = 'item-name';
            name.innerText = item.fields.Name;
            itemContainer.appendChild(name);

            // Add location, price, ratings, reviews, and duration
            const details = document.createElement('p');
            details.className = 'item-details';
            details.innerHTML = `${item.fields.Location}<br>$${item.fields.Price}<br>${item.fields.Ratings} stars (${item.fields.Reviews} reviews)<br>Duration: ${item.fields.Duration}`;
            itemContainer.appendChild(details);

            // Click event for booking link
            itemContainer.addEventListener('click', () => {
                window.location.href = item.fields['Booking Link'];
            });
            itemContainer.style.cursor = 'pointer';

            // Append item to the container
            container.appendChild(itemContainer);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
