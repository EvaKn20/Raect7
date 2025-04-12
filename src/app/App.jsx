import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import { useState } from "react";
import productServer from "../components/data/productServer.json";
import { useModal } from "../components/ContentModal/helper";
import getContentModal from "../components/ContentModal/getContentModal.jsx";
import ModalContainer from "../components/ModalContainer/ModalContainer";

export default function App() {
  const [basket, setBasket] = useState([]);
  const [product, setProduct] = useState(productServer);
  const [idShowModal, setIdShowModal] = useState(null);
  const stateBasket = { basket, setBasket };
  const stateProduct = { product, setProduct };

  const handleOpenModal = (modalId) => {
    setIdShowModal(modalId);
  };

  const handleCloseModal = () => {
    setIdShowModal(null);
  };

  return (
    <>
      <Header stateBasket={stateBasket} stateProduct={stateProduct} />
      <Main 
        stateBasket={stateBasket} 
        stateProduct={stateProduct} 
        onOpenModal={handleOpenModal}
      />
      <Footer />
      
      {idShowModal && (
        <ModalContainer isOpen={!!idShowModal} onClose={handleCloseModal}>
          {getContentModal(idShowModal, { onClose: handleCloseModal, stateBasket })}
        </ModalContainer>
      )}
    </>
  );
}
