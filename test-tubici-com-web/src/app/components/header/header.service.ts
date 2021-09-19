import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItemsMock } from '../../shared/mocks/menu-items.mock';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  /**
   * @description This service is to send request to get menu items by rol
   * 
   * @param rol 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
   getMenuItemsByRol(rol: string): MenuItem[] {
    return menuItemsMock;
  }
}
