import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from '@components/';
import { StorageService } from '@services/storage.service';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '@interfaces/*';

type updateOptions = 'languages' | 'education' | 'references' | 'experience';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnComponent, CommonModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss',
})
export class UpdateFormComponent {
  dynamicFormGroup: FormGroup = new FormGroup({});
  storage = inject(StorageService);
  fb = inject(FormBuilder);

  @Input({ required: true }) toUpdate!: updateOptions;
  @Input({ required: true }) formConfig!: DynamicForm;
  @Input({ required: true }) item: any;
  @Output() closeForm = new EventEmitter();
  @Output() saveForm = new EventEmitter();

  ngOnInit(): void {
    this.dynamicFormGroup = this.fb.group(this.item);
  }

  onSave() {
    const currentData: any[] = this.storage.getStorage(this.toUpdate);
    const updatedItem = {
      ...this.dynamicFormGroup.getRawValue(),
    };
    const index = currentData.findIndex((item) => item.id === updatedItem.id);
    currentData[index] = updatedItem;

    this.storage.setStorage(this.toUpdate, currentData);
    this.saveForm.emit();
  }

  onClose() {
    this.closeForm.emit();
  }
}
