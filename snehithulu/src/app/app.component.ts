import { Component } from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet,MenuComponent]
})
export class AppComponent {
  title = '3 of Billion';
}
