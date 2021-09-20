import { Component, OnInit } from '@angular/core';
import { menuItemsMock } from './shared/mocks/menu-items.mock';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [];

  constructor() {}

  ngOnInit(): void {
    this.getAvailableRoutes();
  }

  getAvailableRoutes(): void {
    this.appPages = menuItemsMock;
  }
}
