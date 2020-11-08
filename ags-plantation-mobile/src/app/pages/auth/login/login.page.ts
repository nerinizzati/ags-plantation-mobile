import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_id : string = "";
  password: string = "";

  disabledButton;

  constructor(
    private toastCtrl : ToastController,
    private loadCtrl : LoadingController,
    private alertCtrl : AlertController,
    public navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async login(){

    if(this.user_id == "K5034"){
      this.disabledButton = false;
      this.presentToast('Login Succesfully');
      this.navCtrl.navigateRoot(['/home']);
    }
    else{
      this.disabledButton = false;
      this.presentToast('Login Succesfully');
      this.navCtrl.navigateRoot(['/admin-home']);
    }

  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration :1500
    });

    toast.present();
  }


}
