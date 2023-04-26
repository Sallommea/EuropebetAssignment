import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = !this.showModal;
  }
}
