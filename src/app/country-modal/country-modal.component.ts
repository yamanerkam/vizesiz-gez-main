import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Country, CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss'],
})
export class CountryModalComponent implements OnInit {
  @Input() country!: Country;
  touristImages: string[] = [];
  dishImages: string[] = [];

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    public countryService: CountryService
  ) {}

  ngOnInit() {
    return;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  toggleFavorite(country: Country) {
    this.countryService.toggleFavorite(country.countryName);
  }

  isFavorite(countryName: string): boolean {
    return this.countryService.isFavorite(countryName);
  }

 
  
} 