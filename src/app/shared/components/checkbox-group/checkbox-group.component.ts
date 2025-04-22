import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { Option } from '../../models/option';

@Component({
  selector: 'app-checkbox-group',
  imports: [],
  templateUrl: './checkbox-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent {
  options = input<Option[]>([]);
  selectedValues = model<Option[]>([]);

  selectedValuesChange = output<Option[]>();

  toggleCheckbox(option: Option) {
    const index = this.selectedValues().findIndex(val => val.value === option.value);
    if (index === -1) {
      this.selectedValues.update(values => [...values, option]);
    } else {
      this.selectedValues.update(values => {
        const clone = structuredClone(values);
        clone.splice(index, 1);
        return clone;
      });
    }
    this.selectedValuesChange.emit(this.selectedValues());
  }

  isChecked(option: Option): boolean {
    return this.selectedValues().includes(option);
  }
}
