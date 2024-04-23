import { Component, signal } from '@angular/core';
import {
  DynamicFormComponent,
  BtnComponent,
  ShowReferencesTableComponent,
} from '@components/';
import { referencesFormConfig } from '@constants/';

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [BtnComponent, DynamicFormComponent, ShowReferencesTableComponent],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss',
})
export class ReferencesSectionComponent {
  showReferences = signal(false);
  referencesConfig = referencesFormConfig;

  toggle() {
    this.showReferences.update((prev) => !prev);
  }
}
