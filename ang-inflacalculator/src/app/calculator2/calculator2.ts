import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator2',
  styleUrl: './calculator2.css',
  templateUrl: './calculator2.html',
})
export class Calculator2 implements OnInit {
  // ominaisuudet

  price: number; // TS:ssä tietotyyppi merkitään kaksoispisteen perään
  newprice: number; // val1 ja val2 -arvot saadaan templaatin lomakkeelta
  result: number; // result lasketaan tässä luokassa

  // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot

  cservice = inject(CalculatorService);

  constructor() {
    this.price = 0;
    this.newprice = 0;
    this.result = 0;
  }

  // metodit

  // ngOnInit() ei sisällä mitään, eli ei ole käytössä
  ngOnInit(): void {}

  // Sovelluslogiikan tuottavat metodit
  public calculateInflation() {
    this.result = this.cservice.calculate2(this.price, this.newprice);
  }
}
