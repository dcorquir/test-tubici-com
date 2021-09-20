import { Injectable } from '@angular/core';

import { IInventory } from './interfaces/inventory.interface';
import { ICategory } from './interfaces/category.interface';

import { inventoryMock } from '../../shared/mocks/inventory.mock';
import { categoriesListMock } from '../../shared/mocks/category.mock';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  /**
   * @description This method is to send request to get available catalog
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getAvailableCatalog(): IInventory[] {
    return inventoryMock;
  }

  /**
   * @description This method is to send request to get available categories
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBikeCategories(): ICategory[] {
    return categoriesListMock;
  }

  /**
   * @description This method is to send request to get catalog by category
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBikesByCategory(categoryId: number): IInventory[] {
    let catalogRet = inventoryMock.filter((inv) => inv.bikeCategoryId === categoryId);
    if (catalogRet.length > 0) {
      return catalogRet;
    }
    return inventoryMock;
  }

  /**
   * @description This method is to send request to get catalog by name
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBikesByName(name: string): IInventory[] {
    return inventoryMock.filter((inv) => inv.bikeName.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1);
  }


}
