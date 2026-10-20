/*
Calculator-komponentin luokkaosa 

Komponentin luokkaosassa on TypeScriptillä koodattu sovelluslogiikka.
Luokasta välitetään dataa käyttöliittymään eli templaattiin ja toisinpäin.
Luokkaosaa kutsutaan myös varsinaiseksi komponentiksi, sillä se sisältää
kaikki komponentin osat määriteltynä dekoraattorissa.
*/

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

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
  percent: number; // val1 ja val2 -arvot saadaan templaatin lomakkeelta
  result: number; // result lasketaan tässä luokassa

  //Service otetaan käyttöön komponentissa eli se injektoidaan
  //komponenttiin (DI eli Dependency Injection)
  cservice = inject(CalculatorService);

  // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot

  constructor() {
    this.price = 0;
    this.percent = 0;
    this.result = 0;
  }

  // metodit

  // ngOnInit() ei sisällä mitään, eli ei ole käytössä
  ngOnInit(): void {}

  // Sovelluslogiikan tuottavat metodit
  public calculateInflation() {
    //this.result = parseFloat((this.price * (this.percent / 100 + 1)).toFixed(2));
    this.result = this.cservice.calculate1(this.price, this.percent);
  }
}
