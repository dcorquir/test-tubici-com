import { Injectable } from '@angular/core';

import { StorageUtils } from '../../shared/utils/storage-utils';
import { IInventory } from '../inventory/interfaces/inventory.interface';

import { RentalModel } from '../rental/models/rental.model';

@Injectable({
  providedIn: 'root'
})
export class BikeShopService {

  constructor() { }

  save(bike: IInventory, initDate: Date, endDate: Date, total: number): boolean {
    let myBikes = StorageUtils.get('myBikes');
    let myBike: RentalModel = new RentalModel(
      Math.random(),
      1,
      bike,
      initDate,
      endDate,
      total
    );
    if (myBikes === null || myBikes === undefined) {
      StorageUtils.save('myBikes', JSON.stringify([myBike]));
      return true;
    } else {
      let bikes = JSON.parse(myBikes);
      bikes.push(myBike);
      StorageUtils.save('myBikes', JSON.stringify(bikes));
      return true;
    }
    return false;
  }



}
