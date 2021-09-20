import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
  declarations: [
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class ClientsModule { }
