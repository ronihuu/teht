/*
Calculator-komponentin luokkaosa 

Komponentin luokkaosassa on TypeScriptillä koodattu sovelluslogiikka.
Luokasta välitetään dataa käyttöliittymään eli templaattiin ja toisinpäin.
Luokkaosaa kutsutaan myös varsinaiseksi komponentiksi, sillä se sisältää
kaikki komponentin osat määriteltynä dekoraattorissa.
*/

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// @Component-dekoraattorimetodin argumenttina
// olevassa oliossa määritellään komponentin osat
@Component({
  selector: 'app-calculator', // komponentin html-tagi
  imports: [FormsModule], // komponentin riippuvuudet
  templateUrl: './calculator.html', // templaatti
  styleUrl: './calculator.css', // tyylitiedosto
})
/*
Luokassa on ominaisuuksia eli propertyjä ja
toiminnallisuuksia eli metodeja (luokan funktiota)
*/
export class Calculator implements OnInit {
  // ominaisuudet

  price: number; // TS:ssä tietotyyppi merkitään kaksoispisteen perään
  percent: number; // price ja percent -arvot saadaan templaatin lomakkeelta
  result: number; // result lasketaan tässä luokassa

  // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot

  constructor() {
    this.result = 0;
    this.price = 0;
    this.percent = 0;
  }

  // metodit

  // ngOnInit() ei sisällä mitään, eli ei ole käytössä
  ngOnInit(): void {}

  // Sovelluslogiikan tuottavat metodit

  public calcInflation() {
    this.result = Number((this.price * (1 + this.percent * 0.01)).toFixed(2));
  }
}
