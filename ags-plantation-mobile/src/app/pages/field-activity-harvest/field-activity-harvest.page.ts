import { Component, OnInit } from '@angular/core';
import { DatabaseService, FieldActivity, ArealStatement } from './../../services/database.service';
import { Observable } from 'rxjs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field-activity-harvest',
  templateUrl: './field-activity-harvest.page.html',
  styleUrls: ['./field-activity-harvest.page.scss'],
})
export class FieldActivityHarvestPage implements OnInit {

  activities: Observable<any[]>;
  blocks: Observable<any[]>;
  workers: Observable<any[]>;
  assets: Observable<any[]>;
  items: Observable<any[]>;

  arealStatements: ArealStatement[]=[];

  record = {};

  disabledButton;

  scannedData : any;
  //block_id : any;

  scanOptionSelected;
  scanWorkerSelected;
  scanAssetSelected;
  scanItemSelected;

  constructor(private db: DatabaseService, private barcodeScanner:BarcodeScanner, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let record_id = params.get('record_id');
    
    this.record['block_id'] = record_id
  
    this.db.getBlocksDetail(record_id).then(res => {
      this.record['block_name'] = res.block_name;
    });
  });

    this.db.getDatabaseState().subscribe(rdy => {
      this.activities = this.db.getActivities();
      //this.blocks = this.db.getBlocks();
      this.workers = this.db.getWorkers();
      this.assets = this.db.getAssests();
      this.items = this.db.getItems();

      if (rdy) {
        this.db.getArealStatement().subscribe(res => {
          this.arealStatements = res;
        })}
      });

      this.record['activity_id'] = "GMP-0000057";
  }
  //QR-Scanner

  scanCode(){
    this.scanOptionSelected = true;
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('barcodeData',barcodeData);
        this.scannedData = barcodeData["text"];
        this.record['block_id'] = this.scannedData;
      }
    );
  }

  scanWorker(){
    this.scanWorkerSelected = true;
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('barcodeData',barcodeData);
        this.scannedData = barcodeData["text"];
        this.record['worker_id'] = this.scannedData;
      }
    );
  }

  scanAsset(){
    this.scanAssetSelected = true;
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('barcodeData',barcodeData);
        this.scannedData = barcodeData["text"];
        this.record['asset_id'] = this.scannedData;
      }
    );
  }

  scanItem(){
    this.scanItemSelected = true;
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('barcodeData',barcodeData);
        this.scannedData = barcodeData["text"];
        this.record['item_id'] = this.scannedData;
      }
    );
  }


  submit(){

    this.db.addFieldActivities(this.record['activity_id'], this.record['block_id'], this.record['area'], this.record['worker_id'], this.record['man_hour'],this.record['asset_id'],this.record['machine_hour'],this.record['item_id'],this.record['quantity'])
    .then(_ => {
      this.record= {};
    });


    this.router.navigate(['/tabs/field-activity/field-activity-history']);
  }

}
