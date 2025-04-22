import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, input, model, output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  readonly title = input.required<string>();
  open = model<boolean>(false);
  openedChange = output<boolean>();

  toggle(): void {
    this.open.set(!this.open());
    this.openedChange.emit(this.open());
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }
}
