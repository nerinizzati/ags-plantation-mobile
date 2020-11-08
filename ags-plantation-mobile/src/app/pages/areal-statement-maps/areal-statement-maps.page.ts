import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService,ArealStatement } from './../../services/database.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

declare var google:any;

@Component({
  selector: 'app-areal-statement-maps',
  templateUrl: './areal-statement-maps.page.html',
  styleUrls: ['./areal-statement-maps.page.scss'],
})
export class ArealStatementMapsPage implements OnInit {

  @ViewChild('map',{static: true}) mapElement:ElementRef;

  map:any;
  arealStatements: ArealStatement = null;

  constructor(
    private route: ActivatedRoute, 
    private db: DatabaseService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      //console.log(params['block_id']);
      let block_id = params['block_id'];
 
      this.db.getBlocksDetail(block_id).then(res => {
        this.arealStatements = res;

        this.initMap();
      });
    });

  }

  initMap(){
    
    let coords = new google.maps.LatLng(this.arealStatements.latitude,this.arealStatements.longitude);

    let mapOptions = google.maps.MapOptions = {
      center : coords,
      zoom : 13,
      mapTypeId : google.maps.MapTypeId.ROADMAP,
      mapTypeControl :false,
      streetViewControl : false,
      fullScreenControl : false
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    if(Number(this.arealStatements.age)>1095){

    let marker = new google.maps.Marker({
     
      map: this.map,
      position: coords,
      icon:'assets/icon/green-dots.png'
    })}

    else if(Number(this.arealStatements.age)>548 && Number(this.arealStatements.age)<1095){

      let marker = new google.maps.Marker({
     
        map: this.map,
        position: coords,
        icon:'assets/icon/yellow-dots.png'
      })

    }
    else{
      
      let marker = new google.maps.Marker({
     
        map: this.map,
        position: coords,
        icon:'assets/icon/red-dots.png'
      })
    }
}

}
