import { Component, Input } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {
  @Input() content!: Content;
}
