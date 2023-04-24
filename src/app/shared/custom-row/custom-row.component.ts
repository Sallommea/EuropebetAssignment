import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-row',
  templateUrl: './custom-row.component.html',
  styleUrls: ['./custom-row.component.css'],
})
export class CustomRowComponent implements OnInit {
  @Input() height: string = '70%';
  @Input() backgroundCustomColor = false;
  constructor() {}
  // background-color: #2f3535;
  ngOnInit(): void {}
}
