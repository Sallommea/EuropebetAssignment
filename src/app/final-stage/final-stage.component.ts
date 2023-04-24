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

  travelCard = [
    { img1: true, h3: '"Cashgame HighRollers"-', p: '1 საგზური' },
    { img1: true, h3: '"Cashgame Grinders"-', p: '1 საგზური' },
    { img1: true, h3: '"Cashgame Sharks"-', p: '1 საგზური' },
  ];

  travelCardSecond = [
    {
      img1: false,
      h3: 'Poker Legends Philippines',
      p: 'A კატეგორიის 1 საგზური',
      p2: 'B კატეგორიის 1 საგზური',
      p3: 'ტურნირში მონაწილეობის მიღება შეუძლია',
      p4: 'ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
    },
    {
      img1: true,
      h3: 'The Lord of the Rings',
      p: 'C კატეგორიის 1 საგზური',
      p2: '',
      p3: 'ტურნირში მონაწილეობის მიღება შეუძლია',
      p4: 'ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
