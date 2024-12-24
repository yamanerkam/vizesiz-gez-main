import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line
import { CountryService, Country } from '../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  favoriteCountries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(private countryService: CountryService,private router: Router) {}

  ngOnInit() {
    this.favoriteCountries$ = this.countryService.favorites$.pipe(
      map((favorites: Set<string>) => this.countryService.getCountries().filter(country => favorites.has(country.countryName)))
    );
  }

  toggleFavorite(country: Country) {
    this.countryService.toggleFavorite(country.countryName);
  }

  goToCountriesList() {
    console.log(
      's'
    )
    this.router.navigate(['/tabs/tab2']);
  }

}
