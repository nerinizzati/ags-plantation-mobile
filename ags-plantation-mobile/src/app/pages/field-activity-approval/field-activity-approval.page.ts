import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity } from './../../services/database.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field-activity-approval',
  templateUrl: './field-activity-approval.page.html',
  styleUrls: ['./field-activity-approval.page.scss'],
})
export class FieldActivityApprovalPage implements OnInit {

  fieldActivities:FieldActivity[]=[];

  constructor(private db: DatabaseService, private router:Router) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getFieldActivity().subscribe(res => {
          this.fieldActivities = res;
        })

      }
    });
  }
  goToApprovalDetail(a){
    this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-approval', a]);
  }

}
