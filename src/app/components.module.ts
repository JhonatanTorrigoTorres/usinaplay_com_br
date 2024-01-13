import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { TreinosCarrosselComponent } from "./components/treinos-carrossel/treinos-carrossel.component";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TreinosCarrosselComponent],
  imports: [IonicModule.forRoot(), CommonModule],
  exports: [TreinosCarrosselComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class ComponentsModule { }
