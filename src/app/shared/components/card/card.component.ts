import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly image = input<string>();
  readonly defaultImage = input.required<string>();
  readonly logo = input<string>();
  readonly url = input<string>('');
  readonly description = input<string>();
  readonly linkLabel = input.required<string>();

  finalImage = computed(() => {
    const image = this.image();
    const defaultImage = this.defaultImage();
    if (image) return image;
    if (defaultImage) return defaultImage;
    return 'projects/default-project-image.jpeg';
  });
}
