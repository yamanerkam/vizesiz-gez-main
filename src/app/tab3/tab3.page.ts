import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryService, Country } from '../services/country.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CountryModalComponent } from '../country-modal/country-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  favoriteCountries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(
    private countryService: CountryService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.favoriteCountries$ = this.countryService.favorites$.pipe(
      map((favorites: Set<string>) => 
        this.countryService.getCountries().filter(country => 
          favorites.has(country.countryName)
        )
      )
    );
  }

  async openCountryModal(country: Country) {
    const modal = await this.modalController.create({
      component: CountryModalComponent,
      componentProps: { country }
    });
    return await modal.present();
  }

  toggleFavorite(country: Country) {
    this.countryService.toggleFavorite(country.countryName);
  }

  goToCountriesList() {
    this.router.navigate(['/tabs/tab2']);
  }
}
