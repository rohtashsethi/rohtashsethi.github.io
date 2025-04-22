import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly socials = [
    {
      icon: 'ri-linkedin-box-fill',
      link: 'https://www.linkedin.com/in/rohtashsethi/',
    },
    { icon: 'ri-twitter-x-fill', link: 'https://x.com/rohtashsethi' },
    { icon: 'ri-medium-fill', link: 'https://medium.com/@rohtashsethi' },
    { icon: 'ri-code-s-slash-fill', link: 'https://dev.to/rohtashsethi' },
    { icon: 'ri-youtube-fill', link: '' },
    { icon: 'ri-npmjs-fill', link: 'https://www.npmjs.com/~rohtashsethi' },
  ];

  readonly githubUsername = '@rohtashsethi';
}
