import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  experienceFormConfig,
  headerFormConfig,
  languagesFormConfig,
  referencesFormConfig,
  educationFormConfig,
} from './constants';
import {
  BtnComponent,
  DynamicFormComponent,
  ShowSingleComponent,
} from '@components/';
import {
  AdditionalSectionComponent,
  AwardsSectionComponent,
  CertificationsSectionComponent,
  SummarySectionComponent,
} from '@sections/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DynamicFormComponent,
    BtnComponent,
    ShowSingleComponent,
    SummarySectionComponent,
    CertificationsSectionComponent,
    AwardsSectionComponent,
    AdditionalSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resumeMaker';

  headerConfig = headerFormConfig;
  experienceConfig = experienceFormConfig;
  languagesConfig = languagesFormConfig;
  referencesConfig = referencesFormConfig;
  educationConfig = educationFormConfig;

  showExperience = signal(false);
  showLanguages = signal(false);
  showReferences = signal(false);
  showEducation = signal(false);

  ngOnInit(): void {}

  toggleExp() {
    this.showExperience.update((prev) => !prev);
  }

  toggleLanguages() {
    this.showLanguages.update((prev) => !prev);
  }

  toggleReferences() {
    this.showReferences.update((prev) => !prev);
  }

  toggleEducation() {
    this.showEducation.update((prev) => !prev);
  }
}
