import { Component, signal } from '@angular/core';
import {
  BtnComponent,
  TemplateOneComponent,
  TemplateThreeComponent,
  TemplateTwoComponent,
} from '@components/';


@Component({
  selector: 'app-templates-section',
  standalone: true,
  imports: [
    BtnComponent,
    TemplateOneComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
  ],
  templateUrl: './templates-section.component.html',
  styleUrl: './templates-section.component.scss',
})
export class TemplatesSectionComponent {
  template = signal<'one' | 'two' | 'three'>('one');
  selectedOne = signal<'save' | 'basic'>('save');
  selectedTwo = signal<'save' | 'basic'>('basic');
  selectedThree = signal<'save' | 'basic'>('basic');

  setTemplate(template: 'one' | 'two' | 'three') {
    this.template.set(template);

    template === 'one'
      ? this.selectedOne.set('save')
      : this.selectedOne.set('basic');

    template === 'two'
      ? this.selectedTwo.set('save')
      : this.selectedTwo.set('basic');

    template === 'three'
      ? this.selectedThree.set('save')
      : this.selectedThree.set('basic');
  }
}
