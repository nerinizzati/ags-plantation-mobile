import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity } from './../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-field-activity-detail',
  templateUrl: './field-activity-detail.page.html',
  styleUrls: ['./field-activity-detail.page.scss'],
})
export class FieldActivityDetailPage implements OnInit {

  fieldActivities: FieldActivity = null;

  constructor(
    private route: ActivatedRoute, 
    private db: DatabaseService, 
    private router: Router, 
    private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let record_id = params.get('record_id');
 
      this.db.getFieldActivitiesDetail(record_id).then(res => {
        this.fieldActivities = res;
      });
    });
  }

}
