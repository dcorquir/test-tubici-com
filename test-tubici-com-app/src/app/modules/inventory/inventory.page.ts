import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InventoryService } from './inventory.service';

import { IInventory } from './interfaces/inventory.interface';
import { ICategory } from './interfaces/category.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  public catalogList: IInventory[] = [];
  public categoriesList: ICategory[] = [];

  public categorySelect: number = 0;
  public nameFilter: string = '';

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAvailableCatalog();
    this.getBikeCategories();
  }

  /**
   * @description This method is to prepare list catalog
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getAvailableCatalog(): void {
    this.catalogList = this.inventoryService.getAvailableCatalog();
  }

  /**
   * @description This method is to prepare categories to list
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBikeCategories(): void {
    this.categoriesList = this.inventoryService.getBikeCategories();
  }


  /**
   * @description This method is to filter catalog by category
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  filterCatalogByCategory(): void {
    this.catalogList = this.inventoryService.getBikesByCategory(this.categorySelect);
  }

  /**
   * @description This method is to filter catalog by name
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  filterCatalogByName(): void {
    if (this.nameFilter.length === 0) {
      this.catalogList = this.inventoryService.getAvailableCatalog();
    } else if (this.nameFilter.length > 3) {
      this.catalogList = this.inventoryService.getBikesByName(this.nameFilter);
    }
  }

  showDetail(bike: IInventory): void {
    this.router.navigate([`/bike-detail/${bike.id}`]);
  }

}
