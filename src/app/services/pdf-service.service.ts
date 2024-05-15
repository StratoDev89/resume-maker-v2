import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfServiceService {
  async generatePdf() {
    try {
      const scale = 2;
      const template = document.querySelector('#template') as HTMLElement;
      const canvas = await this.generateCanvas(template, scale);
      const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height], true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const widthRatio = pdfWidth / canvasWidth;
      const heightRatio = pdfHeight / canvasHeight;

      const ratio = Math.min(widthRatio, heightRatio);
      const newWidth = canvasWidth * ratio;
      const newHeight = canvasHeight * ratio;

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        newWidth,
        newHeight,
      );

      pdf.save('resume.pdf');
    } catch (error) {
      alert('try to summarize your content');
    }
  }

  private async generateCanvas(
    container: HTMLElement,
    scale: number,
  ): Promise<HTMLCanvasElement> {
    return await html2canvas(container, { scale });
  }

  sizes() {
    const pdf = new jsPDF('p', 'pt');
    const pdfHeight = pdf.internal.pageSize.getHeight();
    console.log({ pdfHeight });
  }
}
