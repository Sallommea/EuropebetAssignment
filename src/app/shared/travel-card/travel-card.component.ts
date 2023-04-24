import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css'],
})
export class TravelCardComponent implements OnInit {
  @Input() imageFirst: boolean | undefined = true;
  constructor() {}

  ngOnInit(): void {}
}
