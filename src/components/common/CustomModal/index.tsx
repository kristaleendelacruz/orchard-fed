import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const CustomModal = ({ isOpen, onClose, content }: IProps) => {
  useEffect(() => {
    if (isOpen) {
      // Set overflow hidden when modal is opened
      document.body.style.overflow = 'hidden';
    } else {
      // Remove overflow setting is modal is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to remove body scroll lock on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <div className="modal-content">{content}</div>
      </div>
    </div>,
    document.getElementById('modal-root')! // This is added in index.html
  );
};

export default CustomModal;
