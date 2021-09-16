import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BannerImage from '../components/BannerImage';
import ItemGrid from '../components/ItemGrid';
import main_items from '../assets/main-items.jpg';

function ItemsPage(props) {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios.get('http://localhost:3001/items').then((success) => {
      console.log(success.data);
      setItems(success.data);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="-mt-16 ItemsPage">
      <BannerImage text={'items'} image={main_items} />
      <div className="container py-24 mx-auto">
        <ItemGrid data={items} />
      </div>
    </div>
  );
}

export default ItemsPage;
