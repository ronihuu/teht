/*
in-memory-web-apin käyttöönotto app.config.ts:ssä

app.config.ts on koko sovelluksen konfiguraatiotiedosto, jossa otetaan käyttöön, 
eli tarjotaan (provide) koko sovellukselle esim. reititys ja in-memory-web-api. 
*/
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// seuraavat kaksi riviä tarvitaan valetietokantaa varten
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // InMemoryDataService eli valetietokanta otetaan käyttöön koko sovellukseen
    // Tämä rivi poistetaan sitten, kun ryhdytään käyttämään oikeaa palvelinta.
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })),
  ],
};
