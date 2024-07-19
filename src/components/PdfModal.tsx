// components/Modal.tsx
import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc?: string;
  pdfUrl?: string;
}

const PdfModal: React.FC<ModalProps> = ({ show, onClose, imageSrc, pdfUrl }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-4 relative w-full max-w-4xl h-full md:max-w-6xl md:h-4/5">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800"
        >
          &times;
        </button>
        {pdfUrl ? (
          <div style={{ width: '100%', height: '100%' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdfUrl} />
            </Worker>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt="Modal Content"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default PdfModal;
