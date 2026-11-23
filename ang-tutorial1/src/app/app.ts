import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';
import { Comments } from './comments/comments';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CarService } from './car.service';
import { DecimalPipe, DatePipe, CurrencyPipe, LowerCasePipe } from '@angular/common';
import { ReversePipe } from './reverse-pipe';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    User,
    Child,
    Comments,
    ReactiveFormsModule,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    LowerCasePipe,
    ReversePipe,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //luokan propertyja eli ominaisuuksia
  // propertyt alustetaan samalla kuin esitellään
  protected readonly title = signal('ang-tutorial1');
  //city: string; // Pelkkä esittely
  city = 'San Francisco';
  username = 'yOunGTECh';
  word = 'You are a champion';

  isServerRunning = true;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  isEditable = true;

  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  hideSecretMessage() {
    this.message = '';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  clearItems() {
    this.items = [];
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
}
