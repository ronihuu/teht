/* InMemoryDataService on muistissa oleva "valepalvelin" joka toimii aivan kuin
   oikea palvelin. Sen avulla voidaan keskittyä pelkän frontendin kehittämiseen
   ilman että tarvitaan oikeaa palvelinta. Koodista voidaan tehdä sellaista että
   se toimii heti myös oikean palvelimen kanssa.
*/
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './content';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // content-taulukko on "valetietokanta", josta sovellus saa datansa
    const content: Content[] = [
      {
          "id": 0,
          "text": "Apina baariin kipitti ja olutta lasista lipitti. Sitten apinaa kenkutti.",
          "image": "assets/kuva1.jpg" 
      },
      {
          "id": 1,
          "text": "Makeasti oravainen nukkuu sammalvuoteellansa.",
          "image": "assets/kuva2.jpg"   
      },
      {
          "id": 2,
          "text": "Valkoinen hevonen kukkaniityllä vapaana laukkaa.",
          "image": "assets/kuva3.jpg"
      },
    ];

    return { content };
  }
}