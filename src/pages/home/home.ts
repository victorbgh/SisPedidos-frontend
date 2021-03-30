import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../../app/services/auth.service';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public authService: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.authService.refreshToken()
      .subscribe(response => {
        this.authService.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
    },
      error => {});
  }

  login() {
    this.authService.authenticate(this.creds)
      .subscribe(response => {
        this.authService.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
    },
      error => {});
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

}
