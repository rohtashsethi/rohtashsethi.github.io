import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hello',
    loadComponent: () =>
      import('./pages/hello/hello.component').then((m) => m.HelloComponent),
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'talks',
    loadComponent: () =>
      import('./pages/talks/talks.component').then((m) => m.TalksComponent),
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/blogs.component').then((m) => m.BlogsComponent),
  },
  {
    path: 'contact-me',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'hello',
  },
];
