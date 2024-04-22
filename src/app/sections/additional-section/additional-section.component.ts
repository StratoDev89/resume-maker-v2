import { Component, signal } from '@angular/core';
import {
  BtnComponent,
  DynamicFormComponent,
  ShowSingleComponent,
} from '@components/';
import { additionalFormConfig } from '@constants/';

@Component({
  selector: 'app-additional-section',
  standalone: true,
  imports: [DynamicFormComponent, BtnComponent, ShowSingleComponent],
  templateUrl: './additional-section.component.html',
  styleUrl: './additional-section.component.scss',
})
export class AdditionalSectionComponent {
  additionalConfig = additionalFormConfig;
  showAdditional = signal(false);

  toggle() {
    this.showAdditional.update((prev) => !prev);
  }
}
