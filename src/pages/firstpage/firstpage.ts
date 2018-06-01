import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ListPage } from '../../pages/list/list';

/**
 * Generated class for the FirstpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoQR() {
    this.navCtrl.push(HomePage);
  }

  gotoLista(){
    this.navCtrl.push(ListPage);
  }

}
