import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { CustomCasePipe } from '../../shared/pipes/custom-case.pipe';
import { Project } from '../../shared/models/project';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { CheckboxGroupComponent } from '../../shared/components/checkbox-group/checkbox-group.component';
import { Option } from '../../shared/models/option';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [
    CardComponent,
    CustomCasePipe,
    AccordionComponent,
    CheckboxGroupComponent,
  ],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  isOpen = signal<boolean>(true);
  selectedFilters = signal<Option[]>([]);
  readonly title = 'projects';
  readonly defaultImage = 'projects/default-project-image.jpeg';
  readonly linkLabel = 'view-project';

  readonly projects = httpResource<Project[]>('json/projects.json', {
    defaultValue: [],
  });

  readonly filters = httpResource<Option[]>('json/project-filters.json', {
    defaultValue: [],
  });

  readonly filteredProjects = computed(() => {
    const selectedFilters = this.selectedFilters();
    const projects = this.projects.value();

    if (selectedFilters.length) {
      return projects.filter((project) => {
        if (project.tags.length) {
          return selectedFilters.some((filter) =>
            project.tags.includes(filter.value)
          );
        }
        return false;
      });
    }
    return projects;
  });

  readonly selectedFilterStr = computed(() => {
    return this.selectedFilters()
      .map((val) => val.label)
      .join('; ');
  });
}
