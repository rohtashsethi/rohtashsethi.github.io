import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/project-card/card.component';
import { CustomCasePipe } from '../../shared/pipes/custom-case.pipe';
import { Project } from '../../shared/models/project';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { CheckboxGroupComponent } from '../../shared/components/checkbox-group/checkbox-group.component';
import { Option } from '../../shared/models/option';

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
  selectedFilters = signal<string[]>([]);
  readonly title = 'projects';
  readonly defaultImage = 'projects/default-project-image.jpeg';
  readonly projects: Project[] = [
    {
      name: 'Taegis XDR',
      description: 'XDR(eXtended Detection & Response) SaaS Platform',
      url: 'https://ctpx.secureworks.com/',
      image: 'projects/taegisXDR.webp',
      tags: ['angular', 'html5', 'css3'],
    },
    {
      name: 'CookinGenie',
      description: 'Personal Chef as a Service E-Commerce Platform',
      url: 'https://cookingenie.com/',
      image: 'projects/cookinGenie.webp',
      tags: ['angular', 'html5', 'css3'],
    },
    {
      name: 'Innago',
      description: 'Property Management SaaS Platform',
      url: 'https://innago.com/',
      image: 'projects/innago.webp',
      tags: ['react', 'html5', 'css3'],
    },
    {
      name: 'ThreatSync 2.0',
      description: 'XDR Service built in Unified Security SaaS Platform',
      url: 'https://www.watchguard.com/wgrd-products/threatsync-family',
      image: 'projects/watchguardCloud.webp',
      tags: ['angular', 'html5', 'css3'],
    },
    {
      name: 'Online Banking',
      description: 'Nedbank Retail Online Banking Platform',
      url: 'https://secured.nedbank.co.za/',
      image: 'projects/nedbankOB.webp',
      tags: ['angular', 'html5', 'css3'],
    },
  ];

  filters: Option[] = [
    {
      label: 'Angular',
      icon: 'ri-angularjs-fill',
      value: 'angular',
    },
    {
      label: 'React',
      icon: 'ri-reactjs-fill',
      value: 'react',
    },
    {
      label: 'Vue',
      icon: 'ri-vuejs-fill',
      value: 'vue',
    },
    {
      label: 'Gatsby',
      icon: 'ri-gatsby-fill',
      value: 'gatsby',
    },
    {
      label: 'NodeJS',
      icon: 'ri-nodejs-fill',
      value: 'nodejs',
    },
    {
      label: 'NestJS',
      icon: 'ri-nestjs-fill',
      value: 'nestjs',
    },
    {
      label: 'HTML5',
      icon: 'ri-html5-fill',
      value: 'html5',
    },
    {
      label: 'CSS3',
      icon: 'ri-css3-fill',
      value: 'css3',
    },
  ];

  filteredProjects = computed(() => {
    const selectedFilters = this.selectedFilters();

    if (selectedFilters.length) {
      return this.projects.filter(project => {
        if (project.tags.length) {
          return selectedFilters.some(filter => project.tags.includes(filter));
        }
        return false;
      });
    }
    return this.projects;
  });

  selectedFilterStr = computed(() => {
    return this.selectedFilters().join('; ');
  });
}
