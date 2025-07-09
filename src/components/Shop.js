import React, { useEffect, useState } from 'react';
import './Shop.css'; // styling we'll create next

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  // Fetch inventory from your backend
  fetch('https://0245fd15347c.ngrok-free.app/inventory')
    .then(res => res.json())
    .then(data => setItems(data));
}, []);


  const updateCustomPrice = (index, price) => {
    const newItems = [...items];
    newItems[index].custom_price = parseFloat(price || 0);
    setItems(newItems);
  };

  return (
    <div className="shop-container">
      {items.map((item, idx) => (
        <div className="item-card" key={item.assetid}>
          <img
            src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
            alt={item.name}
          />
          <h3>{item.name}</h3>
          <p>Market Price: {item.market_price ? `$${item.market_price}` : 'N/A'}</p>
          <p>Your Price: ${item.custom_price || 0}</p>
          <input
            type="number"
            placeholder="Set price"
            onChange={(e) => updateCustomPrice(idx, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;
