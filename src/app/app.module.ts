import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearViajeComponent } from './crear-viaje/crear-viaje.component';
import { TablaViajeComponent } from './tabla-viaje/tabla-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearViajeComponent,
    TablaViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
