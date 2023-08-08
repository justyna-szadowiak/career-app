import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { desktop } from '../breakpoints';

export interface Skill {
  id: number,
  name: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  destroyed = new Subject<void>();
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe([desktop]).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  skills: Skill[] = [
    {
      id: 0,
      name: 'Short Form Video Editing'
    },
    {
      id: 1,
      name: 'Lighting and Content Creation Setting Management'
    },
    {
      id: 2,
      name: 'Videography'
    },
    {
      id: 3,
      name: 'Photography'
    },
    {
      id: 4,
      name: 'Longform Video Editing'
    }
  ];
}
