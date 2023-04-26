import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-row',
  templateUrl: './custom-row.component.html',
  styleUrls: ['./custom-row.component.css'],
})
export class CustomRowComponent {
  @Input() height: string = '70%';
  @Input() backgroundCustomColor = false;
}
