/*
Reaktiivinen haku signaalien avulla toteutetaan tässä.
Hakukenttä on tiedostossa home.html
*/
import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { Card } from '../card/card';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  contentService: ContentService = inject(ContentService);

  // Content-taulukko signaalina
  content: Signal<Content[]>;
  // Hakutermi, joka on aluksi tyhjä
  searchterm: WritableSignal<string> = signal('');

  /* content-taulukon alkioiden (x) filtteröinti hakutermin avulla.
     includes hakee tekstin sen nimen sisältämien kirjainten perusteella.
     startsWith hakisi alkukirjainten perusteella */
  filteredC = computed(() =>
    this.content().filter((x) => x.text.toLowerCase().includes(this.searchterm().toLowerCase()))
  );

  constructor() {
    /*
     Data haetaan "tietokannasta" observablena servicen kautta.
     data muunnetaan signaaliksi toSignal-metodilla.
    */
    this.content = toSignal(this.contentService.getAllContent(), {
      initialValue: [],
    });
  }
  /* 
    Metodi, joka suoritetaan aina kun hakukentässä oleva arvo muuttuu.
    Muuttunut arvo asetetaan (set), searchterm-signaaliin. 
  */
  searchText(e: Event) {
    this.searchterm.set((e.target as HTMLInputElement).value);
  }
}
