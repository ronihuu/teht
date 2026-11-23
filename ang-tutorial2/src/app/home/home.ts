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
  //Luodaan signal-muuttuja filteredLocationList, joka sisältää suodatetun listan housinglocationeista hakusanan perusteella
  filteredLocationList = computed<HousingLocationInfo[]>(() => {
    const text = this.searchText();
    if (!text) {
      return this.housingLocationList();
    }
    return this.housingLocationList().filter((housingLocation) =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase()),
    );
  });

  //constructorissa haetaan kaikki housinglocationit palvelimelta ja asetetaan ne signal-muuttujaan
  constructor() {
    this.hService
      .getAllHousingLocations()
      .subscribe((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList.set(housingLocationList);
        //this.filteredLocationList.set(housingLocationList);
      });
  }

  getSearchText(e: Event) {
    this.searchText.set((e.target as HTMLInputElement).value);
  }

  /* filterResults(text: string) {
    //päivitetään filteredLocationList signal-muuttuja suodatetulla listalla
    if (!text) {
      this.filteredLocationList.set(this.housingLocationList());
      return;
    }
    this.filteredLocationList.set(
      this.housingLocationList().filter((housingLocation) =>
        housingLocation.city.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  } */
}
