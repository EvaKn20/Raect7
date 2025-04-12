import "./footerLinks.scss";
import phone from "../../assets/call.png";
import vk from "../../assets/vk.svg";
import telegram from "../../assets/tg.svg";

export default function FooterLinks() {
  return (
    <div className="footer_content_links">
      <div className="footer_links_number">
        <div className="title">
          <span className="footer_links_number_title">Номер для заказа</span>
        </div>
        <div className="number">
          <img src={phone} alt="phone" />

          <span className="footer_links_number_number">+7(930)833-38-11</span>
        </div>
      </div>
      <div className="footer_links_social">
        <div className="footer_links_social_title">
          <span className="footer_links_social_title_text">Мы в соцсетях</span>
        </div>
        <div className="footer_links_social_icons">
          <a href="#">
            <img src={vk} alt="vk" />
          </a>
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
}
