import { Injectable } from '@angular/core';
import { TravelPackage } from '../models/travel-package.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelPackageService {
  travelPackagedAandB = [
    {
      src: '../../assets/final-item-ticket-icon.png',
      content: 'ორმხრივი ავიაბილეთი',
    },
    {
      src: '../../assets/final-item-event-icon.png',
      content: 'Poker Legends Philippines-ის მეინ ივენთის ბაი-ინი',
    },
    {
      src: '../../assets/final-item-event-icon.png',
      content: 'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
    },
    {
      src: '../../assets/final-item-hotel-icon.png',
      content: 'სასტუმრო Golden Tulip Vivaldi Hotel',
    },
    {
      src: '../../assets/final-item-money-icon.png',
      content: '€500 სახარჯი ფული',
    },
  ];
  getTravelPackegeA(): Observable<TravelPackage[]> {
    return of(this.travelPackagedAandB);
  }

  getTravelPackegeB(): Observable<TravelPackage[]> {
    return of(this.travelPackagedAandB);
  }
  getTravelPackegeC(): Observable<TravelPackage[]> {
    return of([
      {
        src: '../../assets/final-item-ticket-icon.png',
        content: 'ორმხრივი ავიაბილეთი',
      },
      {
        src: '../../assets/final-item-event-icon.png',
        content: 'Poker Legends Philippines-ის მეინ ივენთის ბაი-ინი',
      },
      {
        src: '../../assets/final-item-hotel-icon.png',
        content: 'სასტუმრო',
      },
      {
        src: '../../assets/final-item-money-icon.png',
        content: '€500 სახარჯი ფული',
      },
    ]);
  }
}
