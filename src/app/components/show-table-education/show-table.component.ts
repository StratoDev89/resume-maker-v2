import { Component, Input, inject, signal } from '@angular/core';
import { Title } from '@interfaces/dynamic-form.interface';
import { fromEvent } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-show-table-education',
  standalone: true,
  imports: [],
  templateUrl: './show-table.component.html',
  styleUrl: './show-table.component.scss'
})
export class ShowTableComponent {
  @Input('title') title = '';
  @Input('variable') variable: Title | '' = '';
  storage = inject(StorageService);
  content = signal<string[] | null>(null);

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
