import { Component, signal } from '@angular/core';
import {
  DynamicFormComponent,
  BtnComponent,
  ShowExperiencesComponent,
} from '@components/';
import { experienceFormConfig } from '@constants/experience-form';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [BtnComponent, DynamicFormComponent, ShowExperiencesComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  showExperience = signal(false);
  experienceConfig = experienceFormConfig;

  toggle() {
    this.showExperience.update((prev) => !prev);
  }
}
