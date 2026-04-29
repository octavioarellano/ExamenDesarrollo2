import { useState } from 'react';
import { PersonalForm } from './components/PersonalForm';
import { CVDocument } from './components/CVDocument';
import { BusinessCardDocument } from './components/BusinessCardDocument';
import { Modal } from './components/Modal';
import type { PersonalInfo, DocumentType } from './types';
import { ExportService } from './services/exportService';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [documentType, setDocumentType] = useState<DocumentType>('cv');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
    setIsEditing(false);
  };

  const handleGenerateDocument = (type: DocumentType) => {
    if (!personalInfo) return;
    setDocumentType(type);
    setShowModal(true);
  };

  const handleDownload = async () => {
    if (!personalInfo) return;
    
    setIsDownloading(true);
    try {
      if (documentType === 'cv') {
        await ExportService.exportCVToDocx(personalInfo);
      } else {
        await ExportService.exportBusinessCardToPowerPoint(personalInfo);
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error al descargar:', error);
      alert('Hubo un error al descargar el documento. Por favor intenta de nuevo.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Generador de Documentos Personales</h1>
        <p>Captura tu información y tal</p>
      </header>

      <main className="app-main">
        <div className="container">
          {!personalInfo || isEditing ? (
            <PersonalForm onSubmit={handleFormSubmit} initialData={isEditing ? personalInfo : undefined} />
          ) : (
            <div className="document-section">
              <div className="info-display">
                <h2>Información Capturada</h2>
                <div className="info-card">
                  <p><strong>Nombre:</strong> {personalInfo.nombre} {personalInfo.apellido}</p>
                  <p><strong>Email:</strong> {personalInfo.email}</p>
                  <p><strong>Teléfono:</strong> {personalInfo.telefono}</p>
                  <p><strong>Profesión:</strong> {personalInfo.profesion}</p>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Información
                </button>
              </div>

              <div className="document-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => handleGenerateDocument('cv')}
                >
                  Generar Currículum
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGenerateDocument('card')}
                >
                  Generar Tarjeta
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {showModal && personalInfo && (
        <Modal
          title={documentType === 'cv' ? 'Currículum Vitae' : 'Tarjeta de Presentación'}
          onClose={() => setShowModal(false)}
          onDownload={handleDownload}
          isDownloading={isDownloading}
          documentType={documentType}
        >
          {documentType === 'cv' ? (
            <CVDocument data={personalInfo} />
          ) : (
            <BusinessCardDocument data={personalInfo} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
