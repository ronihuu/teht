import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  content: Content[] | undefined;
  //Otetaan contentService käyttöön injektoimalla se konstruktorissa
  private cservice = inject(ContentService);

  // Haetaan content aina kun komponentti latautuu muistiin
  ngOnInit(): void {
    this.cservice.getContent().subscribe((data) => (this.content = data));
  }
}
