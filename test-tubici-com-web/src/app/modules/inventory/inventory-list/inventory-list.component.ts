import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { IInventory } from './interfaces/inventory.interface';
import { InventoryListService } from './inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public products: IInventory[] = [];
  public product: IInventory = null;
  public showInfo: boolean = false;

  constructor(
    private inventoryListService: InventoryListService
  ) { }

  ngOnInit(): void {
    this.getAvailableInventoryList();
  }

  /**
   * @description This method is to prepare inventory list items to show
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
   getAvailableInventoryList(): void {
    this.products = this.inventoryListService.getAvailableInventoryList();
    console.log("INV", this.products);
  }

  /**
   * @description This method is to show dialog detail
   * 
   * @param bike 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  showBikeDetail(bike: IInventory) {
    this.showInfo = true;
    this.product = bike;
  }

  /**
   * @description This method is to close dialog detail
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  closeBikeDetail() {
    this.showInfo = false;
    this.product = null;
  }

  /**
   * @description This method is to calculate the buy value
   * 
   * @param bike 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBuy(bike: IInventory) {
    switch(bike.bikeTypeId) {
      case 1:
        return bike.bikePrice;
      case 2:
        return bike.bikePrice * 3;
      case 3:
        return bike.bikePrice * 5;
    }
  }

}
