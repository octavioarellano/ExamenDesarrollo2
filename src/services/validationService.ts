import type { PersonalInfo, ValidationError } from '../types';

export class ValidationService {
  static validatePersonalInfo(data: Partial<PersonalInfo>): ValidationError[] {
    const errors: ValidationError[] = [];

    // Validaciones obligatorias
    if (!data.nombre || data.nombre.trim().length === 0) {
      errors.push({ field: 'nombre', message: 'El nombre es obligatorio' });
    }

    if (!data.apellido || data.apellido.trim().length === 0) {
      errors.push({ field: 'apellido', message: 'El apellido es obligatorio' });
    }

    if (!data.email || data.email.trim().length === 0) {
      errors.push({ field: 'email', message: 'El email es obligatorio' });
    } else if (!this.isValidEmail(data.email)) {
      errors.push({ field: 'email', message: 'El email no es válido' });
    }

    if (!data.telefono || data.telefono.trim().length === 0) {
      errors.push({ field: 'telefono', message: 'El teléfono es obligatorio' });
    } else if (!this.isValidPhone(data.telefono)) {
      errors.push({ field: 'telefono', message: 'El teléfono no es válido' });
    }

    if (!data.direccion || data.direccion.trim().length === 0) {
      errors.push({ field: 'direccion', message: 'La dirección es obligatoria' });
    }

    if (!data.ciudad || data.ciudad.trim().length === 0) {
      errors.push({ field: 'ciudad', message: 'La ciudad es obligatoria' });
    }

    if (!data.pais || data.pais.trim().length === 0) {
      errors.push({ field: 'pais', message: 'El país es obligatorio' });
    }

    if (!data.profesion || data.profesion.trim().length === 0) {
      errors.push({ field: 'profesion', message: 'La profesión es obligatoria' });
    }

    // Validaciones de longitud mínima
    if (data.nombre && data.nombre.length < 2) {
      errors.push({ field: 'nombre', message: 'El nombre debe tener al menos 2 caracteres' });
    }

    if (data.apellido && data.apellido.length < 2) {
      errors.push({ field: 'apellido', message: 'El apellido debe tener al menos 2 caracteres' });
    }

    // Validación de caracteres especiales en nombres
    if (data.nombre && !this.isValidName(data.nombre)) {
      errors.push({ field: 'nombre', message: 'El nombre contiene caracteres no permitidos' });
    }

    if (data.apellido && !this.isValidName(data.apellido)) {
      errors.push({ field: 'apellido', message: 'El apellido contiene caracteres no permitidos' });
    }

    return errors;
  }

  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
  }

  private static isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-']+$/;
    return nameRegex.test(name);
  }

  static getFieldError(errors: ValidationError[], field: string): string | null {
    const error = errors.find(e => e.field === field);
    return error ? error.message : null;
  }

  static hasErrors(errors: ValidationError[]): boolean {
    return errors.length > 0;
  }
}
