import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { desktop } from '../breakpoints';
import { BreakpointObserver } from '@angular/cdk/layout';

interface MenuItems {
  title: string,
  link: string,
  isDesktopAvailable: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItems[] = [
    {
      title: 'Home',
      link: '/',
      isDesktopAvailable: true,
    },
    {
      title: 'Career',
      link: '/',
      isDesktopAvailable: false,
    },
  ]
  MenuItems: MenuItems[] = [];
  showMenu = false;
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe([desktop]).pipe(map(result => result.matches));

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  onToggle() {
    this.showMenu = !this.showMenu;
  }

  navigationToLogin(param: string = ''): void {
    const navigationDetails: string[] = ['/login'];

    if(param.length) {
      navigationDetails.push(param);
    }

    this.router.navigate(navigationDetails);
  }
}
