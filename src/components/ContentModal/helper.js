import { useState } from "react";

export const useQuantity = (initialQuantity = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const reset = () => {
    setQuantity(initialQuantity);
  };

  return { quantity, increment, decrement, reset };
};

export const handleAddToCart = (basket, setBasket, item, quantity) => {
  const { id, title, price, photo, grams } = item;
  const existingItem = basket.find(item => item.id === id);
  
  if (existingItem) {
    const updatedBasket = basket.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setBasket(updatedBasket);
  } else {
    const newItem = {
      id,
      title,
      price,
      photo,
      quantity,
      grams
    };
    setBasket([...basket, newItem]);
  }
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return { isOpen, modalData, openModal, closeModal };
};
