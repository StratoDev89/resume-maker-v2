import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { experienceFormConfig, headerFormConfig } from './constants';
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
  ExperienceSectionComponent,
  HeaderSectionComponent,
  LanguageSectionComponent,
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
    LanguageSectionComponent,
    ExperienceSectionComponent,
    HeaderSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resumeMaker';


  ngOnInit(): void {}
}
