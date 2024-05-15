import { Component, inject, signal } from '@angular/core';
import { Title } from '@interfaces/dynamic-form.interface';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-template-two',
  standalone: true,
  imports: [],
  templateUrl: './template-two.component.html',
  styleUrl: './template-two.component.scss',
})
export class TemplateTwoComponent {
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
