import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  travelQuote: string = "Travel is the only thing you buy that makes you richer. - Anonymous";
  weatherInfo: any = {
    location: 'Istanbul',
    temperature: 22,
    condition: 'Partly Cloudy',
    icon: 'partly-sunny'
  };

  popularDestinations = [
    { name: 'Hagia Sophia', image: 'https://picsum.photos/id/318/300/200' },
    { name: 'Blue Mosque', image: 'https://picsum.photos/id/395/300/200' },
    { name: 'Bosphorus', image: 'https://picsum.photos/id/399/300/200' },
    { name: 'Grand Bazaar', image: 'https://picsum.photos/id/360/300/200' },
  ];


  constructor() {}

}
