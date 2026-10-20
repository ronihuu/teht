import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  styleUrl: './child.css',
  templateUrl: './child.html',
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  readonly addItemEvent = output<string>();
  readonly clearItemsEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }

  clearItems() {
    this.clearItemsEvent.emit('');
  }
}
