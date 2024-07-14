import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

}
