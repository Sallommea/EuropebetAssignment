import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  currentUrl: string = '';
  show = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Current URL:', this.router.url);
    this.currentUrl = this.router.url;
    if (this.currentUrl === '/finalstage') {
      this.show = false;
    }
  }

  showComponent() {
    if (this.show === false) {
      this.show = true;
    }
  }

  hideComponent() {
    this.show = false;
  }

  onCloseModal() {}
}
