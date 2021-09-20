import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { IInventory } from '../inventory/interfaces/inventory.interface';

import { BikeDetailService } from '../bike-detail/bike-detail.service';
import { BikeShopService } from './bike-shop.service';

import { TimeUtils } from '../../shared/utils/time-utils';

@Component({
  selector: 'app-bike-shop',
  templateUrl: './bike-shop.page.html',
  styleUrls: ['./bike-shop.page.scss'],
})
export class BikeShopPage implements OnInit {

  public id: number = 0;
  public bike: IInventory = null;
  public today: string = '';
  public initDate: Date;
  public endDate: Date;
  public total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bikeServiceDetail: BikeDetailService,
    private bikeShopService: BikeShopService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.prepareTodayParam();
    this.getInfoIdRouteParam();
  }

  /**
   * @description This method is to prepare today param for limit select dates
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  prepareTodayParam(): void {
    this.today = TimeUtils.getTodayString();
  }

  /**
   * @description This method is to get bike info to show
   * 
   * @author Diego Mauricio Cortes
   * @sprint 1
   */
  getInfoIdRouteParam(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bike = this.bikeServiceDetail.getBikeById(this.id);
  }

  /**
   * @description This method is to calculate the total by date range selected to buy
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  calculateTotal() {
    if (this.initDate && this.endDate) {
      let diDays = TimeUtils.difDaysDates(this.initDate, this.endDate);
      switch(this.bike.bikeTypeId) {
        case 1:
          this.total = (this.bike.bikePrice * diDays);
          break;
        case 2:
          if (diDays < 3) {
            this.presentAlert('Error', '', 'Debe seleccionar minimo 3 dias', ['OK']);
            this.endDate = null;
          } else {
            this.total = (this.bike.bikePrice * diDays);
          }
          break;
        case 3:
          if (diDays < 5) {
            this.presentAlert('Error', '', 'Debe seleccionar minimo 5 dias', ['OK']);
            this.endDate = null;
          } else {
            this.total = (this.bike.bikePrice * diDays);
          }
      }
    }
  }

  /**
   * @description This method is to show alert
   * 
   * @param header 
   * @param subtitle 
   * @param message 
   * @param buttons 
   * @author Diego Mauricio Cortes
   * @sprint 1
   */
  async presentAlert(header: string, subtitle: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: buttons
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  /**
   * @description This method is to send rent data
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  send() {
    let resp = this.bikeShopService.save(this.bike, this.initDate, this.endDate, this.total);
    if (resp) {
      this.presentAlert('Enhorabuena', '', 'Se ha generado el pedido', ['OK']);
      this.router.navigate(['/rental']);
    } else {
      this.presentAlert('Error', '', 'Error engiando pedido', ['OK']);
    }
  }

}
