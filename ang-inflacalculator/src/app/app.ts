import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { Calculator } from './calculator/calculator';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'ang-inflacalculator';
}
