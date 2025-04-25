import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsComponent {}
