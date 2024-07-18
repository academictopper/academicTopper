"use client";
import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, imageSrc }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-2 rounded-lg shadow-lg max-w-full max-h-full w-4/5 md:w-4/5 sm:w-1/3 h-4/5 md:h-4/5 sm:h-1/3 flex flex-col items-center justify-center overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-black bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl z-10"
        >
          &times;
        </button>
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={imageSrc}
            alt="Full Size"
            className="max-w-[50%] max-h-[40%] sm:max-w-[70%] sm:max-h-[60%] md:max-w-[80%] md:max-h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
