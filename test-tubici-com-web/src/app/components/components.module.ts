import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BikeDetailComponent,
    ClientDetailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
