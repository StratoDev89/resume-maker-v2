import { Component, signal } from '@angular/core';
import {
  BtnComponent,
  DynamicFormComponent,
  EditionTableComponent,
  ShowTableLanguagesComponent,
} from '@components/';
import { languagesFormConfig } from '@constants/';

@Component({
  selector: 'app-language-section',
  standalone: true,
  imports: [
    ShowTableLanguagesComponent,
    BtnComponent,
    DynamicFormComponent,
    EditionTableComponent,
  ],
  templateUrl: './language-section.component.html',
  styleUrl: './language-section.component.scss',
})
export class LanguageSectionComponent {
  showLanguagesForm = signal(false);
  languageConfig = languagesFormConfig;

  toggle() {
    this.showLanguagesForm.update((prev) => !prev);
  }
}
