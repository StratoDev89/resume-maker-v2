import { Component, inject, signal } from '@angular/core';
import { LanguageFields, Title } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-show-table-languages',
  standalone: true,
  imports: [],
  templateUrl: './show-table-languages.component.html',
  styleUrl: './show-table-languages.component.scss',
})
export class ShowTableLanguagesComponent {
  title = 'language';
  variable: Title = 'languages';
  storage = inject(StorageService);
  content = signal<LanguageFields[] | null>(null);

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
