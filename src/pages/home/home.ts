import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';//0
import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData: any = {};
  scannedData: any = {};

  paramsParaSegPag = {
    unTexto: "Hola",
    unNumero: 6238
  };

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner,public navParams:NavParams) {

  }

  scan() {
    this.options = {
      prompt: 'Scan your barcode'
    }
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error: ', err);
    })
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData=data;
    }, (err) => {
      console.log('Error: ', err);
    })
  }

  createContact(){
    let data={
      code:this.scannedData.text,
    }
    this.navCtrl.push(ListPage,data);

  }

}
