import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from './content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  url = 'api/content';

  http: HttpClient = inject(HttpClient);

  // Haetaan kannasta kaikki sisältö
  getAllContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.url);
    //virheenkäsittely voitaisiin tehdä tähän
  }
}
