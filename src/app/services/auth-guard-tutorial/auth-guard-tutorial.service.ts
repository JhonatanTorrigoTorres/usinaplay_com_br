import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTutorialService {

  constructor(private navCtrl: NavController) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem(`${environment.keyLocalStorage}.sms`)) {
      this.navCtrl.navigateRoot('/ativar-conta');
      return false;
    }

    return true;
  }
}
