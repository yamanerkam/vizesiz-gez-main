import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CountryService, Country } from '../services/country.service';
import { CountryModalComponent } from '../country-modal/country-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  countries: Country[] = [];

  constructor(
    private countryService: CountryService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
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

  isFavorite(countryName: string): boolean {
    return this.countryService.isFavorite(countryName);
  }
}
