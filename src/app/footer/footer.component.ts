import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { desktop } from '../breakpoints';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isHidden: boolean | null = false;
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe([desktop]).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
