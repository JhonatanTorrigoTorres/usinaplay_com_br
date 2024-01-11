import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreinosCarrosselComponent } from "./components/treinos-carrossel/treinos-carrossel.component";

@NgModule({
  declarations: [AppComponent, TreinosCarrosselComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  exports: [TreinosCarrosselComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
