import { Component } from '@angular/core';
import { headerFormConfig } from '@constants/';
import { DynamicFormComponent, ShowHeaderComponent } from '@components/';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [DynamicFormComponent, ShowHeaderComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
})
export class HeaderSectionComponent {
  headerConfig = headerFormConfig;
}
