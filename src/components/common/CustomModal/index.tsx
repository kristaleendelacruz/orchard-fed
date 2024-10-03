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

  // I used React portal for the modal so that it is not contained in the container of the component that called it
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-wrapper transition-transform transform duration-300 ease-in-out scale-95 origin-center animate-modal-open"
        onClick={(e) => e.stopPropagation()}
      >
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
