import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';//0

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstpagePage } from "../pages/firstpage/firstpage";
import { ListPage } from "../pages/list/list";

import { Contacts, Contact } from "@ionic-native/contacts";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstpagePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstpagePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,//0
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Contacts
  ]
})
export class AppModule {}
