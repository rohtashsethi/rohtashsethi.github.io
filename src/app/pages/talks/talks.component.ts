import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-talks',
  imports: [],
  templateUrl: './talks.component.html',
  styleUrl: './talks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TalksComponent {}
