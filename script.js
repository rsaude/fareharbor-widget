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
           element.className = 'widget-item'; 

           element.innerHTML = ` 
               <div class="image-container">
                   <img src="${item.fields.Image[0].url}" alt="${item.fields.Name}">
               </div>
               <div class="details"> 
                   <h2>${item.fields.Name}</h2>
                   <div class="info">
                       <p>${item.fields.Location}</p>
                       <p class="price">$${item.fields.Price}</p>
                       <p>${item.fields.Ratings} Stars (${item.fields.Reviews} Reviews)</p>
                   </div>
                   <p class="duration">Duration: ${item.fields.Duration} seconds</p>
                   <span class="badge">Top Rated</span>
               </div>
           `;
           element.onclick = () => window.location.href = item.fields['Booking Link'];
           container.appendChild(element);
       });
   })
   .catch(error => console.error('Error fetching data:', error));
}
