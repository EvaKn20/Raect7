import "./footer.scss";
import logo2 from "../../assets/logo2.svg";
import FooterLinks from "../FooterLinks/FooterLinks";

export default function Footer() {
  return (
    <div className="wr_footer">
      <div className="footer_content">
        <div className="footer_content_logo">
          <div className="footer_content_logo_img">
            <a href="">
              <img className="img" src={logo2} alt="logo" />
            </a>
          </div>

          <div className="footer_content_logo_text">
            <a href="">© YouMeal, 2022</a>
            <a href="">Design: Anastasia Ilina</a>
          </div>
        </div>
        <div className="footer_content_links1">
          <FooterLinks />
        </div>

        <div className="footer_content_logo_text_mobile">
          <a href="">© YouMeal, 2022</a>
          <a href="">Design: Anastasia Ilina</a>
        </div>
      </div>
    </div>
  );
}
