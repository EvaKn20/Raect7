import "./info.scss";
import { useQuantity, handleAddToCart } from "./helper";

export default function Info({ photo, title, descr, sostav, grams, kal, price, id, stateBasket, onClose }) {
  const { basket, setBasket } = stateBasket;
  const { quantity, increment, decrement, reset } = useQuantity();

  const onAddToCart = () => {
    handleAddToCart(basket, setBasket, { id, title, price, photo, grams }, quantity);
    reset();
    onClose();
  };

  const totalPrice = price * quantity;

  return (
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <div className="modal_top">
      <button className="modal-close" onClick={onClose}>×</button>
      <div className="title">
        <span className="modal-title">{title}</span>
      </div>
      <div className="content">
        <div className="img">
          <img src={photo} alt={title} className="modal-image" />
        </div>
        <div className="descr">
          <div className="descr-top">
            <span className="descr-top-title">{descr}</span>
          </div>

          <div className="descr-bottom">
            <span className="sostav">Состав:</span>
            <div className="sotav-content">
              {sostav.map((item, index) => (
                <span key={index} className="sotav-content-item">
                  {item}
                </span>
              ))}
            </div>
            <span className="grams-kal">
              <span className="grams">{grams}г,</span>
              <span className="kal"> ккал {kal}</span>
            </span>
          </div>
        </div>
      </div>
    
      <div className="modal_bottom">
        <div className="modal-bottom-left">
          <button className="modal-bottom-left-button" onClick={onAddToCart}>
            Добавить
          </button>
          <div className="modal-bottom-left-text">
            <div className="calcul">
              <button disabled={quantity === 1} onClick={decrement}>-</button>
              <span>{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
          </div>
        </div>
        <div className="modal-bottom-rigth">
          <span>{totalPrice}₽</span>
        </div>
      </div>
    </div>
    </div>
  );
}