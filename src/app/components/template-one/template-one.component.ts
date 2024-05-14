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

  data = signal<{ [key in Title]?: any }>({});

  ngOnInit(): void {
    const data = this.storage.getAllStorage();
    this.data.set(data);

    fromEvent(window, 'storage').subscribe((event: any) => {
      const data = this.storage.getAllStorage();
      this.data.set(data);
    });
  }
}
