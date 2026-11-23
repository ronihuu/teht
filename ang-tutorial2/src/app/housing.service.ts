import { Service } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';
import { catchError, Observable, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class HousingService {
  url = 'http://localhost:3000/locations'; // Url-osoite, josta haetaan housinglocationit

  private http = inject(HttpClient); //Httpclientin injektointi

  // Tehdään palvelimelle pyyntö jolla haetaan koko locations-taulukko observablena
  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(this.url);
  }

  /* http-olion get-metodi palauttaa observablen.
  Palautettavaan observableen on yhdistetty pipellä 
  virheenkäsittely.
  */
  //Hakee yhden housinglocationin id:een perusteella
  getHousingLocationById(id: number): Observable<HousingLocationInfo | undefined> {
    return this.http.get<HousingLocationInfo>(`${this.url}/${id}`).pipe(
      catchError((error) => {
        console.error('Tapahtui virhe: ', error);
        return throwError(() => new Error(error.message || 'Tuntematon virhe'));
      }),
    );
  }

  //suoritetaan kun käyttäjä lähettää hakemuksen, tulostetaan konsoliin hakemuksen tiedot
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
