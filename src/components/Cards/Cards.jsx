import "./cards.scss";

export default function Cards({
  id,
  photo,
  title,
  grams,
  price,
  quantity,
  updateQuantity,
  stateBasket,
}) {
  const { basket, setBasket } = stateBasket;

  return (
    <div className="card">
      <div className="card_desc">
        <div className="card_desc_text">
          <div className="img">
            <img src={photo} alt="photo" />
          </div>
          <div className="desc">
            <div className="desc_title">
              <span>{title}</span>
              <span className="gr">{grams}г</span>
            </div>
            <div className="desc_price">
              <span>{price}₽</span>
            </div>
          </div>
        </div>
        <div className="card_desc_number">
          <div className="calcul">
            <button onClick={() => updateQuantity(id, -1, basket, setBasket)}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(id, 1, basket, setBasket)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
