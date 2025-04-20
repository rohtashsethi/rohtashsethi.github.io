import { Component, computed, input } from '@angular/core';

export type Variant = 'primary' | 'default' | 'ghost';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly variant = input<Variant>('default');

  readonly variantClass = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-soft-orange hover:bg-blue-700 text-dark-blue';
      case 'ghost':
        return 'border-white text-white';
      default:
        return 'bg-desat-very-dark-blue hover:bg-desat-very-dark-blue-2 text-white';
    }
  });
}
