"use client";
import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
}
 
const Modal: React.FC<ModalProps> = ({ show, onClose, imageSrc })  => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl max-h-4xl w-4/5 h-4/5 flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-red-500 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl z-10"
        >
          &times;
        </button>
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={imageSrc}
            alt="Full Size"
            className="max-w-[80%] max-h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;