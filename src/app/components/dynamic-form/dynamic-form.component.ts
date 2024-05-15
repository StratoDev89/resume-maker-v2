import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DynamicForm,
  FormControlInt,
} from '@interfaces/dynamic-form.interface';
import { BtnComponent } from '../btn/btn.component';
import { StorageService } from '../../services/storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BtnComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  fb = inject(FormBuilder);
  storage = inject(StorageService);
  @Input() form!: DynamicForm;
  @Output() toggle = new EventEmitter();
  dynamicFormGroup: FormGroup = new FormGroup({});
  currentStorage: string[] = [];

  ngOnInit(): void {
    this.setDynamicForm();
    this.getSavedVariable();
  }

  setDynamicForm() {
    let formGroup: any = {};

    this.form.formControls?.forEach((control) => {
      let controlValidators: Validators[] = [];

      if (control.validators) {
        control.validators.forEach((val) => {
          if (val.validatorName === 'required')
            controlValidators.push(Validators.required);
          if (val.validatorName === 'email')
            controlValidators.push(Validators.email);
        });
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicFormGroup = this.fb.group(formGroup, { updateOn: 'submit' });
  }

  getValidationErrors(control: FormControlInt): string {
    const formControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';

    control.validators?.forEach((val) => {
      if (formControl?.hasError(val.validatorName)) {
        errorMessage = val.message;
      }
    });

    return errorMessage;
  }

  save() {
    if (this.dynamicFormGroup.valid) {
      switch (this.form.formTitle) {
        case 'summary':
        case 'certifications':
        case 'awards':
        case 'additional':
          this.saveSingle();
          break;

        case 'experience':
        case 'references':
        case 'languages':
        case 'education':
          this.saveArray();
          break;

        default:
          this.saveHeader();
          break;
      }

      this.toggle.emit();
      return;
    }
  }

  remove() {
    this.form.delete!('');
  }

  add() {
    this.form.add!('');
  }

  getSavedVariable() {
    if (
      ['summary', 'awards', 'certifications', 'additional'].includes(
        this.form.formTitle,
      )
    ) {
      const { id, value } = this.storage.getStorage(this.form.formTitle);
      this.dynamicFormGroup.get(this.form.formTitle)?.setValue(value);
    }

    if (this.form.formTitle === 'header') {
      const { id, ...data } = this.storage.getStorage(this.form.formTitle);

      this.dynamicFormGroup.patchValue(data);
    }
  }

  saveSingle() {
    const value = this.dynamicFormGroup.get(this.form.formTitle)?.value!;
    const data = { id: uuidv4(), value };
    this.storage.setStorage(this.form.formTitle, data);
  }

  saveArray() {
    const currentData = this.storage.getStorage(this.form.formTitle);

    if (currentData) this.currentStorage = currentData;

    this.currentStorage.push({
      id: uuidv4(),
      ...this.dynamicFormGroup.getRawValue(),
    });
    this.storage.setStorage(this.form.formTitle, this.currentStorage);
  }

  saveHeader() {
    const data = { id: uuidv4(), ...this.dynamicFormGroup.getRawValue() };
    this.storage.setStorage(this.form.formTitle, data);
  }
}
