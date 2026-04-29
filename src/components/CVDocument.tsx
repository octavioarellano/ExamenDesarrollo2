import type { PersonalInfo } from '../types';
import './DocumentPreview.css';

interface CVDocumentProps {
  data: PersonalInfo;
}

export function CVDocument({ data }: CVDocumentProps) {
  return (
    <div className="document-preview cv-document">
      <div className="cv-header">
        <div className="cv-name">{data.nombre} {data.apellido}</div>
        <div className="cv-profession">{data.profesion}</div>
        <div className="cv-contact">
          <span>{data.email}</span>
          <span>{data.telefono}</span>
          <span>{data.ciudad}, {data.pais}</span>
        </div>
      </div>

      <div className="cv-section">
        <div className="cv-section-title">Contacto</div>
        <div className="cv-item">
          <strong>Dirección:</strong> {data.direccion}<br />
          <strong>Ciudad:</strong> {data.ciudad}<br />
          <strong>País:</strong> {data.pais}
        </div>
      </div>

      {data.experiencia && (
        <div className="cv-section">
          <div className="cv-section-title">Experiencia Profesional</div>
          <div className="cv-item" style={{ whiteSpace: 'pre-wrap' }}>
            {data.experiencia}
          </div>
        </div>
      )}

      {data.educacion && (
        <div className="cv-section">
          <div className="cv-section-title">Educación</div>
          <div className="cv-item" style={{ whiteSpace: 'pre-wrap' }}>
            {data.educacion}
          </div>
        </div>
      )}

      {data.habilidades && (
        <div className="cv-section">
          <div className="cv-section-title">Habilidades</div>
          <div className="cv-tags">
            {data.habilidades.split(',').map((habilidad, index) => (
              <span key={index} className="cv-tag">
                {habilidad.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
