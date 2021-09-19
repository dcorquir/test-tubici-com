import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { ComponentsModule } from '@app/components/components.module';


@NgModule({
  declarations: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class InventoryModule { }
