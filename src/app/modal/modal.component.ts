import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  onCloseModal() {
    this.close.emit();
  }
}
