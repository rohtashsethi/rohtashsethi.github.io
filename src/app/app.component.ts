import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vscode-portfolio-app';
}
