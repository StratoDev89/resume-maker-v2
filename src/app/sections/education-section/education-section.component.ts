import { Component, signal } from '@angular/core';
import { BtnComponent, ShowTableEducationComponent } from '@components/';
import { DynamicFormComponent } from '@components/dinamic-form/dynamic-form.component';
import { educationFormConfig } from '@constants/education-form';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [ShowTableEducationComponent, DynamicFormComponent, BtnComponent],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss',
})
export class EducationSectionComponent {
  showEducationForm = signal(false);
  educationConfig = educationFormConfig;

  toggle() {
    this.showEducationForm.update((prev) => !prev);
  }
}
