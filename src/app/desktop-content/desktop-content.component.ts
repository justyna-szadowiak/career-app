import { Component, Input } from '@angular/core';
import { Skill } from '../main-page/main-page.component';

@Component({
  selector: 'app-desktop-content',
  templateUrl: './desktop-content.component.html',
  styleUrls: ['./desktop-content.component.scss']
})
export class DesktopContentComponent {
  @Input() skills: Skill[] = [];
}
