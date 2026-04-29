import type { PersonalInfo } from '../types';
import './BusinessCard.css';

interface BusinessCardDocumentProps {
  data: PersonalInfo;
}

export function BusinessCardDocument({ data }: BusinessCardDocumentProps) {
  return (
    <div className="business-card-container">
      <div className="business-card">
        <div className="card-front">
          <div className="card-header">
            <div className="card-name">{data.nombre} {data.apellido}</div>
            <div className="card-profession">{data.profesion}</div>
          </div>

          <div className="card-details">
            <div className="card-detail">
              <span className="card-text">{data.email}</span>
            </div>
            <div className="card-detail">
              <span className="card-text">{data.telefono}</span>
            </div>
            <div className="card-detail">
              <span className="card-text">{data.ciudad}, {data.pais}</span>
            </div>
          </div>

          <div className="card-footer">
            <span>{new Date().toLocaleDateString('es-ES')}</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '12px', color: '#666' }}>
        <strong>Nota:</strong> Esta es una vista previa de la tarjeta de presentación. Al descargar se generará un archivo PowerPoint.
      </div>
    </div>
  );
}
