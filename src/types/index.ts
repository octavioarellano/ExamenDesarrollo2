export interface PersonalInfo {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  pais: string;
  profesion: string;
  experiencia?: string;
  educacion?: string;
  habilidades?: string;
}

export type DocumentType = 'cv' | 'card';

export interface ValidationError {
  field: string;
  message: string;
}
