import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, Subject, map, switchMap, takeUntil, tap } from 'rxjs';
import { desktop } from '../breakpoints';

export interface Skills {
  id: number,
  skill: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  destroyed = new Subject<void>();
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe([desktop]).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  skills: Skills[] = [
    {
      id: 0,
      skill: 'Short Form Video Editing'
    },
    {
      id: 1,
      skill: 'Lighting and Content Creation Setting Management'
    },
    {
      id: 2,
      skill: 'Videography'
    },
    {
      id: 3,
      skill: 'Photography'
    },
    {
      id: 4,
      skill: 'Longform Video Editing'
    }
  ];
}
