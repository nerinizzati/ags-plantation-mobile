import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity } from './../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-field-activity-approval-detail',
  templateUrl: './field-activity-approval-detail.page.html',
  styleUrls: ['./field-activity-approval-detail.page.scss'],
})
export class FieldActivityApprovalDetailPage implements OnInit {

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

  approveRecord(){

    this.db.approveRecord(this.fieldActivities.record_id).then(() => {
      this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-history-admin']);
    });


  }

  rejectRecord(){
    this.db.rejectRecord(this.fieldActivities.record_id).then(() => {
      this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-history-admin']);
    });

  }

}
