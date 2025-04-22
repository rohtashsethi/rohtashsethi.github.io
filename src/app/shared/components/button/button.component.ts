import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type Variant = 'primary' | 'default' | 'ghost';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly variant = input<Variant>('default');

  readonly variantClass = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-btn-primary hover:bg-blue-700 text-primary';
      case 'ghost':
        return 'border-white text-white';
      default:
        return 'bg-btn-default hover:bg-desat-very-dark-blue-2 text-white';
    }
  });
}
