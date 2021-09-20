import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeShopPageRoutingModule } from './bike-shop-routing.module';

import { BikeShopPage } from './bike-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeShopPageRoutingModule
  ],
  declarations: [BikeShopPage]
})
export class BikeShopPageModule {}
