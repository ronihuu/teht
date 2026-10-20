import { Component, computed, inject, signal } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  imports: [HousingLocation],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

//Luodaan Home-luokka, joka sisältää hakutoiminnon ja suodatetun listan housinglocationeista
export class Home {
  //injektoidaan HousingService
  hService = inject(HousingService);
  //Luodaan signal-muuttuja housingLocationList, joka sisältää kaikki housinglocationit
  housingLocationList = signal<HousingLocationInfo[]>([]);
  //Luodaan signal-muuttuja searchText, joka sisältää hakusanan
  searchText = signal<string>('');

  //Luodaan computed-muuttuja filteredLocationList, joka sisältää suodatetun listan housinglocationeista hakusanan perusteella
  filteredLocationList = computed<HousingLocationInfo[]>(() => {
    //haetaan hakusana, muutetaan se pieniksi kirjaimiksi ja poistetaan mahdolliset välilyönnit
    const search = this.searchText().toLowerCase().trim();

    //jos hakusanaa ei ole annettu, palautetaan koko lista
    if (!search) {
      return this.housingLocationList();
    }

    //suodatetaan housinglocationit hakusanan perusteella
    return this.housingLocationList().filter((location) =>
      location.city.toLowerCase().includes(search),
    );
  });

  //constructorissa haetaan kaikki housinglocationit palvelimelta ja asetetaan ne signal-muuttujaan
  constructor() {
    this.hService
      .getAllHousingLocations()
      .subscribe((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList.set(housingLocationList);
      });
  }
}
