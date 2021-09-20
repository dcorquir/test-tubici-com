import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeDetailPageRoutingModule } from './bike-detail-routing.module';

import { BikeDetailPage } from './bike-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeDetailPageRoutingModule
  ],
  declarations: [BikeDetailPage]
})
export class BikeDetailPageModule {}
