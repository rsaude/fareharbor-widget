document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
    fetch('/.netlify/functions/fetchItems')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('widget-container');
        data.forEach(item => {
            const element = document.createElement('div');
            element.innerHTML = `
                <img src="${item.fields.Image[0].url}" alt="${item.fields.Name}">
                <h2>${item.fields.Name}</h2>
                <p>${item.fields.Location}</p>
                <p>$${item.fields.Price}</p>
                <p>${item.fields.Ratings} Stars (${item.fields.Reviews} Reviews)</p>
                <p>Duration: ${item.fields.Duration} seconds</p>
            `;
            element.className = 'widget-item';
            element.onclick = () => window.location.href = item.fields['Booking Link'];
            container.appendChild(element);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
