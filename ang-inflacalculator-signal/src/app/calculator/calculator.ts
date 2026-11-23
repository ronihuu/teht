/*
Calculator-komponentin luokkaosa 

Komponentin luokkaosassa on TypeScriptillä koodattu sovelluslogiikka.
Luokasta välitetään dataa käyttöliittymään eli templaattiin ja toisinpäin.
Luokkaosaa kutsutaan myös varsinaiseksi komponentiksi, sillä se sisältää
kaikki komponentin osat määriteltynä dekoraattorissa.
*/

import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

// @Component-dekoraattorimetodin argumenttina
// olevassa oliossa määritellään komponentin osat
@Component({
  selector: 'app-calculator', // komponentin html-tagi
  imports: [FormsModule, FormField], // komponentin riippuvuudet
  templateUrl: './calculator.html', // templaatti
  styleUrl: './calculator.css', // tyylitiedosto
})
/*
Luokassa on ominaisuuksia eli propertyjä ja
toiminnallisuuksia eli metodeja (luokan funktiota)
*/
export class Calculator implements OnInit {
  // ominaisuudet
  /*
  price: number; // TS:ssä tietotyyppi merkitään kaksoispisteen perään
  percent: number; // val1 ja val2 -arvot saadaan templaatin lomakkeelta
  result: number; // result lasketaan tässä luokassa

  // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot

  constructor() {
    this.price = 0;
    this.percent = 0;
    this.result = 0;
  }
    */

  //Luokan ominaisuudet ja niiden alustus. Nyt ominaisuudet ovat signal-muuttujia
  //Ominaisuudet ovat olion sisällä. Voisivat olla myös erillisiä
  calculatorData = signal({
    price: 0,
    percent: 0,
  });

  calculatorForm = form(this.calculatorData);

  // result-signaali lasketaan kahdesta muusta signaalista
  result = computed(() => {
    return Number(
      (this.calculatorData().price * (1 + this.calculatorData().percent * 0.01)).toFixed(2),
    );
  });

  // metodit

  // ngOnInit() ei sisällä mitään, eli ei ole käytössä
  ngOnInit(): void {}

  // Sovelluslogiikan tuottavat metodit
  public calculateInflation() {
    this.calculatorData.update((data) => ({
      ...data,
      result: parseFloat((data.price * (data.percent / 100 + 1)).toFixed(2)),
    }));
  }
}
