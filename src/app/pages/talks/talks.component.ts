import { httpResource } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { Option } from '../../shared/models/option';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CheckboxGroupComponent } from '../../shared/components/checkbox-group/checkbox-group.component';
import { Talk } from '../../shared/models/talk';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-talks',
  imports: [
    CardComponent,
    AccordionComponent,
    CheckboxGroupComponent,
    ModalComponent,
    ButtonComponent,
  ],
  templateUrl: './talks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TalksComponent {
  isOpen = signal<boolean>(true);
  selectedFilters = signal<Option[]>([]);
  readonly title = 'talks';
  readonly defaultImage = 'projects/default-project-image.jpeg';
  readonly linkLabel = 'view-slides';
  isModalOpen = signal<boolean>(false);
  selectedTalk = signal<Talk | null>(null);

  readonly talks = httpResource<Talk[]>('json/talks.json', {
    defaultValue: [],
  });

  readonly filters = httpResource<Option[]>('json/talk-filters.json', {
    defaultValue: [],
  });

  readonly filteredTalks = computed(() => {
    const selectedFilters = this.selectedFilters();
    const talks = this.talks.value();

    if (selectedFilters.length) {
      return talks.filter((talk) => {
        if (talk.tags.length) {
          return selectedFilters.some((filter) =>
            talk.tags.includes(filter.value)
          );
        }
        return false;
      });
    }
    return talks;
  });

  readonly selectedFilterStr = computed(() => {
    return this.selectedFilters()
      .map((val) => val.label)
      .join('; ');
  });

  openTalkDetails(talk: Talk): void {
    this.selectedTalk.set(talk);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.selectedTalk.set(null);
    this.isModalOpen.set(false);
  }
}
