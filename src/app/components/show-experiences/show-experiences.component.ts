import { Component, inject, signal } from '@angular/core';
import { Title, ExperienceFields } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { BtnComponent } from '@components/';

@Component({
  selector: 'app-show-experiences',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './show-experiences.component.html',
  styleUrl: './show-experiences.component.scss',
})
export class ShowExperiencesComponent {
  title = 'experience';
  variable: Title = 'experience';
  storage = inject(StorageService);
  content = signal<ExperienceFields[] | null>(null);

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
