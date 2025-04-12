import { useState } from "react";

export const useProductCard = (stateBasket) => {
  const { basket, setBasket } = stateBasket;

  const handleAddOneItem = (id, title, price, photo, grams) => {
    const existingItem = basket.find(item => item.id === id);
    
    if (existingItem) {
      const updatedBasket = basket.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setBasket(updatedBasket);
    } else {
      const newItem = {
        id,
        title,
        price,
        photo,
        quantity: 1,
        grams
      };
      setBasket([...basket, newItem]);
    }
  };

  return {
    handleAddOneItem
  };
};
