import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Skill } from '../main-page/main-page.component';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss'],
})
export class MobileContentComponent {
  panelOpenState = false;
  @Input() skills: Skill[] = [];
}
