import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
 
import { HttpClientModule } from '@angular/common/http';

import { TabsPageModule } from './pages/tabs/tabs.module';
import { TabsAdminPageModule } from './pages/tabs-admin/tabs-admin.module';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx'

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

import 'chartjs-plugin-zoom';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, TabsPageModule, TabsAdminPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter,
    LocalNotifications,
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
