import { Component, Input, inject, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

import { StorageService } from '../../services/storage.service';
import { Title } from '@interfaces/dynamic-form.interface';

@Component({
  selector: 'app-show-single',
  standalone: true,
  imports: [],
  templateUrl: './show-single.component.html',
  styleUrl: './show-single.component.scss',
})
export class ShowSingleComponent {
  @Input('title') title = '';
  @Input('variable') variable: Title | '' = '';
  storage = inject(StorageService);
  content = signal<string | null>(null);

  ngOnInit(): void {
    this.setContent();

    fromEvent(window, 'storage').subscribe((event: any) => {
      const { id, ...data } = this.storage.getStorage(this.variable);
      this.content.set(data.value);
    });
  }

  setContent() {
    const storedData = this.storage.getStorage(this.variable);
    if (storedData) this.content.set(storedData.value);
  }
}
