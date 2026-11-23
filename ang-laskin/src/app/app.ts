/*
App-komponentin luokkaosa. Komponentti koostuu kolmesta osasta:
Luokkaosa, templaatti (HTML-sivupohja) ja CSS-osa.
App-komponentti on äitikomponentti jonka sisälle muut komponentit
tulevat. Sen tehtävänä on toimia "säiliönä".
*/
import { Component } from '@angular/core';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root', // komponentin html-tagin nimi
  imports: [Calculator], // komponentin tarvitsemat riippuvuudet
  templateUrl: './app.html', // templaattiosa
  styleUrls: ['./app.css'] // tyyliosa
})
// Luokka johon sovelluslogiikkakoodi tehdään
export class App {
  title = 'Laskin';

}
