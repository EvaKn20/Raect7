import "./basket.scss";
import Free from "../../assets/free.png";
import Cards from "../Cards/Cards";
import { updateQuantity } from "./helper/helper.js";
import { useState } from "react";

export default function Basket({ stateBasket, onOpenModal }) {
  const { basket, setBasket } = stateBasket;
  const [isExpanded, setIsExpanded] = useState(false);

  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = basket.reduce(
    (sum, item) => sum + item.quantity * parseInt(item.price),
    0
  );
  const freeShipping = totalItems > 7 || totalPrice > 2500;

  const toggleBasket = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOrder = () => {
    if (totalItems > 0) {
      onOpenModal("delivery");
    }
  };

  return (
    <div className={`basket ${isExpanded ? "expanded" : ""}`}>
      <div className="basket_header" onClick={toggleBasket}>
        <span className="basket_title_text">Корзина</span>
        <div className="basket_title_number">
          <span className="number">{totalItems}</span>
        </div>
      </div>
      
      <div className="basket_content">
        {totalItems === 0 ? (
          <div className="empty_basket">
            <span>Тут пока пусто :(</span>
          </div>
        ) : (
          <>
            <div className="cards_container">
              <div className="cards">
                {basket.map((item) => (
                  <Cards
                    key={item.id}
                    {...item}
                    updateQuantity={updateQuantity}
                    stateBasket={stateBasket}
                  />
                ))}
              </div>
            </div>
            <div className="basket_footer">
              <div className="basket_price">
                <span>Итого</span>
                <span>{totalPrice}₽</span>
              </div>
              <button className="btn-orange" onClick={handleOrder}>Оформить заказ</button>
              <div className="free_shipping">
                {freeShipping && (
                  <div className="img_free">
                    <img src={Free} alt="free" />
                    <span>Бесплатная доставка</span>
                  </div>
                )}
                <div className="collapse_btn_container">
                  <button 
                    className="collapse_btn"
                    onClick={toggleBasket}
                  >
                    Свернуть
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
