import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  experienceFormConfig,
  headerFormConfig,
  languagesFormConfig,
  referencesFormConfig,
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
  EducationSectionComponent,
  ReferencesSectionComponent,
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
    EducationSectionComponent,
    ReferencesSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resumeMaker';

  headerConfig = headerFormConfig;
  experienceConfig = experienceFormConfig;
  languagesConfig = languagesFormConfig;

  showExperience = signal(false);
  showLanguages = signal(false);

  ngOnInit(): void {}

  toggleExp() {
    this.showExperience.update((prev) => !prev);
  }

  toggleLanguages() {
    this.showLanguages.update((prev) => !prev);
  }
}
