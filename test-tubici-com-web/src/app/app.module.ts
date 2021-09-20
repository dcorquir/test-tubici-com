import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './modules/main/main.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { ClientsModule } from './modules/clients/clients.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
    ComponentsModule,
    InventoryModule,
    ClientsModule
  ],
  exports: [
    PrimeNgModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
