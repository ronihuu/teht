import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [CommonModule],
  templateUrl: './square.html',
  styleUrl: './square.css',
})
export class Square {
  /* input() tarkoittaa, että value-propertyn arvo
     tulee signaalimuotoisena syötteenä sisään 
     äitikomponentilta eli board-komponentilta.
  */
  value = input<string>('');
  // property joka sisältää ruudun arvon, eli '', 'X' tai '0'
  index = input<number>(0); // property joka sisältää ruudun indeksin, eli 0-8
  line = input<number[]>([]); // property joka sisältää voittajan rivin indeksit, eli taulukko
}
