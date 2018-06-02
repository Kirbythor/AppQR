import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts,ContactFieldType, IContactFindOptions,Contact,ContactField
  ,ContactName } from "@ionic-native/contacts";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  ourtype:ContactFieldType[]=["displayName"];
  contactsFound=[];

  public code:any=null;
  public texto:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private contacts:Contacts) {
    this.search('');//mostrar los contactos
  }

  ionViewDidLoad() {
    //Obtención de valores a través de NavParams
     this.code=this.navParams.get('code');
     this.texto='Mundo';
  }

  search(q){
    //Búsqueda de contactos que cumplen con filtros
    const option:IContactFindOptions={
      filter:q
    }
    this.contacts.find(this.ourtype,option).then(conts=>{
      this.contactsFound=conts;
    })
  }

  onKeyUp(ev){
    this.search(ev.target.value);//Busqueda No implementada
  }

  addContact(){
    //Descomposición de contenido de cadena codificada
    let txt=this.code;
    let arr=txt.split(',');
    let fname=arr[0];
    let lname=arr[1];
    let pnum=arr[2];
    

    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, lname, fname);
    contact.phoneNumbers = [new ContactField('mobile', pnum)];
    contact.save().then(
      () => alert('Contact saved! '+ contact),
      (error: any) => alert('Error saving contact. '+error)
    );
  }

}
