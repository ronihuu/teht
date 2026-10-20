import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Tämä rivi poistetaan kun ryhdytään käyttämään oikeaa API:a.
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })),
  ],
};
