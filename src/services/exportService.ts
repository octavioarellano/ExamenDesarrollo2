import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  BorderStyle,
  AlignmentType,
} from 'docx';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';
import type { PersonalInfo } from '../types';

export class ExportService {
  static async exportCVToDocx(data: PersonalInfo): Promise<void> {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Header con nombre y profesión
            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.nombre} ${data.apellido}`,
                  size: 32,
                  bold: true,
                  color: '2C3E50',
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 0 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: data.profesion,
                  size: 24,
                  color: '7F8C8D',
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),

            // Información de contacto
            new Paragraph({
              children: [
                new TextRun({
                  text: 'CONTACTO',
                  bold: true,
                  size: 24,
                }),
              ],
              spacing: { before: 200, after: 100 },
              border: {
                bottom: {
                  color: '3498DB',
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 6,
                },
              },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: 'Email: ', bold: true }),
                new TextRun(data.email),
              ],
              spacing: { after: 50 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: 'Teléfono: ', bold: true }),
                new TextRun(data.telefono),
              ],
              spacing: { after: 50 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: 'Dirección: ', bold: true }),
                new TextRun(
                  `${data.direccion}, ${data.ciudad}, ${data.pais}`
                ),
              ],
              spacing: { after: 200 },
            }),

            // Experiencia Profesional
            ...(data.experiencia
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: 'EXPERIENCIA PROFESIONAL',
                        bold: true,
                        size: 24,
                      }),
                    ],
                    spacing: { before: 200, after: 100 },
                    border: {
                      bottom: {
                        color: '3498DB',
                        space: 1,
                        style: BorderStyle.SINGLE,
                        size: 6,
                      },
                    },
                  }),
                  ...data.experiencia.split('\n').map(
                    (line) =>
                      new Paragraph({
                        children: [new TextRun(line.trim())],
                        spacing: { after: 50 },
                      })
                  ),
                  new Paragraph({
                    children: [new TextRun('')],
                    spacing: { after: 100 },
                  }),
                ]
              : []),

            // Educación
            ...(data.educacion
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: 'EDUCACIÓN',
                        bold: true,
                        size: 24,
                      }),
                    ],
                    spacing: { before: 200, after: 100 },
                    border: {
                      bottom: {
                        color: '3498DB',
                        space: 1,
                        style: BorderStyle.SINGLE,
                        size: 6,
                      },
                    },
                  }),
                  ...data.educacion.split('\n').map(
                    (line) =>
                      new Paragraph({
                        children: [new TextRun(line.trim())],
                        spacing: { after: 50 },
                      })
                  ),
                  new Paragraph({
                    children: [new TextRun('')],
                    spacing: { after: 100 },
                  }),
                ]
              : []),

            // Habilidades
            ...(data.habilidades
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: 'HABILIDADES',
                        bold: true,
                        size: 24,
                      }),
                    ],
                    spacing: { before: 200, after: 100 },
                    border: {
                      bottom: {
                        color: '3498DB',
                        space: 1,
                        style: BorderStyle.SINGLE,
                        size: 6,
                      },
                    },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun(
                        data.habilidades
                          .split(',')
                          .map((h) => h.trim())
                          .join(', ')
                      ),
                    ],
                    spacing: { after: 200 },
                  }),
                ]
              : []),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    this.downloadFile(
      blob,
      `CV_${data.nombre}_${data.apellido}.docx`,
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
  }

  static async exportBusinessCardToPowerPoint(data: PersonalInfo): Promise<void> {
    const prs = new PptxGenJS();
    
    // Configurar tamaño de slide como tarjeta de presentación (105mm x 75mm)
    // Convertir a pulgadas: 105mm = 4.13", 75mm = 2.95"
    prs.defineLayout({ name: 'BUSINESS_CARD', width: 4.13, height: 2.95 });
    prs.layout = 'BUSINESS_CARD';

    // Crear slide
    const slide = prs.addSlide();

    // Fondo con gradiente
    slide.background = { color: '2C3E50' };

    // Línea superior (decorativa)
    slide.addShape(prs.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 4.13,
      h: 0.15,
      fill: { color: '3498DB' },
      line: { type: 'none' },
    });

    // Nombre y Profesión
    slide.addText(`${data.nombre} ${data.apellido}`, {
      x: 0.2,
      y: 0.3,
      w: 3.73,
      h: 0.4,
      fontSize: 24,
      bold: true,
      color: 'FFFFFF',
      fontFace: 'Segoe UI',
    });

    slide.addText(data.profesion, {
      x: 0.2,
      y: 0.7,
      w: 3.73,
      h: 0.3,
      fontSize: 11,
      color: 'ECF0F1',
      fontFace: 'Segoe UI',
    });

    // Línea separadora
    slide.addShape(prs.ShapeType.line, {
      x: 0.2,
      y: 1.0,
      w: 3.73,
      h: 0,
      line: { color: '3498DB', width: 2 },
    });

    // Email
    slide.addText(`✉️ ${data.email}`, {
      x: 0.2,
      y: 1.15,
      w: 3.73,
      h: 0.25,
      fontSize: 10,
      color: 'FFFFFF',
      fontFace: 'Segoe UI',
    });

    // Teléfono
    slide.addText(`📱 ${data.telefono}`, {
      x: 0.2,
      y: 1.45,
      w: 3.73,
      h: 0.25,
      fontSize: 10,
      color: 'FFFFFF',
      fontFace: 'Segoe UI',
    });

    // Ubicación
    slide.addText(`📍 ${data.ciudad}, ${data.pais}`, {
      x: 0.2,
      y: 1.75,
      w: 3.73,
      h: 0.25,
      fontSize: 10,
      color: 'FFFFFF',
      fontFace: 'Segoe UI',
    });

    // Fecha en pie de página
    slide.addText(new Date().toLocaleDateString('es-ES'), {
      x: 0.2,
      y: 2.55,
      w: 3.73,
      h: 0.2,
      fontSize: 9,
      color: '95A5A6',
      fontFace: 'Segoe UI',
    });

    // Descargar presentación
    await prs.writeFile(`Tarjeta_${data.nombre}_${data.apellido}.pptx`);
  }

  private static downloadFile(
    blob: Blob,
    filename: string,
    mimeType: string
  ): void {
    const url = URL.createObjectURL(new Blob([blob], { type: mimeType }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
