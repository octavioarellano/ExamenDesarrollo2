import { useState } from 'react';
import type { PersonalInfo, ValidationError } from '../types';
import { ValidationService } from '../services/validationService';
import './PersonalForm.css';

interface PersonalFormProps {
  onSubmit: (data: PersonalInfo) => void;
}

export function PersonalForm({ onSubmit }: PersonalFormProps) {
  const [formData, setFormData] = useState<Partial<PersonalInfo>>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    pais: '',
    profesion: '',
    experiencia: '',
    educacion: '',
    habilidades: '',
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    setErrors(prev => prev.filter(e => e.field !== name));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar datos
    const validationErrors = ValidationService.validatePersonalInfo(formData);

    if (ValidationService.hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    // Si no hay errores, enviar datos
    onSubmit(formData as PersonalInfo);
  };

  const getFieldError = (field: string): string | null => {
    return ValidationService.getFieldError(errors, field);
  };

  return (
    <form className="personal-form" onSubmit={handleSubmit}>
      <h2>Información Personal</h2>

      <div className="form-section">
        <h3>Datos Básicos</h3>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`form-input ${getFieldError('nombre') ? 'error' : ''}`}
              placeholder="Ej: Juan"
            />
            {getFieldError('nombre') && (
              <span className="error-message">{getFieldError('nombre')}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido *</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`form-input ${getFieldError('apellido') ? 'error' : ''}`}
              placeholder="Ej: Pérez"
            />
            {getFieldError('apellido') && (
              <span className="error-message">{getFieldError('apellido')}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${getFieldError('email') ? 'error' : ''}`}
              placeholder="ej: juan@example.com"
            />
            {getFieldError('email') && (
              <span className="error-message">{getFieldError('email')}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`form-input ${getFieldError('telefono') ? 'error' : ''}`}
              placeholder="Ej: +34 123 456 789"
            />
            {getFieldError('telefono') && (
              <span className="error-message">{getFieldError('telefono')}</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Ubicación</h3>

        <div className="form-group">
          <label htmlFor="direccion">Dirección *</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className={`form-input ${getFieldError('direccion') ? 'error' : ''}`}
            placeholder="Ej: Calle Principal 123"
          />
          {getFieldError('direccion') && (
            <span className="error-message">{getFieldError('direccion')}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad *</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className={`form-input ${getFieldError('ciudad') ? 'error' : ''}`}
              placeholder="Ej: Madrid"
            />
            {getFieldError('ciudad') && (
              <span className="error-message">{getFieldError('ciudad')}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="pais">País *</label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className={`form-input ${getFieldError('pais') ? 'error' : ''}`}
              placeholder="Ej: España"
            />
            {getFieldError('pais') && (
              <span className="error-message">{getFieldError('pais')}</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Profesión</h3>

        <div className="form-group">
          <label htmlFor="profesion">Profesión *</label>
          <input
            type="text"
            id="profesion"
            name="profesion"
            value={formData.profesion}
            onChange={handleChange}
            className={`form-input ${getFieldError('profesion') ? 'error' : ''}`}
            placeholder="Ej: Desarrollador Web"
          />
          {getFieldError('profesion') && (
            <span className="error-message">{getFieldError('profesion')}</span>
          )}
        </div>
      </div>

      <div className="form-section">
        <h3>Información Adicional (Opcional)</h3>

        <div className="form-group">
          <label htmlFor="experiencia">Experiencia Profesional</label>
          <textarea
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            className="form-input"
            placeholder="Describe tu experiencia profesional..."
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="educacion">Educación</label>
          <textarea
            id="educacion"
            name="educacion"
            value={formData.educacion}
            onChange={handleChange}
            className="form-input"
            placeholder="Describe tu formación académica..."
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="habilidades">Habilidades</label>
          <input
            type="text"
            id="habilidades"
            name="habilidades"
            value={formData.habilidades}
            onChange={handleChange}
            className="form-input"
            placeholder="Separa con comas: JavaScript, React, TypeScript, CSS"
          />
          <small>Separa las habilidades con comas</small>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        Continuar →
      </button>
    </form>
  );
}
