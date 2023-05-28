import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }: any) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  function handleClose() {
    setIsModalOpen(false);
    onClose();
  }

  return isModalOpen ? (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

export default Modal;
