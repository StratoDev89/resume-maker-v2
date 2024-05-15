import { Component, inject, signal } from '@angular/core';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs';
import { Title } from '@interfaces/dynamic-form.interface';

@Component({
  selector: 'app-template-one',
  standalone: true,
  imports: [],
  templateUrl: './template-one.component.html',
  styleUrl: './template-one.component.scss',
})
export class TemplateOneComponent {
  private storage = inject(StorageService);

  data = signal<{ [key in Title]?: any } | null>(null);

  ngOnInit(): void {
    const data = this.storage.getAllStorage();
    if (Object.keys(data).length > 0) {
      this.data.set(data);
    }

    fromEvent(window, 'storage').subscribe((event: any) => {
      const data = this.storage.getAllStorage();
      if (data) this.data.set(data);
    });
  }
}
