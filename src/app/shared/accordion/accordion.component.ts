import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  isCollapsedone = true;
  isCollapsedtwo = true;
  isCollapsedthree = true;
  termsAndConditions = [
    {
      id: 'one',
      heading: 'როდის და რა ფორმატით გაიმართება აქცია',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam. Phasellus vestibulum lorem sed risus ultricies. Placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque varius morbi enim nunc faucibus.',
    },
    {
      id: 'two',
      heading: 'როდის და რა ფორმატით გაიმართება აქცია',
      body: 'Egestas tellus rutrum tellus pellentesque. Nec feugiat in fermentum posuere urna nec tincidunt. Cras pulvinar mattis nunc sed blandit libero. Tortor aliquam nulla facilisi cras fermentum. ',
    },
    {
      id: 'three',
      heading: 'როდის და რა ფორმატით გაიმართება აქცია',
      body: 'Aliquam malesuada bibendum arcu vitae elementum. Urna neque viverra justo nec. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Odio ut sem nulla pharetra diam sit amet. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Molestie at elementum eu facilisis sed odio morbi quis commodo. Semper eget duis at tellus at. ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  show(event: any) {
    const id = event.target.ariaLabel;
    if (id === 'one') this.isCollapsedone = !this.isCollapsedone;
    else if (id === 'two') this.isCollapsedtwo = !this.isCollapsedtwo;
    else if (id === 'three') this.isCollapsedthree = !this.isCollapsedthree;
  }
}
