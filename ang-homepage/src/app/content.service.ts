import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // data haetaan asynkronisesti observablena
import { catchError } from 'rxjs/operators'; // virheenkäsittelyä varten
import { Content } from './content'; // datan tyyppi

@Service()
export class ContentService {
  apiurl = 'api/content'; // valepalvelimen eli in-memory-web-apin osoite

  private http = inject(HttpClient); // HttpClientin injektointi

  // Tehdään palvelimelle pyyntö jolla haetaan koko content-taulukko observablena
  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiurl);
    //virheenkäsittely voitaisiin tehdä tähän
  }

  /* http-olion get-metodi palauttaa observablen.
  Palautettavaan observableen on yhdistetty pipellä 
  virheenkäsittely.
  */

  //Hakee yhden content-olion id:een perusteella
  getContentById(contentid: string): Observable<Content | any> {
    return this.http.get<Content>(this.apiurl + '/' + contentid).pipe(
      catchError((error) => {
        console.error('Tapahtui virhe: ', error);
        return throwError(() => new Error(error.message || 'Tuntematon virhe'));
      }),
    );
  }
}
