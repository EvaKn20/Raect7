import './ModalContainer.scss';

export default function ModalContainer({children, isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay2 ${isOpen ? "open" : ""}`} onClick={onClose}>
        {children}
      </div>
  );
}
