import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DatabaseService, ArealStatement } from './../../services/database.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-harvest-plan',
  templateUrl: './harvest-plan.page.html',
  styleUrls: ['./harvest-plan.page.scss'],
})
export class HarvestPlanPage implements OnInit {

  //harvests:any;
  arealStatements: ArealStatement[]=[];
  //harvests: Observable<any[]>;

  
  constructor(
    private router:Router,
    private localNotifications:LocalNotifications,
    private db: DatabaseService) { }

  ngOnInit() {

    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {

        //this.harvests = this.db.getHarvests();

        this.db.getArealStatement().subscribe(res => {
          this.arealStatements = res;

        })}
    });

  }

  scheduleNotification(ms:number){
    this.localNotifications.schedule({
      title: 'Harvest Reminder',
      text: 'Havest block now',
      trigger: {at:new Date(new Date().getTime() + ms)}
    });

  }

  newHarvest(a){ 
    this.router.navigate(['/tabs/field-activity/field-activity-harvest', a]);
  }

  changeNum(a:string){
    return Number(a);
  }


}
