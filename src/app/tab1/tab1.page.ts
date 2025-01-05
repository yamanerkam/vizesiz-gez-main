import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CountryModalComponent } from '../country-modal/country-modal.component';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  travelQuote: string = "Seyahat ettiğiniz her yer size yeni bir hikaye kazandırır.";
  weatherInfo: any = {
    location: 'İstanbul',
    temperature: 12,
    condition: 'Parçalı Bulutlu',
    icon: 'partly-sunny'
  };

  popularDestinations = [
    { 
      name: 'Tiflis Sameba Katedrali, Gürcistan', 
      image: 'https://media.istockphoto.com/id/1199815656/tr/foto%C4%9Fraf/tiflis-kutsal-teslis-katedrali-g%C3%BCrc%C3%BC-ortodoks-kilisesinin-ana-katedrali-g%C3%BCrcistan.webp?s=1024x1024&w=is&k=20&c=VpweqXn0Ih9wOsm7t1VHDZPadfw7JB81ozWeDZ-xaJM=',
      countryId: 12
    },
    { 
      name: 'Mostar Köprüsü, Bosna Hersek', 
      image: 'https://cdn1.ntv.com.tr/gorsel/4nbnA54CTEmTYTsGM3tRjg.jpg?width=1000&mode=both&scale=both&v=1605078501157',
      countryId: 6
    },
    { 
      name: 'Sveti Stefan, Karadağ', 
      image: 'https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2020/17/sveti_stefan_nerede_muhtesem_manzara_ve_essiz_doga_1587540132_558.jpg',
      countryId: 27
    },
    { 
      name: 'Kalemegdan Kalesi, Sırbistan', 
      image: 'https://media.istockphoto.com/id/1369116230/tr/foto%C4%9Fraf/kalemegdan-fortress-in-belgrade-serbia.jpg?s=612x612&w=0&k=20&c=SWX5wXQ8aUxYfZiOvVVjAFg-Mda39rV_3l2hqrcjXZo=',
      countryId: 38
    },
  ];

  constructor(
    private modalController: ModalController,
    private countryService: CountryService
  ) {}

  async openCountryModal(countryId: number) {
    const country = this.countryService.getCountries().find(c => c.id === countryId);
    if (country) {
      const modal = await this.modalController.create({
        component: CountryModalComponent,
        componentProps: {
          country: country
        }
      });
      return await modal.present();
    }
  }
}
