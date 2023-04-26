import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent {
  isCollapsed: boolean = true;
  @Input() accordeonItem:
    | {
        id: string;
        heading: string;
        body: string;
      }
    | undefined;
  constructor() {}
  show() {
    this.isCollapsed = !this.isCollapsed;
  }
}
