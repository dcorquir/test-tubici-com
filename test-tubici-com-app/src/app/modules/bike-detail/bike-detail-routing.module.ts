import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeDetailPage } from './bike-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BikeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeDetailPageRoutingModule {}
