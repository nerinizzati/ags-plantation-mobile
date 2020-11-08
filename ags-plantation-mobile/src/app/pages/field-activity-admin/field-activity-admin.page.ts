import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-field-activity-admin',
  templateUrl: './field-activity-admin.page.html',
  styleUrls: ['./field-activity-admin.page.scss'],
})
export class FieldActivityAdminPage implements OnInit {

  constructor(
    private router:Router,
    public navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  approveFieldActivity(){
    this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-approval']);
  }

  goToFieldActivityHistory()
  {
    this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-history-admin']);
  }


}
