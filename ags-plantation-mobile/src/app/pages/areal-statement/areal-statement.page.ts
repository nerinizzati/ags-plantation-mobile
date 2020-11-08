import { Component, OnInit } from '@angular/core';
import { DatabaseService,ArealStatement } from './../../services/database.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areal-statement',
  templateUrl: './areal-statement.page.html',
  styleUrls: ['./areal-statement.page.scss'],
})
export class ArealStatementPage implements OnInit {

  arealStatements: ArealStatement[]=[];

  constructor(private db: DatabaseService, private router:Router) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getArealStatement().subscribe(res => {
          this.arealStatements = res;
        })}
});
  }

  goToAreaDetail(a){

      this.router.navigate(['/tabs/areal-statement', a]);
  }

}
