import "./main.scss";
import Nav from "../Nav/Nav";
import Basket from "../Basket/Basket";
import Products from "../Products/Products";
import { useState } from "react";

export default function Main({ stateBasket, stateProduct, onOpenModal }) {
  const [navActive, setNavActive] = useState({ group: "burgers" });
  const stateNavActive = { navActive, setNavActive };
  
  return (
    <div className="wr_main">
      <Nav stateNavActive={stateNavActive} />
      <div className="main_content">
        <Basket 
          stateBasket={stateBasket}
          onOpenModal={() => onOpenModal("delivery")}
        />
        <Products 
          stateProduct={stateProduct} 
          navActive={navActive} 
          stateBasket={stateBasket}
          onOpenModal={() => onOpenModal("info")}
        />
      </div>
    </div>
  );
}
