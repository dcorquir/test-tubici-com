import { Injectable } from '@angular/core';

import { StorageUtils } from '../../shared/utils/storage-utils';
import { IRental } from './interfaces/rental.interface';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor() { }

  /**
   * @description This method is to send request to get history rental
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getRentalHistory(): IRental[] {
    let history = StorageUtils.get('myBikes');
    if (history !== null && history !== undefined) {
      return JSON.parse(history);
    }
    return [];
  }
}
