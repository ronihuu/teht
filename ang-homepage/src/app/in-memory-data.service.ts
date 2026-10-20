/* InMemoryDataService on muistissa oleva "valepalvelin" joka toimii aivan kuin
   oikea palvelin. Sen avulla voidaan keskittyä pelkän frontendin kehittämiseen
   ilman että tarvitaan oikeaa palvelinta. Koodista voidaan tehdä sellaista että
   se toimii heti myös oikean palvelimen kanssa.
*/

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './content';
import { Service } from '@angular/core';

@Service()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // content-taulukko on "valetietokanta", josta tulee sisältö
    // kolmelle SPA-näkymälle
    const content: Content[] = [
      {
        id: 1,
        name: 'Minä',
        img: 'img/me.png',
        data1: 'Tietojenkäsittelyn opiskelija',
        data2: 'Asuinpaikka Jyväskylä',
        data3: 'Mielijuoma Nokikansan virvoke',
      },
      {
        id: 2,
        name: 'Opinnot',
        img: 'img/studies.png',
        data1: 'Elämän koulu',
        data2: 'Peruskoulu',
        data3: 'Jyväskylän AMK',
      },
      {
        id: 3,
        name: 'Harrastukset',
        img: 'img/hobbies.png',
        data1: 'Ohjelmointi',
        data2: 'Koneoppiminen',
        data3: 'Data-analytiikka',
      },
      {
        id: 4,
        name: 'Työkokemus',
        img: 'img/work.png',
        data1: 'Ohjelmistosuunnittelu',
        data2: 'Käyttöliittymäkehitys',
        data3: 'Projektinhallinta',
      },
    ];

    return { content };
  }
}
