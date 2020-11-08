import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  constructor(
    private router:Router,
    private toastCtrl : ToastController,
    public navCtrl : NavController,
  ) { }

  ngOnInit() {
  }

  goToApproveActivity() {
    this.router.navigate(['/tabs-admin']);
  }

  goToReport() {
    this.router.navigate(['/tabs-admin/report']);
  }

  async logout(){
    this.navCtrl.navigateRoot(['/login']);
    this.presentToast('Logout succesfully');
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration :1500
    });

    toast.present();
  }

}
