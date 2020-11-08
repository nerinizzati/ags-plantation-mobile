import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity } from './../../services/database.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field-activity-history-admin',
  templateUrl: './field-activity-history-admin.page.html',
  styleUrls: ['./field-activity-history-admin.page.scss'],
})
export class FieldActivityHistoryAdminPage implements OnInit {

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

  goToHistoryDetail(a){

    this.router.navigate(['/tabs-admin/field-activity-admin/field-activity-history-admin', a]);
}

}
