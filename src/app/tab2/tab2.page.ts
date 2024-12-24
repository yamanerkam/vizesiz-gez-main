import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService, Country } from '../services/country.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    countries: Country[] = [];
    favorites$: Observable<Set<string>>;
  
    constructor(private countryService: CountryService) {
      this.favorites$ = this.countryService.favorites$;
    }
  
    ngOnInit() {
      this.countries = this.countryService.getCountries();
    }
  
    toggleFavorite(country: Country) {
      this.countryService.toggleFavorite(country.countryName);
    }
  
    isFavorite(countryName: string): boolean {
      return this.countryService.isFavorite(countryName);
    }
}
