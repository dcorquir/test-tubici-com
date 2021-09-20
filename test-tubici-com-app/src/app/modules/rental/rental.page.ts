import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IInventory } from '../inventory/interfaces/inventory.interface';
import { IRental } from './interfaces/rental.interface';

import { RentalService } from './rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  public history: IRental[] = [];

  constructor(
    private rentalService: RentalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHistoryRental();
  }

  /**
   * @description This method is to prepare data history rental to show
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getHistoryRental(): void {
    this.history = this.rentalService.getRentalHistory();
  }

  /**
   * @description This method is for go to detail page
   * 
   * @param bike 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  showDetail(bike: IInventory): void {
    this.router.navigate([`/bike-detail/${bike.id}`]);
  }

}
