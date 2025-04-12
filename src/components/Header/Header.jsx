import "./header.scss";
import logo from "../../assets/logo.png";
import burg_header from "../../assets/burg_header.png";
import HeaderText from "../HeaderText/HeaderText";
import { handleAddToCart } from "../ContentModal/helper";

export default function Header({ stateBasket, stateProduct }) {
  const { basket, setBasket } = stateBasket;
  const { product } = stateProduct;

  const handleAddExclusiveBurger = () => {
    const exclusiveBurger = product.burgers.items.find(item => item.id === "exclusive");
    if (exclusiveBurger) {
      handleAddToCart(basket, setBasket, exclusiveBurger, 1);
    }
  };

  return (
    <div className="wr_header">
      <div className="circle">
        <a href="#">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
        <div className="header_content">
          <div className="header_content_img">
            <img src={burg_header} alt="burger" />
          </div>
          <div className="header_content_text">
            <HeaderText />
            <button className="header_content_button" onClick={handleAddExclusiveBurger}>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
