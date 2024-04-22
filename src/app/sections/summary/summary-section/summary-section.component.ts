import { Component, signal } from '@angular/core';
import { summaryFormConfig } from '@constants/index';
import { DynamicFormComponent } from '../../../components/dinamic-form/dynamic-form.component';
import { BtnComponent } from '../../../components/btn/btn.component';
import { ShowSingleComponent } from '../../../components/show-single/show-single.component';

@Component({
  selector: 'app-summary-section',
  standalone: true,
  imports: [DynamicFormComponent, BtnComponent, ShowSingleComponent],
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.scss'
})
export class SummarySectionComponent {

  summaryConfig = summaryFormConfig;
  showSummary = signal(false);

  toggleSummary() {
    this.showSummary.update((prev) => !prev);
  }
}
