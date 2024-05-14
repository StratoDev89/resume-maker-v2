import { Component, inject } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);

  redirect() {
    this.router.navigate(['form']);
  }
}
