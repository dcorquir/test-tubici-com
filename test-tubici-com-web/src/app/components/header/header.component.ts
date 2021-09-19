import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];
  public myRol: string = 'admin';

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.getMenuItemsByRol(this.myRol);
  };

  /**
   * @description This method is to prepare menu items
   * 
   * @param rol 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getMenuItemsByRol(rol: string): void {
    this.items = this.headerService.getMenuItemsByRol(rol);
  }
  
}
