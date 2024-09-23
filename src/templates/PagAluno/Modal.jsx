import React from "react";
import ReactDOM from "react-dom";

// Estilos simples para o modal
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    maxWidth: "90%",
  },
  closeButton: {
    backgroundColor: "#6c757d",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        {children}
        <button style={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
