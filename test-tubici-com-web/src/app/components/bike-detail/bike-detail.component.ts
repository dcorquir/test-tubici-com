import { Component, OnInit, Input, SimpleChange } from '@angular/core';

import { IInventory } from '../../modules/inventory/inventory-list/interfaces/inventory.interface';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {

  @Input("product") product: IInventory;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let changeProduct: SimpleChange = changes['product'];
    console.log('changeProduct', changeProduct);
    if (changeProduct !== undefined && changeProduct.currentValue !== null) {
      this.product = changeProduct.currentValue;
    }
  }

}
