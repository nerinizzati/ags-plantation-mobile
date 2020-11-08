import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { Label, Colors } from 'ng2-charts';
import { Chart } from 'chart.js';
import { DatabaseService, FieldActivity, ArealStatement } from './../../services/database.service';
import { Observable } from 'rxjs';
//import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  activities: Observable<any[]>;
  activity_id:string="";
  totalArea: number;
  totalBlock: number;

  month:any = [];
  area: any = [];

  lineChart: any;
  
  @ViewChild('lineCanvas') lineCanvas;

  lines: any;
  colorArray: any;
  fieldActivities:FieldActivity[]=[];

  /*segment_opt:string="";
  activity_id:string="";
  totalArea: number;
  totalBlock: number;

  ChartData: ChartDataSets[] = [{data: [], label: 'Area'}];
  chartLabels: Label[];

  chartType= 'line';

  /*chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Historic Stock price'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };

  chartColors: Colors[] = [{
    borderColor:'#000000',
    backgroundColor:'#a5f0c4'
    }
  ];*/

  constructor(
    private router:Router,
    public navCtrl : NavController,
    private db: DatabaseService
  ) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      this.activities = this.db.getActivities();
    });
  }

  ionViewWillEnter(){
    this.fieldActivities = [];
  }

  /*getData(){

    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getFieldActivity().subscribe(res => {

          this.ChartData[0].data = [];
          this. chartLabels = [];
          let sumArea = 0;
          let sumBlock = 0;

          this.fieldActivities = res;

          for(let record of res){
            this.chartLabels.push(record.month);
    
              if (record.activity_id == this.activity_id){     
              
              this.ChartData[0].data.push(record['area']);

              sumArea += parseFloat(record.area);
              sumBlock++;
    
            }
            
                       
          }
          
            this.totalArea = sumArea;
            console.log(this.totalArea);
    
            this.totalBlock = sumBlock;
            console.log(this.totalBlock);  
        })
      }
    });
    
  }*/
  
  getData(){
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getFieldActivity().subscribe(res => {
          this.fieldActivities = res;

          this.month =[];
          this.area =[];
          let sumArea = 0;
          let sumBlock = 0;


          for(let record of res){
            //this.fieldActivities.push(record);
            
              if (record.activity_id == this.activity_id){ 
                
                this.month.push(record.month);
                this.area.push(record.area);

                sumArea += parseFloat(record.area);
                sumBlock++;

              //let month = record.month;
              //let area = record.area;
            }}
              //console.log(month);
              //console.log(area);
              this.totalArea = sumArea;
              //console.log(this.totalArea);
    
              this.totalBlock = sumBlock;
              //console.log(this.totalBlock);



          this.lines = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
              labels: this.month.reverse(),
              datasets: [{
                label: 'Area',
                data:this.area,
                //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1,
                fill : false

              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

        })
      }
    });

    //console.log(this.fieldActivities);
    //console.log(this.area);
    

    /*if (this.fieldActivities['record_id']==this.activity_id){

    this.lines = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.fieldActivities['month'],
        datasets: [{
          label: 'Area',
          data: this.fieldActivities['area'],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }*/


  }

  
}
