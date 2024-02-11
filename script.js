.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.card-image {
  width: 100%;
  display: block;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
  background: white;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-info {
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.card-rating {
  color: #FFD700; /* or any color for the stars */
}

.card-price {
  color: #E91E63; /* or any color for the price */
  font-weight: bold;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
