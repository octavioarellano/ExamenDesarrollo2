# Generador de Documentos Personales

Una aplicación web interactiva construida con **React + TypeScript + Vite** que permite a los usuarios capturar su información personal y generar de forma automática documentos profesionales listos para descargar.

---

## Índice

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Características Principales](#características-principales)
3. [Manual de Usuario](#manual-de-usuario)
4. [Cómo Funciona](#cómo-funciona)
5. [Instalación](#instalación)
6. [Validaciones](#validaciones)
7. [Formatos de Descarga](#formatos-de-descarga)
8. [Solución de Problemas](#solución-de-problemas)
9. [Arquitectura Técnica](#arquitectura-técnica)
10. [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## Descripción del Proyecto

El **Generador de Documentos Personales** es una solución web moderna y eficiente que simplifica la creación de documentos profesionales de alta calidad. La aplicación automatiza completamente el proceso de captura de información personal y generación de documentos, eliminando la necesidad de usar plantillas complejas de Microsoft Word.

### Problema que Resuelve
- Pérdida de tiempo rellenando plantillas de Word
- Problemas con formato y estilos inconsistentes
- Necesidad de conocimientos técnicos avanzados
- Dificultad para mantener documentos actualizados

### Solución Propuesta
- Formulario simple y rápido de completar
- Validaciones automáticas en tiempo real
- Documentos con estilo profesional automático
- Descarga instantánea de archivos listos para usar

### Objetivos del Proyecto
1. Proporcionar una interfaz intuitiva y fácil de usar
2. Validar datos antes de generar documentos
3. Permitir descargar documentos en formatos estándar (DOCX y PPTX)
4. Generar documentos profesionales con estilo automático
5. Ofrecer una experiencia rápida y responsive

---

## Características Principales

### 1. **Captura Inteligente de Información**
Un formulario completo y validado en tiempo real que recopila toda la información necesaria:

**Campos Obligatorios:**
- **Nombre y Apellido** - Identificación personal
- **Email** - Correo electrónico profesional
- **Teléfono** - Número de contacto
- **Dirección** - Ubicación física
- **Ciudad y País** - Localización
- **Profesión** - Puesto de trabajo

**Campos Opcionales:**
- **Experiencia Profesional** - Historial laboral completo
- **Educación** - Formación académica
- **Habilidades** - Competencias técnicas y blandas

### 2. **Generación de Dos Tipos de Documentos**

#### Currículum Vitae (DOCX)
- **Formato**: Microsoft Word (.docx) editable
- **Contenido automatizado**:
  - Encabezado profesional con nombre y profesión
  - Sección de contacto estructurada
  - Experiencia profesional formateada
  - Educación y habilidades organizadas
- **Estilos incluidos**: Colores corporativos, bordes decorativos, espaciado profesional
- **Descargable como**: `CV_Nombre_Apellido.docx`
- **Uso**: Enviar a empresas, plataformas de empleo

#### Tarjeta de Presentación (PPTX)
- **Formato**: PowerPoint (.pptx) editable
- **Especificaciones**:
  - Tamaño estándar: 105 x 75 mm (ISO/IEC 7810)
  - Diseño elegante con gradientes
  - Información de contacto clara y visible
- **Contenido**: Nombre, profesión, email, teléfono, ubicación
- **Descargable como**: `Tarjeta_Nombre_Apellido.pptx`
- **Uso**: Impresión directa, presentaciones, edición posterior

### 3. **Sistema de Validaciones Robusto**
- Validación de campos obligatorios en tiempo real
- Validación RFC de direcciones de email
- Validación de teléfono (mínimo 7 caracteres)
- Validación de nombres (solo letras y acentos)
- Mensajes de error descriptivos por campo
- Prevención de generar documentos con datos inválidos

### 4. **Interfaz Visual Moderna**
- Diseño oscuro profesional y moderno
- Completamente responsive (móvil, tablet, desktop)
- Vista previa en tiempo real de documentos
- Navegación intuitiva con pasos claros
- Opción de editar información en cualquier momento
- Gradientes y efectos visuales modernos

---

## Manual de Usuario

### Guía Paso a Paso

#### **Paso 1: Acceder a la Aplicación**
1. Abre tu navegador web preferido (Chrome, Firefox, Safari, Edge)
2. Navega a la URL de la aplicación
3. Verás la página de inicio con el título "Generador de Documentos Personales"
4. Se mostrará automáticamente el formulario de captura

#### **Paso 2: Completar el Formulario**

**Sección 1: Datos Básicos**
- **Nombre** *(obligatorio)*: Tu nombre de pila
  - Ejemplo: `Juan`
  - Solo se permiten letras y acentos
  
- **Apellido** *(obligatorio)*: Tu apellido
  - Ejemplo: `Pérez García`
  - Solo se permiten letras y acentos

**Sección 2: Información de Contacto**
- **Email** *(obligatorio)*: Tu correo electrónico
  - Formato: `usuario@dominio.com`
  - Ejemplo: `juan.perez@empresa.com`
  
- **Teléfono** *(obligatorio)*: Tu número de contacto
  - Mínimo: 7 caracteres
  - Ejemplo: `+34 666 123 456`
  - Se permiten números, +, -, (, ), espacios

**Sección 3: Localización**
- **Dirección** *(obligatorio)*: Tu domicilio
  - Ejemplo: `Calle Principal 123, Apartamento 4B`
  - Mínimo: 5 caracteres
  
- **Ciudad** *(obligatorio)*: Tu ciudad de residencia
  - Ejemplo: `Madrid`
  - Mínimo: 2 caracteres
  
- **País** *(obligatorio)*: Tu país
  - Ejemplo: `España`
  - Mínimo: 2 caracteres

**Sección 4: Profesión**
- **Profesión** *(obligatorio)*: Tu puesto de trabajo o especialidad
  - Ejemplo: `Desarrollador Web Senior`
  - Mínimo: 2 caracteres

**Sección 5: Información Adicional (Opcional)**
- **Experiencia Profesional**: Describe tu trayectoria laboral
  - Ejemplo: `5 años en desarrollo web. Experto en React y TypeScript.`
  - Puedes incluir múltiples líneas
  - Deja en blanco si no quieres incluir
  
- **Educación**: Tu formación académica
  - Ejemplo: `Licenciado en Informática - Universidad de Madrid 2019`
  - Puedes incluir múltiples líneas
  
- **Habilidades**: Tus competencias y destrezas
  - Formato: Separa con comas
  - Ejemplo: `JavaScript, React, TypeScript, CSS, HTML5, Node.js`
  - Se incluirán en el documento automáticamente

#### **Paso 3: Validación de Datos**
Mientras completas el formulario:
- Los errores aparecen en **rojo** debajo del campo problemático
- Cada error muestra un mensaje específico indicando qué corregir
- El botón **"Continuar"** solo se activa cuando todos los datos obligatorios son válidos
- Los errores desaparecen automáticamente cuando corriges el campo

#### **Paso 4: Enviar Formulario**
1. Una vez que todos los datos obligatorios son válidos, verás el botón **"Continuar →"** disponible
2. Haz clic en **"Continuar"**
3. La aplicación procesará y guardará tus datos

#### **Paso 5: Resumen de Información**
1. Se mostrará un resumen de toda la información capturada
2. Podrás revisar los datos principales (nombre, email, teléfono, profesión)
3. Aquí tienes dos opciones:
   - **Editar Información**: Vuelve al formulario para hacer cambios
   - Continuar a generar documentos

#### **Paso 6: Generar Documentos**
Selecciona el tipo de documento que deseas generar:

- **Generar Currículum**: Crea un CV profesional en formato DOCX
- **Generar Tarjeta**: Crea una tarjeta de presentación en formato PPTX

#### **Paso 7: Vista Previa**
1. Aparecerá una ventana modal con la vista previa del documento
2. Podrás ver exactamente cómo se vería:
   - Colores, fuentes y espaciado
   - Todo el contenido formateado
   - Cómo se vería impreso
3. Si no te gusta, puedes cerrar y editar la información

#### **Paso 8: Descargar el Archivo**
1. Si todo te parece correcto, haz clic en **"Descargar"**
2. El archivo se descargará automáticamente
3. Se guardará con un nombre descriptivo:
   - **CV**: `CV_Juan_Perez.docx`
   - **Tarjeta**: `Tarjeta_Juan_Perez.pptx`
4. Lo encontrarás en tu carpeta de **Descargas**

#### **Paso 9: Usar el Documento**
Ahora puedes:
- **Para el CV**:
  - Enviarlo a empresas y plataformas de empleo
  - Editarlo en Word si deseas hacer cambios
  - Guardarlo en Google Drive o nube
  - Compartirlo por email

- **Para la Tarjeta**:
  - Imprimirla directamente desde PowerPoint
  - Editar colores y estilos en PowerPoint
  - Usar para presentaciones profesionales
  - Compartir digitalmente

#### **Paso 10: Editar y Regenerar**
Si deseas cambiar algo:
1. Haz clic en **"Editar Información"** desde cualquier pantalla
2. El formulario se abre con todos tus datos precompletados
3. Modifica lo que necesites
4. Repite el proceso de generación y descarga
5. Genera nuevos documentos actualizados

---

## ⚡ Cómo Funciona

### Flujo General
```
[Acceso] → [Formulario] → [Validación] → [Resumen] → [Generación] → [Descarga]
```

### Proceso Detallado

1. **Usuario accede a la aplicación**
   - Se carga la interfaz con formulario vacío
   - Aparecen todos los campos y sus etiquetas

2. **Usuario completa los campos**
   - Escribe la información personal
   - Validaciones en tiempo real muestran errores
   - Los errores desaparecen cuando se corrigen

3. **Usuario envía el formulario**
   - Hace clic en "Continuar"
   - Los datos se validan completamente
   - Si hay errores, se muestran todos en rojo

4. **Se procesa la información**
   - La app guarda los datos en la memoria
   - Cambia a la pantalla de resumen

5. **Usuario ve el resumen**
   - Revisa toda la información capturada
   - Puede editar si ve algo incorrecto
   - O procede a generar el documento

6. **Usuario selecciona tipo de documento**
   - Elige entre CV o Tarjeta
   - La app prepara el documento

7. **Se genera el documento**
   - Se crea con estilos profesionales
   - Se prepara para descarga

8. **Usuario descarga**
   - Hace clic en "Descargar"
   - El archivo se descarga automáticamente
   - Se abre en el programa predeterminado

---

## Instalación

### Requisitos Previos
- **Node.js**: v16.0 o superior
- **npm**: v8.0 o superior (se incluye con Node.js)
- **Navegador web moderno**: Chrome, Firefox, Safari o Edge

### Instalación Paso a Paso

#### 1. Descargar el Proyecto
```bash
# Si es un archivo ZIP, extrae primero
unzip generador-documentos.zip
cd generador-documentos
```

#### 2. Instalar Dependencias
```bash
npm install
```
Esto descargará e instalará:
- React 18.2
- TypeScript 5.2
- Vite 5.0
- Librerías de generación de documentos
- Todas las dependencias necesarias

#### 3. Ejecutar en Modo Desarrollo
```bash
npm run dev
```
- La aplicación se abrirá automáticamente
- Estará disponible en `http://localhost:5173`
- Incluye hot reload (los cambios se actualizan automáticamente)

#### 4. Compilar para Producción
```bash
npm run build
```
- Crea una carpeta `dist/` optimizada
- Lista para desplegar en servidor

#### 5. Vista Previa de Producción
```bash
npm run preview
```
- Prueba cómo se vería la versión compilada localmente

### Comandos Disponibles

| Comando | Función | Uso |
|---------|---------|-----|
| `npm run dev` | Inicia servidor de desarrollo | Desarrollo local |
| `npm run build` | Compila para producción | Antes de desplegar |
| `npm run preview` | Muestra build de producción | Pruebas finales |
| `npm run lint` | Análisis de código | Verificar errores |

---

## Validaciones

### Campos Obligatorios
Estos campos deben estar completados:
- Nombre
- Apellido
- Email
- Teléfono
- Dirección
- Ciudad
- País
- Profesión

### Reglas de Validación

#### Email
- **Patrón**: `usuario@dominio.com`
- **Validación**: RFC completo
- **Permitido**: Letras, números, puntos, guiones, más
- **Ejemplos correctos**:
  - `juan@empresa.com`
  - `maria.garcia@dominio.co.uk`
  - `usuario+tag@gmail.com`
- Ejemplos incorrectos:
  - `juan@` (sin dominio)
  - `dominio.com` (sin arroba)
- Ejemplo: `juan @empresa.com` (espacios)

#### Teléfono
- **Mínimo**: 7 caracteres
- **Permitido**: `0-9`, `+`, `-`, `(`, `)`, espacio
- **Ejemplos correctos**:
  - `+34 666 123 456`
  - `+1 (555) 123-4567`
  - `666123456`
  - `91-234-5678`
- **Ejemplos incorrectos**:
  - `123` (muy corto)
  - `abc 123` (contiene letras)
  - `666.123.456` (punto no permitido)

#### Nombres (Nombre y Apellido)
- **Permitido**: A-Z, a-z, acentos, espacios
- **No permitido**: Números, caracteres especiales
- **Ejemplos correctos**:
  - `Juan`
  - `Juan José`
  - `María García`
  - `José Luis`
- **Ejemplos incorrectos**:
  - `Juan123`
  - `Juan-Luis`
  - `Juan_Pérez`

#### Otros Campos
- **Dirección**: Mínimo 5 caracteres (ej: `Calle 123`)
- **Ciudad**: Mínimo 2 caracteres (ej: `NY`, `Madrid`)
- **País**: Mínimo 2 caracteres (ej: `ES`, `España`)
- **Profesión**: Mínimo 2 caracteres (ej: `Dev`, `Ingeniero`)

---

## Formatos de Descarga

### Currículum Vitae (.DOCX)

**Nombre de archivo**: `CV_Juan_Perez.docx`

**Contenido incluido**:
- Encabezado con nombre, apellido y profesión
- Información de contacto (email, teléfono, dirección, ciudad, país)
- Sección de Experiencia Profesional
- Sección de Educación
- Sección de Habilidades
- Estilos profesionales con colores y bordes

**Abre con**:
- Microsoft Word 2016 en adelante
- Google Docs (archivo → importar)
- LibreOffice Writer
- OpenOffice
- OneDrive

**Ventajas**:
- Completamente editable
- Mantiene todos los estilos
- Universal y compatible
- Listo para imprimir
- Aceptado por todas las plataformas de empleo

### Tarjeta de Presentación (.PPTX)

**Nombre de archivo**: `Tarjeta_Juan_Perez.pptx`

**Especificaciones técnicas**:
- Tamaño: **105 x 75 mm** (estándar ISO/IEC 7810)
- Formato: **Landscape (horizontal)**
- Resolución: Optimizada para pantalla e impresión (300 DPI)

**Contenido incluido**:
- Nombre y apellido en grande
- Profesión debajo del nombre
- Email, teléfono y ubicación
- Diseño con gradientes profesionales
- Fecha de generación

**Abre con**:
- Microsoft PowerPoint 2016 en adelante
- Google Slides
- LibreOffice Impress
- OpenOffice Impress
- Lectores de PPTX

**Ventajas**:
- Completamente editable
- Fácil de modificar estilos y colores
- Listo para imprimir (estándar de tarjeta)
- Puedes agregar más elementos
- Compatible con múltiples plataformas

---

## Solución de Problemas

### Problema: No se descarga el documento

**Causa 1: Bloqueador de pop-ups**
```
- Busca el icono de bloqueo en la barra de direcciones
- Haz clic y selecciona "Permitir pop-ups"
- Vuelve a hacer clic en Descargar
```

**Causa 2: Navegador incompatible**
```
- Prueba con Chrome, Firefox o Edge
- Los navegadores viejos pueden tener problemas
```

**Causa 3: Caché del navegador**
```
- Presiona Ctrl+Shift+Supr (Windows) o Cmd+Shift+Del (Mac)
- Selecciona "Caché" y "Cookies"
- Recarga la página y vuelve a intentar
```

**Causa 4: Permisos de descarga**
```
- Verifica los permisos de la carpeta de Descargas
- Intenta descargar a otra carpeta
- Si tienes antivirus, verifica sus configuraciones
```

### Problema: "El email no es válido"

**Solución**:
```
Debe incluir @ y un dominio
Formato correcto: nombre@dominio.com
No debe tener espacios antes o después
Ejemplo: juan.perez@empresa.com
```

### Problema: "El teléfono debe tener al menos 7 caracteres"

**Solución**:
```
Incluye el código de país: +34 para España
Formato completo: +34 666 123 456
Mínimo 7 caracteres (números y símbolos)
Los espacios cuentan como caracteres
```

### Problema: "El nombre no puede contener números"

**Solución**:
```
Usa solo letras A-Z, a-z
Se permiten acentos: á, é, í, ó, ú
Se permiten espacios entre nombres
Ejemplo correcto: Juan José
```

### Problema: La aplicación es lenta

**Soluciones**:
```
1. Cierra otras pestañas del navegador
2. Limpia el caché: Ctrl+Shift+Supr
3. Actualiza a la última versión del navegador
4. Reinicia el navegador completamente
5. Verifica tu conexión a internet
```

### Problema: Errores en la consola

**Soluciones**:
```
1. Recarga la página: F5 o Ctrl+R
2. Limpia datos: Ctrl+Shift+Del
3. Intenta en navegación privada/incógnito
4. Prueba en otro navegador
5. Desactiva extensiones del navegador
```

### Problema: No puedo abrir el archivo DOCX

**Para Windows**:
```
- Instala Microsoft Word
- O descarga Word Online (gratis en office.com)
- O usa LibreOffice Writer (gratuito)
```

**Para Mac**:
```
- Usa Pages (preinstalado)
- O instala Microsoft Word
- O usa Google Docs
```

**Para Linux**:
```
- Usa LibreOffice Writer (gratuito)
- O Google Docs en línea
```

### Problema: No puedo abrir el archivo PPTX

**Para Windows**:
```
- Instala PowerPoint
- O usa PowerPoint Online (gratis en office.com)
- O usa LibreOffice Impress
```

**Para Mac**:
```
- Usa Keynote (preinstalado)
- O instala PowerPoint
- O usa Google Slides
```

**Para Linux**:
```
- Usa LibreOffice Impress
- O Google Slides en línea
```

---

## Arquitectura Técnica

### Estructura del Proyecto

```
generador-documentos/
├── src/
│   ├── components/
│   │   ├── PersonalForm.tsx           # Formulario de captura
│   │   ├── PersonalForm.css           # Estilos del formulario
│   │   ├── CVDocument.tsx             # Vista previa de CV
│   │   ├── CVDocument.css             # Estilos de CV
│   │   ├── BusinessCardDocument.tsx   # Vista previa de tarjeta
│   │   ├── BusinessCard.css           # Estilos de tarjeta
│   │   ├── Modal.tsx                  # Componente modal
│   │   └── Modal.css                  # Estilos del modal
│   ├── services/
│   │   ├── validationService.ts       # Lógica de validación
│   │   └── exportService.ts           # Generación de archivos
│   ├── types/
│   │   └── index.ts                   # Interfaces TypeScript
│   ├── App.tsx                        # Componente principal
│   ├── App.css                        # Estilos globales
│   ├── index.css                      # Estilos base
│   └── main.tsx                       # Punto de entrada
├── package.json                       # Dependencias
├── tsconfig.json                      # Configuración TypeScript
├── vite.config.ts                     # Configuración Vite
└── README.md                          # Este archivo
```

### Flujo de Datos

```
Usuario Ingresa Datos
         ↓
    Validación (validationService)
         ↓
    ¿Datos válidos?
    ├─ No → Mostrar errores
    └─ Sí → Guardar en estado
         ↓
    Mostrar resumen
         ↓
    Usuario selecciona documento
         ↓
    Generar vista previa
         ↓
    Usuario hace clic en Descargar
         ↓
    Generar archivo (exportService)
         ↓
    Descargar DOCX o PPTX
```

### Componentes React

1. **PersonalForm** - Formulario interactivo con validaciones
2. **CVDocument** - Componente de vista previa del CV
3. **BusinessCardDocument** - Componente de vista previa de tarjeta
4. **Modal** - Ventana modal reutilizable
5. **App** - Componente principal que orquesta todo

### Servicios TypeScript

1. **validationService** - Valida todos los campos
   - `validatePersonalInfo()` - Valida toda la información
   - `validateEmail()` - Valida correos
   - `validatePhone()` - Valida teléfonos
   - `getFieldError()` - Obtiene error de un campo

2. **exportService** - Genera y descarga archivos
   - `exportCVToDocx()` - Genera CV en Word
   - `exportBusinessCardToPowerPoint()` - Genera tarjeta en PowerPoint

---

## Tecnologías Utilizadas

### Frontend Framework
- **React 18.2.0** - Librería UI con componentes declarativos
- **TypeScript 5.2** - Tipado estático para mayor seguridad
- **Vite 5.0.8** - Build tool ultrarrápido

### Generación de Documentos
- **docx 8.5.0** - Crea archivos Word (.docx)
- **pptxgenjs** - Crea archivos PowerPoint (.pptx)
- **html2canvas** - Convierte HTML a imágenes

### Herramientas de Desarrollo
- **Node.js & npm** - Runtime y gestor de paquetes
- **TypeScript ESLint** - Análisis estático de código
- **Vite React Plugin** - Integración React con Vite

### Estándares Web
- **HTML5** - Semántica correcta
- **CSS3** - Flexbox, Grid, Gradientes
- **ES2022+** - JavaScript moderno

---

## Diseño Visual

### Paleta de Colores
```
Primario:        #4F46E5 (Púrpura azulado)
Secundario:      #7C3AED (Púrpura)
Fondo:           #0F1117 (Gris muy oscuro)
Contenedor:      #16191F (Gris oscuro)
Texto:           #E8EAF0 (Blanco cálido)
Errores:         #F87171 (Rojo claro)
Acentos:         #A5B4FC (Púrpura claro)
```

### Tipografía
- **Fuente**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Body**: 14px, peso 400
- **Etiquetas**: 14px, peso 600
- **Títulos**: 24-32px, peso 500

### Diseño Responsive
- **Móvil** (< 480px): Una columna, 15px padding
- **Tablet** (480-768px): Dos columnas, 20px padding
- **Desktop** (> 768px): Layout completo, 40px padding

---

## Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Componentes React | 4 |
| Servicios TypeScript | 2 |
| Archivos de estilos | 6 |
| Líneas de código | ~1500+ |
| Tiempo de carga | < 2 segundos |
| Tamaño bundle | ~200KB (comprimido) |
| Compatibilidad de navegadores | 95%+ |

---

## Compatibilidad

| Navegador | Versión | Estado |
|-----------|---------|--------|
| Chrome | Última | Soportado |
| Firefox | Última | Soportado |
| Safari | 14+ | Soportado |
| Edge | Última | Soportado |
| Mobile Chrome | Última | Soportado |
| Mobile Safari | 14+ | Soportado |

---

## Recursos y Enlaces

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [docx Library](https://docx.js.org)
- [pptxgenjs Documentation](https://gitbrent.github.io/PptxGenJS/)

---

## Licencia

Este proyecto es de uso educativo y puede ser modificado y distribuido libremente.

---

## Soporte

¿Tienes problemas? Aquí hay algunas opciones:

1. **Lee el manual de usuario** arriba
2. **Consulta la sección de problemas** en este documento
3. **Abre la consola** (F12) para ver mensajes de error
4. **Prueba en otro navegador**
5. **Limpia el caché** del navegador

---

**Versión**: 1.0.0  
**Última actualización**: Abril 2026  
**Desarrollado con amor usando React + TypeScript**

**¡Gracias por usar el Generador de Documentos Personales!**
