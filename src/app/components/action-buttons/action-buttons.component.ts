import { Component, inject } from '@angular/core';
import { BtnComponent } from '@components/';
import { StorageService } from '@services/storage.service';
import { PdfServiceService } from '@services/pdf-service.service';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss',
})
export class ActionButtonsComponent {
  private storage = inject(StorageService);
  private pdfService = inject(PdfServiceService);

  clearAll() {
    this.storage.clearStorage();
  }

  generatePDF() {
    this.pdfService.generatePdf();
  }
}
