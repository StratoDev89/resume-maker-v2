import { Component, inject, signal } from '@angular/core';
import { ReferenceFields, Title } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-show-references-table',
  standalone: true,
  imports: [],
  templateUrl: './show-references-table.component.html',
  styleUrl: './show-references-table.component.scss',
})
export class ShowReferencesTableComponent {
  title = 'references';
  variable: Title | '' = 'references';
  storage = inject(StorageService);
  content = signal<ReferenceFields[] | null>(null);

  ngOnInit(): void {
    this.setContent();

    fromEvent(window, 'storage').subscribe((event: any) => {
      const data = this.storage.getStorage(this.variable);
      this.content.set(data);
      console.log(this.content());
    });
  }

  setContent() {
    const storedData = this.storage.getStorage(this.variable);
    if (storedData) this.content.set(storedData);
  }
}
