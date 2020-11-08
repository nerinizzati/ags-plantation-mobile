import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FieldActivity {
  record_id : number,
  activity_id : string,
  activity_name : string,
  block_id : string,
  block_name: string,
  area: string,
  worker_id: string,
  worker_name : string,
  man_hour : string,
  asset_id : string,
  asset_name : string,
  machine_hour : string,
  item_id : string,
  item_name  : string,
  quantity : string,
  created_at : string,
  status : string,
  month :string
}

export interface ArealStatement{
  block_id : string,
  block_name: string,
  land_area : string,
  land_area_unit : string,
  plant_varieties: string,
  plant_categories : string,
  plant_quantity : string,
  planting_date : string,
  latitude :string,
  longitude:string,
  age : string
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  fieldActivities = new BehaviorSubject([]);
  arealStatements = new BehaviorSubject([]);
  activities = new BehaviorSubject([]);
  //blocks = new BehaviorSubject([]);
  workers = new BehaviorSubject([]);
  assets = new BehaviorSubject([]);
  items = new BehaviorSubject([]);
  harvests = new BehaviorSubject([]);
  mobileUser = new BehaviorSubject([]);

  constructor(
    private plt: Platform, 
    private sqlitePorter: SQLitePorter, 
    private sqlite: SQLite, 
    private http: HttpClient
  ) { 
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'mobile_axapta.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadFieldActivities();
          this.loadActivities();
          //this.loadBlocks();
          this.loadWorkers();
          this.loadAssets();
          this.loadItems(); 
          this.loadArealStatement();

          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getFieldActivity(): Observable<FieldActivity[]> {
    return this.fieldActivities.asObservable();
  }

  getArealStatement(): Observable<ArealStatement[]>{
    return this.arealStatements.asObservable();
  }

  getActivities():Observable<any[]>{
    return this.activities.asObservable();
  }

 /* getBlocks():Observable<any[]>{
    return this.blocks.asObservable();
  }*/

  getWorkers():Observable<any[]>{
    return this.workers.asObservable();
  }

  getAssests():Observable<any[]>{
    return this.assets.asObservable();
  }

  getItems():Observable<any[]>{
    return this.items.asObservable();
  }

  getHarvests():Observable<any[]>{
    return this.harvests.asObservable();
  }

  getMobileUser():Observable<any[]>{
    return ;
  }

  /*getArealStatement(): Observable<ArealStatement[]> {
    return this.arealStatements.asObservable();
  }*/

  loadActivities(){
    let query = 'SELECT * FROM activity';
    return this.database.executeSql(query, []).then(data => {
      let activities = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          activities.push({ 
            activity_id: data.rows.item(i).activity_id,
            activity_name: data.rows.item(i).activity_name,
          });
        }
      }
      this.activities.next(activities);
    });

  }

  /*loadBlocks(){
    let query = 'SELECT * FROM areal_statement';
    return this.database.executeSql(query, []).then(data => {
      let blocks = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          blocks.push({ 
            block_id: data.rows.item(i).block_id,
            block_name: data.rows.item(i).block_name
          });
        }
      }
      this.blocks.next(blocks);
    });
  }*/

  loadBlocksHarvest(){
    let query = 'SELECT *, round((julianday("now") - julianday(planting_date))) AS age FROM areal_statement ORDER BY age DESC';
    return this.database.executeSql(query, []).then(data => {
      let harvests = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          harvests.push({ 
            block_id : data.rows.item(i).block_id,
            block_name : data.rows.item(i).block_name,
            age : data.rows.item(i).age
          });
        }
      }
      this.harvests.next(harvests);
    });
  }

  loadWorkers(){
    let query = 'SELECT * FROM worker';
    return this.database.executeSql(query, []).then(data => {
      let workers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          workers.push({ 
            worker_id: data.rows.item(i).worker_id,
            worker_name: data.rows.item(i).worker_name
          });
        }
      }
      this.workers.next(workers);
    });
  }

  loadAssets(){
    let query = 'SELECT * FROM asset';
    return this.database.executeSql(query, []).then(data => {
      let assets = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          assets.push({ 
            asset_id: data.rows.item(i).asset_id,
            asset_name: data.rows.item(i).asset_name
          });
        }
      }
      this.assets.next(assets);
    });
  }

  loadItems(){
    let query = 'SELECT * FROM material';
    return this.database.executeSql(query, []).then(data => {
      let items = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          items.push({ 
            item_id: data.rows.item(i).item_id,
            item_name: data.rows.item(i).item_name
          });
        }
      }
      this.items.next(items);
    });
  }

  loadArealStatement(){
    let query = 'SELECT *, round((julianday("now") - julianday(planting_date))) AS age from areal_statement';

    return this.database.executeSql(query, []).then(data => {
      let arealStatements:ArealStatement[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          arealStatements.push({ 
            block_id : data.rows.item(i).block_id,
            block_name: data.rows.item(i).block_name,
            land_area : data.rows.item(i).land_area,
            land_area_unit : data.rows.item(i).land_area_unit,
            plant_varieties: data.rows.item(i).plant_varieties,
            plant_categories : data.rows.item(i).plant_categories,
            plant_quantity : data.rows.item(i).plant_quantity,
            planting_date : data.rows.item(i).planting_date,
            latitude : data.rows.item(i).latitude,
            longitude : data.rows.item(i).longitude,
            age : data.rows.item(i).age
           });
        }
      }
      this.arealStatements.next(arealStatements);
    });

    
  }

  loadFieldActivities() {
    let query = 'SELECT *, strftime("%d/%m/%Y %H:%M", created_at) AS created_at, strftime("%m", created_at) AS month FROM activity_record JOIN activity ON activity.activity_id = activity_record.activity_id JOIN areal_statement ON areal_statement.block_id = activity_record.block_id JOIN worker ON worker.worker_id = activity_record.worker_id JOIN asset ON asset.asset_id = activity_record.asset_id JOIN material ON material.item_id = activity_record.item_id ORDER BY record_id DESC';
    
    return this.database.executeSql(query, []).then(data => {
      let fieldActivities:FieldActivity[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          fieldActivities.push({ 
            record_id: data.rows.item(i).record_id,
            activity_id:data.rows.item(i).activity_id,
            activity_name:data.rows.item(i).activity_name,
            block_id:data.rows.item(i).block_id,
            block_name:data.rows.item(i).block_name,
            area: data.rows.item(i).area,
            worker_id: data.rows.item(i).worker_id,
            worker_name : data.rows.item(i).worker_name,
            man_hour : data.rows.item(i).man_hour,
            asset_id : data.rows.item(i).asset_id,
            asset_name : data.rows.item(i).asset_name,
            machine_hour : data.rows.item(i).machine_hour,
            item_id : data.rows.item(i).item_id,
            item_name  : data.rows.item(i).item_name,
            quantity : data.rows.item(i).quantity,
            created_at : data.rows.item(i).created_at,
            status : data.rows.item(i).status,
            month : data.rows.item(i).month
           });
        }
      }
      this.fieldActivities.next(fieldActivities);
    });
  }

  getFieldActivitiesDetail(record_id): Promise<FieldActivity> {
    return this.database.executeSql('SELECT *, strftime("%d/%m/%Y %H:%M", created_at) AS created_at, strftime("%m", created_at) AS month FROM activity_record JOIN activity ON activity.activity_id = activity_record.activity_id JOIN areal_statement ON areal_statement.block_id = activity_record.block_id JOIN worker ON worker.worker_id = activity_record.worker_id JOIN asset ON asset.asset_id = activity_record.asset_id JOIN material ON material.item_id = activity_record.item_id WHERE record_id = ?', [record_id]).then(data => {
      return {
        record_id: data.rows.item(0).record_id,
            activity_id:data.rows.item(0).activity_id,
            activity_name:data.rows.item(0).activity_name,
            block_id:data.rows.item(0).block_id,
            block_name:data.rows.item(0).block_name,
            area: data.rows.item(0).area,
            worker_id: data.rows.item(0).worker_id,
            worker_name : data.rows.item(0).worker_name,
            man_hour : data.rows.item(0).man_hour,
            asset_id : data.rows.item(0).asset_id,
            asset_name : data.rows.item(0).asset_name,
            machine_hour : data.rows.item(0).machine_hour,
            item_id : data.rows.item(0).item_id,
            item_name  : data.rows.item(0).item_name,
            quantity : data.rows.item(0).quantity,
            created_at : data.rows.item(0).created_at,
            status : data.rows.item(0).status,
            month : data.rows.item(0).month
      }
    });
  }

  getBlocksDetail(block_id): Promise<ArealStatement>{

    return this.database.executeSql('SELECT *, round((julianday("now") - julianday(planting_date))) AS age from areal_statement  WHERE block_id = ?', [block_id]).then(data => {
      return {
        block_id : data.rows.item(0).block_id,
            block_name: data.rows.item(0).block_name,
            land_area : data.rows.item(0).land_area,
            land_area_unit : data.rows.item(0).land_area_unit,
            plant_varieties: data.rows.item(0).plant_varieties,
            plant_categories : data.rows.item(0).plant_categories,
            plant_quantity : data.rows.item(0).plant_quantity,
            planting_date : data.rows.item(0).planting_date,
            latitude : data.rows.item(0).latitude,
            longitude : data.rows.item(0).longitude,
            age : data.rows.item(0).age     
      }
    });

  }

  addFieldActivities(activity_id, block_id, area, worker_id, man_hour,asset_id,machine_hour,item_id,quantity) {
    let man_hour_float = parseFloat(man_hour); 
    let machine_hour_float = parseFloat(machine_hour);
    let quantity_int = parseInt(quantity);
    let area_float = parseFloat(area); 
    //let created_at = new Date().toLocaleString();

    let data = [activity_id, block_id, area_float, worker_id, man_hour_float,asset_id,machine_hour_float,item_id,quantity_int];
    return this.database.executeSql('INSERT INTO activity_record (activity_id, block_id, area, worker_id, man_hour,asset_id,machine_hour,item_id,quantity,created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime("now","localtime"))', data).then(data => {
      this.loadFieldActivities();
    });
  }

  approveRecord(record_id){
    let status_approved = "Approved";
    let data = [status_approved, record_id]
    return this.database.executeSql('UPDATE activity_record SET status=? WHERE record_id=?', data).then(data => {
      this.loadFieldActivities();
    });

  }

  rejectRecord(record_id){
    let status_approved = "Rejected";
    let data = [status_approved, record_id]
    return this.database.executeSql('UPDATE activity_record SET status=? WHERE record_id=?', data).then(data => {
      this.loadFieldActivities();
    });

  }

}
