import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  readonly image = input<string>();
  readonly logo = input<string>();
  readonly url = input<string>();
  readonly description = input<string>();
}
