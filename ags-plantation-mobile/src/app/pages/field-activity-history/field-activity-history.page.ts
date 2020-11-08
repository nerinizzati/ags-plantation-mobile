import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity } from './../../services/database.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field-activity-history',
  templateUrl: './field-activity-history.page.html',
  styleUrls: ['./field-activity-history.page.scss'],
})
export class FieldActivityHistoryPage implements OnInit {

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

    this.router.navigate(['/tabs/field-activity/field-activity-history', a]);
}

}
