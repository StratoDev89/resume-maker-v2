import { Component, signal } from '@angular/core';
import { certificationFormConfig } from '@constants/certification-form';
import { DynamicFormComponent } from '../../../components/dinamic-form/dynamic-form.component';
import { BtnComponent } from '../../../components/btn/btn.component';
import { ShowSingleComponent } from '../../../components/show-single/show-single.component';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [DynamicFormComponent, BtnComponent, ShowSingleComponent],
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.scss'
})
export class CertificationsSectionComponent {
  certificationConfig = certificationFormConfig;
  showCertifications = signal(false);

  toggleCertification() {
    this.showCertifications.update((prev) => !prev);
  }
}
