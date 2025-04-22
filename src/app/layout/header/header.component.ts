import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomCasePipe } from '../../shared/pipes/custom-case.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CustomCasePipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navItems = [
    { label: 'hello', route: '/hello' },
    { label: 'about me', route: '/about-me' },
    { label: 'projects', route: '/projects' },
    { label: 'talks', route: '/talks' },
    { label: 'blogs', route: '/blogs' },
  ];
}
