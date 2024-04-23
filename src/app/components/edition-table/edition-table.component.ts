import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  LanguageFields,
  EducationFields,
  Title,
  ReferenceFields,
} from '@interfaces/';
import { StorageService } from '@services/storage.service';
import { BtnComponent } from '@components/';

@Component({
  selector: 'app-edition-table',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './edition-table.component.html',
  styleUrl: './edition-table.component.scss',
})
export class EditionTableComponent {
  @Input({ required: true }) storageKey!: Title;
  @Output() closeForm = new EventEmitter();
  storage = inject(StorageService);

  dataLanguages: LanguageFields[] | null = null;
  dataEducation: EducationFields[] | null = null;
  dataReferences: ReferenceFields[] | null = null;

  ngOnInit(): void {
    const data = this.storage.getStorage(this.storageKey);

    if (data && this.storageKey === 'languages') {
      this.dataLanguages = data;
    }

    if (data && this.storageKey === 'education') {
      this.dataEducation = data;
    }

    if (data && this.storageKey === 'references') {
      this.dataReferences = data;
    }
  }

  onDelete(id: string) {
    const data: any[] = this.storage.getStorage(this.storageKey);
    const filteredData = data.filter((data) => data.id !== id);
    this.storage.setStorage(this.storageKey, filteredData);
    this.closeForm.emit();
  }
}
