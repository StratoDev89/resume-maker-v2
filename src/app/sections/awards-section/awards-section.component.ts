import { Component, signal } from '@angular/core';
import {
  BtnComponent,
  DynamicFormComponent,
  ShowSingleComponent,
} from '@components/';
import { awardsFormConfig } from '@constants/';

import {} from '@constants/';

@Component({
  selector: 'app-awards-section',
  standalone: true,
  imports: [DynamicFormComponent, BtnComponent, ShowSingleComponent],
  templateUrl: './awards-section.component.html',
  styleUrl: './awards-section.component.scss',
})
export class AwardsSectionComponent {
  awardsConfig = awardsFormConfig;
  showAwards = signal(false);

  toggle() {
    this.showAwards.update((prev) => !prev);
  }
}
