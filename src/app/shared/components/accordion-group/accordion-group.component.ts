import { ChangeDetectionStrategy, Component, contentChildren, effect, input } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-group',
  imports: [],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionGroupComponent {
  isMulti = input<boolean>(false);
  accordions = contentChildren<AccordionComponent>(AccordionComponent);

  constructor() {
    effect(() => {
      const accordions = this.accordions();
      const isMulti = this.isMulti();
      if (accordions && !isMulti) {
        accordions.forEach((accordion, index) => {
          accordion.openedChange.subscribe((opened: boolean) => {
            if (opened) {
              this.closeOthers(index);
            }
          });
        });
      }
    });
  }

  private closeOthers(openIndex: number) {
    this.accordions().forEach((accordion, index) => {
      if (index !== openIndex) {
        accordion.open.set(false);
      }
    });
  }
}
