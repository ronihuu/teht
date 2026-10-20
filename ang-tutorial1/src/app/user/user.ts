import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgOptimizedImage, FormsModule],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
  template: `<p>The user's name is {{ name() }}</p>`,
})
export class User {
  username = 'yOunGTECh';
  favoriteFramework = '';
  logoUrl = '../angular.png';
  logoAlt = 'Angular logo';
  //Angularin propsi tulee lapsi-komponenttiin
  //input-signaalina
  readonly name = input<string>();

  showFramework() {
    alert(this.favoriteFramework);
  }
}
