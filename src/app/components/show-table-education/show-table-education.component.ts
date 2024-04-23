import { Component, inject, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { StorageService } from '@services/storage.service';
import { EducationFields, Title } from '@interfaces/';

@Component({
  selector: 'app-show-table-education',
  standalone: true,
  imports: [],
  templateUrl: './show-table-education.component.html',
  styleUrl: './show-table-education.component.scss',
})
export class ShowTableEducationComponent {
  title = 'education';
  variable: Title = 'education';
  showEducations = signal(false);
  storage = inject(StorageService);
  content = signal<EducationFields[] | null>(null);

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
