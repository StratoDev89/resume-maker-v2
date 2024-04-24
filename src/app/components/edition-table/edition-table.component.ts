import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import {
  LanguageFields,
  EducationFields,
  Title,
  ReferenceFields,
} from '@interfaces/';
import { StorageService } from '@services/storage.service';
import { BtnComponent,  } from '@components/';
import {
  educationFormConfig,
  languagesFormConfig,
  referencesFormConfig,
} from '@constants/';
import { UpdateFormComponent } from '../update-form/update-form.component';

type updateOptions = 'languages' | 'education' | 'references';
@Component({
  selector: 'app-edition-table',
  standalone: true,
  imports: [
    BtnComponent,
    ReactiveFormsModule,
    CommonModule,
    UpdateFormComponent,
  ],
  templateUrl: './edition-table.component.html',
  styleUrl: './edition-table.component.scss',
})
export class EditionTableComponent {
  @Input({ required: true }) storageKey!: Title;
  @Output() closeForm = new EventEmitter();
  storage = inject(StorageService);
  fb = inject(FormBuilder);
  showUpdateForm = signal(false);
  dynamicFormGroup: FormGroup = new FormGroup({});

  dataLanguages: LanguageFields[] | null = null;
  dataEducation: EducationFields[] | null = null;
  dataReferences: ReferenceFields[] | null = null;

  toUpdate = signal<updateOptions | ''>('');
  educationConfig = educationFormConfig;
  languageConfig = languagesFormConfig;
  referenceConfig = referencesFormConfig;

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

  onUpdate(item: any, toEdit: updateOptions) {
    this.toUpdate.set(toEdit);
    this.dynamicFormGroup = this.fb.group(item);
    this.toggleUpdateForm();
  }

  toggleUpdateForm() {
    this.showUpdateForm.update((prev) => !prev);
  }

  onSave() {
    this.toggleUpdateForm();
    this.closeForm.emit();
  }

  onClose() {
    this.toggleUpdateForm();
  }
}
