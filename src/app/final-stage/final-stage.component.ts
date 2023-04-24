import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css'],
})
export class FinalStageComponent implements OnInit {
  cardContent = [
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

  cardContentThird = [
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
