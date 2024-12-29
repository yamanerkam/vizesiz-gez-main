import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Country } from '../services/country.service';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html'
})
export class CountryModalComponent {
  @Input() country!: Country;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
} 