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

  /**
   * @description This method is to prepare routes to show in menu
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getAvailableRoutes(): void {
    this.appPages = menuItemsMock;
  }
}
