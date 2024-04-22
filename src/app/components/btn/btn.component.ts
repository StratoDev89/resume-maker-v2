import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Output() onClick = new EventEmitter();
  @Input('class') class: 'basic' | 'danger' | 'save' = 'basic';
  @Input('type') type: 'submit' | 'button' = 'button';


  clickHandler(event: Event) {
    event.stopPropagation();

    this.onClick.emit();
  }
}
