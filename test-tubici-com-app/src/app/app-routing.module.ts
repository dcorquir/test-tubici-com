import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'bike-detail/:id',
    loadChildren: () => import('./modules/bike-detail/bike-detail.module').then( m => m.BikeDetailPageModule)
  },
  {
    path: 'bike-shop/:id',
    loadChildren: () => import('./modules/bike-shop/bike-shop.module').then( m => m.BikeShopPageModule)
  },
  {
    path: 'rental',
    loadChildren: () => import('./modules/rental/rental.module').then( m => m.RentalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
