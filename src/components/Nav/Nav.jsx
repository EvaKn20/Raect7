import "./nav.scss";
import burgersImg from "../../assets/burgers.svg";
import zakyskiImg from "../../assets/zakyski.svg";
import hotdogImg from "../../assets/hotdog2.svg";
import comboImg from "../../assets/kombo.svg";
import shawarmaImg from "../../assets/shaverma.svg";
import pizzaImg from "../../assets/pizza.svg";
import vokImg from "../../assets/vok.svg";
import desertsImg from "../../assets/deserts.svg";
import sauceImg from "../../assets/sous.svg";
import nav from "../../content/nav.json";

export default function Nav({ stateNavActive }) {
  const objImg = {
    burgersImg,
    zakyskiImg,
    hotdogImg,
    comboImg,
    shawarmaImg,
    pizzaImg,
    vokImg,
    desertsImg,
    sauceImg,
  };
  const { navActive, setNavActive } = stateNavActive;
  return (
    <div className="nav">
      {nav.map((item) => (
        <div
          className={`nav_item ${
            navActive.group === item.group ? "active" : ""
          }`}
          key={item.id}
          onClick={() => setNavActive(item)}
        >
          <img src={objImg[item.icon]} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
