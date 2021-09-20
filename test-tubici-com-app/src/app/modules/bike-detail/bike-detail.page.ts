import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IInventory } from '../inventory/interfaces/inventory.interface';

import { BikeDetailService } from './bike-detail.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.page.html',
  styleUrls: ['./bike-detail.page.scss'],
})
export class BikeDetailPage implements OnInit {

  public id: number = 0;
  public bike: IInventory = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bikeServiceDetail: BikeDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfoIdRouteParam();
  }

  /**
   * @description This method is to ge bike info by id
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getInfoIdRouteParam(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bike = this.bikeServiceDetail.getBikeById(this.id);
  }

  /**
   * @description This method is to send the shop
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  toShop(): void {
    this.router.navigate([`/bike-shop/${this.id}`]);
  }


}
