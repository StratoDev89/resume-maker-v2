import { Component, inject, signal } from '@angular/core';
import { Title, ExperienceFields } from '@interfaces/*';
import { StorageService } from '@services/storage.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { BtnComponent } from '@components/';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { experienceFormConfig } from '@constants/';

@Component({
  selector: 'app-show-experiences',
  standalone: true,
  imports: [BtnComponent, UpdateFormComponent],
  templateUrl: './show-experiences.component.html',
  styleUrl: './show-experiences.component.scss',
})
export class ShowExperiencesComponent {
  title = 'experience';
  variable: Title = 'experience';
  storage = inject(StorageService);
  content = signal<ExperienceFields[] | null>(null);
  itemToUpdate = signal<ExperienceFields | null>(null);
  formConfig = experienceFormConfig;
  showUpdateForm = signal(false);

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

  remove(id: string) {
    const data: any[] = this.storage.getStorage(this.variable);
    const filteredData = data.filter((data) => data.id !== id);
    this.storage.setStorage(this.variable, filteredData);
  }

  update(id: string) {
    this.itemToUpdate.set(this.content()!.filter((item) => item.id === id)[0]);
    this.toggleUpdateForm();
  }

  toggleUpdateForm() {
    this.showUpdateForm.update((prev) => !prev);
  }

  onClose() {
    this.toggleUpdateForm();
  }
}
