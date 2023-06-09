import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css'],
})
export class TravelCardComponent {
  @Input() imageFirst: boolean | undefined = true;
}
