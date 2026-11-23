import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInfo } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})
export class Details {
  //injektoidaan ActivatedRoute ja HousingService
  route = inject(ActivatedRoute);
  hService = inject(HousingService);
  //Luodaan signal-muuttuja housingLocation, joka sisältää yhden housinglocationin
  housingLocation = signal<HousingLocationInfo | undefined>(undefined);
  //Luodaan lomake, jossa on kolme kenttää: firstName, lastName ja email
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  //suoritetaan kun käyttäjä lähettää hakemuksen, tulostetaan konsoliin hakemuksen tiedot, jos kentät null, niin asetetaan tyhjä merkkijono
  submitApplication() {
    this.hService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

  //constructorissa haetaan housinglocation palvelimelta id:n perusteella ja asetetaan se signal-muuttujaan
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.hService.getHousingLocationById(housingLocationId).subscribe((housingLocation) => {
      this.housingLocation.set(housingLocation);
    });
  }
}
