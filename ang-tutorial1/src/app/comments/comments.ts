import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'comments',
  styleUrl: './comments.css',
  templateUrl: './comments.html',
  template: ` <ul>
    <li>Building for the web is fantastic!</li>
    <li>The new template syntax is great</li>
    <li>I agree with the other comments!</li>
  </ul>`,
})
export class Comments {}
