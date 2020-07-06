import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearViajeComponent } from './crear-viaje/crear-viaje.component';
import { TablaViajeComponent } from './tabla-viaje/tabla-viaje.component';

const routes: Routes = [
  {path: 'crear-viaje-component', component: CrearViajeComponent},
  {path: 'tabla-viaje-component', component: TablaViajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
