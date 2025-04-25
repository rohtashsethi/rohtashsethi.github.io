import { Component, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: ` :host { display: block; } `,
})
export class ModalComponent {
  isOpen = input<boolean>(false);
  close = output<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscHandler(event: KeyboardEvent) {
    if (this.isOpen()) {
      this.close.emit();
    }
  }
}
