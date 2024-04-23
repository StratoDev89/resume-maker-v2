import { Component, inject, signal } from '@angular/core';
import { HeaderFields, Title } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-show-header',
  standalone: true,
  imports: [],
  templateUrl: './show-header.component.html',
  styleUrl: './show-header.component.scss',
})
export class ShowHeaderComponent {
  title = 'header';
  variable: Title = 'header';
  storage = inject(StorageService);
  content = signal<HeaderFields | null>(null);

  ngOnInit(): void {
    this.setContent();

    fromEvent(window, 'storage').subscribe((event: any) => {
      const data = this.storage.getStorage(this.variable);
      this.content.set(data);
    });
  }

  setContent() {
    const storedData = this.storage.getStorage(this.variable);

    if (storedData) this.content.set(storedData);
  }
}
