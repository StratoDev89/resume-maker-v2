import { Component, forwardRef } from '@angular/core';
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
import {
  ActionButtonsComponent,
  DynamicFormComponent,
  ShowSingleComponent,
  TemplatesSectionComponent,
} from '@components/';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    DynamicFormComponent,
    ShowSingleComponent,
    SummarySectionComponent,
    CertificationsSectionComponent,
    AwardsSectionComponent,
    AdditionalSectionComponent,
    EducationSectionComponent,
    ReferencesSectionComponent,
    LanguageSectionComponent,
    ExperienceSectionComponent,
    HeaderSectionComponent,
    TemplatesSectionComponent,
    forwardRef(() => ActionButtonsComponent),
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
