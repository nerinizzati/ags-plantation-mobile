import { Component, OnInit } from '@angular/core';
import { DatabaseService, ArealStatement } from './../../services/database.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-areal-statement-detail',
  templateUrl: './areal-statement-detail.page.html',
  styleUrls: ['./areal-statement-detail.page.scss'],
})
export class ArealStatementDetailPage implements OnInit {

  arealStatements: ArealStatement = null;

  constructor(
    private route: ActivatedRoute, 
    private db: DatabaseService, 
    private router: Router, 
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let block_id = params.get('block_id');
 
      this.db.getBlocksDetail(block_id).then(res => {
        this.arealStatements = res;
      });
    });
  }

  goToMap(a){

    /*let navigationExtras:NavigationExtras = {
      queryParams :{
        block_id : a
      }
    }*/

    this.router.navigate(['/tabs/areal-statement/areal-statement-maps', a]);
  }

}
