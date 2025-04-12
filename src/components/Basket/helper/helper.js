export const updateQuantity = (id, delta, basket, setBasket) => {
    const currentItemQuantity = basket.find((item) => item.id === id).quantity;
    if(currentItemQuantity === 1 && delta === -1){
        setBasket(basket.filter((item) => item.id !== id));
        return;
    }
    const array = basket.map((item) => {
        if (item.id === id) {
            return { ...item, quantity:  currentItemQuantity + delta };
        }
        return item;
    });
    setBasket(array);
};