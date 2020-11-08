import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router:Router,
    private toastCtrl : ToastController,
    public navCtrl : NavController,
  ) { }

  ngOnInit() {
  }

  goToArealStatement() {
    this.router.navigate(['/areal-statement']);
  }

  goToFieldActivity() {
    this.router.navigate(['/tabs/field-activity']);
  }

  goToHarvestPlan() {
    this.router.navigate(['/tabs/harvest-plan']);
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
