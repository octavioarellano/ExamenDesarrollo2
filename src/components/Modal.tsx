import { ReactNode } from 'react';
import type { DocumentType } from '../types';
import './Modal.css';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onDownload: () => void;
  isDownloading?: boolean;
  documentType?: DocumentType;
}

export function Modal({
  title,
  children,
  onClose,
  onDownload,
  isDownloading = false,
  documentType = 'cv',
}: ModalProps) {
  const downloadLabel =
    documentType === 'cv'
      ? '⬇️ Descargar (.docx)'
      : '⬇️ Descargar (.pdf)';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
          <button
            className="btn btn-primary"
            onClick={onDownload}
            disabled={isDownloading}
          >
            {isDownloading ? '⏳ Preparando...' : downloadLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
