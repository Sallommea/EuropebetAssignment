import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  images = [
    {
      imageLink: 'assets/ticket-icon-big.png',
    },
    {
      imageLink: 'assets/ticket-icon-big.png',
    },
    {
      imageLink: 'assets/ticket-icon-big.png',
    },
    {
      imageLink: 'assets/ticket-icon-big.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
