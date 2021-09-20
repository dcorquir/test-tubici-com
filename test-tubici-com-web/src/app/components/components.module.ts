import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BikeDetailComponent,
    ClientDetailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BikeDetailComponent,
    ClientDetailComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
