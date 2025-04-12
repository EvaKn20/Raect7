import "./productCard.scss";
import { useProductCard } from "./helper";

export default function ProductCard(props) {
  const { id, photo, title, grams, price, stateBasket, onOpenModal } = props;
  const { handleAddOneItem } = useProductCard(stateBasket);

  const handleOpenModal = () => {
    onOpenModal("info");
  };

  return (
    <div className="product_card">
      <div className="product_content">
        <div className="product_card_img" onClick={handleOpenModal}>
          <img src={photo} alt={title} />
        </div>
        <div className="product_card_info">
          <div className="product_card_info_top">
            <span className="product_card_price">{price}₽</span>
            <span className="product_card_title">{title}</span>
          </div>
          <div className="product_card_info_bottom">
            <span className="product_card_grams">{grams}г</span>
            <button className="product_card_button" onClick={() => handleAddOneItem(id, title, price, photo, grams)}>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
