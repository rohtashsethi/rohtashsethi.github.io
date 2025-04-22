import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomCasePipe } from '../../shared/pipes/custom-case.pipe';
import { AccordionGroupComponent } from '../../shared/components/accordion-group/accordion-group.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-about',
  imports: [CustomCasePipe, AccordionGroupComponent, AccordionComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
