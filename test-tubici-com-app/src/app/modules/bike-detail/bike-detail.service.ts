import { Injectable } from '@angular/core';

import { IInventory } from '../inventory/interfaces/inventory.interface';

import { inventoryMock } from '../../shared/mocks/inventory.mock';

@Injectable({
  providedIn: 'root'
})
export class BikeDetailService {

  constructor() { }

  /**
   * @description This method is to send request to get bike info
   * 
   * @param bikeId 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getBikeById(bikeId: number): IInventory {
    return inventoryMock.find((inv) => inv.id === bikeId);
  }
}
