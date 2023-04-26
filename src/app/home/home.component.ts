import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showModal = false;

  constructor() {
    const mediaQuery = window.matchMedia('(max-width: 786px)');
    this.showModal = mediaQuery.matches;
  }

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = !this.showModal;
  }
}
