import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Country } from '../services/country.service';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss'],
})
export class CountryModalComponent implements OnInit {
  @Input() country: Country;
  touristImages: string[] = [];
  dishImages: string[] = [];

  constructor(private modalController: ModalController, private http: HttpClient) {}

  ngOnInit() {
    this.fetchTouristImages();
    this.fetchDishImages();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  fetchTouristImages() {
    const url = 'https://api.example.com/tourist-images'; // Replace with actual API endpoint
    this.http.get<string[]>(url).subscribe(images => {
      this.touristImages = images;
    });
  }

  fetchDishImages() {
    const url = 'https://api.example.com/dish-images'; // Replace with actual API endpoint
    this.http.get<string[]>(url).subscribe(images => {
      this.dishImages = images;
    });
  }
} 