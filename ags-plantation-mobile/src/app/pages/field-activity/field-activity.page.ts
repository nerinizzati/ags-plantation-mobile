import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-field-activity',
  templateUrl: './field-activity.page.html',
  styleUrls: ['./field-activity.page.scss'],
})
export class FieldActivityPage implements OnInit {

  constructor(
    private router:Router,
    public navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  createFieldActivity(){
    this.router.navigate(['/tabs/field-activity/field-activity-create']);
  }

  goToFieldActivityHistory()
  {
    this.router.navigate(['/tabs/field-activity/field-activity-history']);
  }

}
