import { Component, inject, signal } from '@angular/core';
import { Title } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-template-three',
  standalone: true,
  imports: [],
  templateUrl: './template-three.component.html',
  styleUrl: './template-three.component.scss',
})
export class TemplateThreeComponent {
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
