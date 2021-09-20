import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component';
import { InventoryListComponent } from './modules/inventory/inventory-list/inventory-list.component';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [],
    children: [
      { path: 'inventory-list', component: InventoryListComponent, canActivate: [] },
      { path: 'clients-list', component: ClientsListComponent, canActivate: [] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
