import "./delivery.scss";
import { useState } from "react";
import donut from "../../assets/donut.png";

export default function Delivery({ basket, setBasket, onClose }) {
  const initialFormData = {
    name: "",
    phone: "",
    address: "",
    floor: "",
    doorbell: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [deliveryMethod, setDeliveryMethod] = useState("Доставка");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  return (
    <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
      <div className="modal-left">
        <div className="modal-left-img">
          <img src={donut} alt="donut" />
        </div>
      </div>
      <div className="modal-right">
        <div className="modal_top2">
          <button className="modal-close2" onClick={onClose}>×</button>
          <div className="title2">
            <span className="modal-title">Доставка</span>
          </div>
        
          <form onSubmit={handleSubmit} className="order-form">
            <div className="modal-right-content">
              <div className="form-group1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Телефон"
                  required
                />
              </div>
              <div className="form-group2">
                <label>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="Самовывоз"
                    checked={deliveryMethod === "Самовывоз"}
                    onChange={handleDeliveryChange}
                  />
                  Самовывоз
                </label>
                <label>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="Доставка"
                    checked={deliveryMethod === "Доставка"}
                    onChange={handleDeliveryChange}
                  />
                  Доставка
                </label>
              </div>
              {deliveryMethod === "Доставка" && (
                <div className="form-group3">
                  <div className="form-group3-input">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Улица, дом, квартира"
                    required
                  />
                  </div>
                  <div className="form-group3-input1">
                    <input
                      type="text"
                      name="floor"
                      value={formData.floor}
                      onChange={handleChange}
                      placeholder="Этаж"
                    />
                    <input
                      type="text"
                      name="doorbell"
                      value={formData.doorbell}
                      onChange={handleChange}
                      placeholder="Домофон"
                    />
                  </div>
                  </div>
              )}
              <button type="submit" className="modal-bottom-left-button">
                Оформить заказ
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
}