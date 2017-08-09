import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from "@angular/forms";
import { NavController,AlertController  } from 'ionic-angular';
import { Order } from '../../shared/order';
import { Draft } from '../../shared/draft';
import {OrderProvider} from '../../providers/order/order';
import {DraftProvider} from '../../providers/draft/draft';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  map:any;
  image:any;
  orders: Order[];
  orderErrMess: string;
  myForm: FormGroup;

  userInfo = new Order();
  draft = new Draft();
  constructor(private alertCtrl: AlertController,public formBuilder: FormBuilder,public navCtrl: NavController,private orderservice: OrderProvider,private draftservice: DraftProvider) {

  }

  GoogleMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 56.9496487, lng: 24.10518639999998}
        });

        this.image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 56.9496487, lng: 24.10518639999998},
          map: this.map,
          icon: this.image
        });


  }

ngOnInit(){
this.myForm = this.formBuilder.group({
    'firstName':['', [Validators.required]],
    'lastName':['', [Validators.required]],
    'businessname':['', [Validators.required]],
    'address':['', [Validators.required]],
    'phoneNum':['', [Validators.required]],
    'email':['', [Validators.required]],
    'specialInst':['', [Validators.required]],
   'letter': ['', [Validators.required]],
    'small': ['', [Validators.required]],
    'large':['', [Validators.required]],
    'orderId': ['', [Validators.required]],
    'memo':['', [Validators.required]],
    'periority':['', [Validators.required]],
    'dateTime':['', [Validators.required]]

});
   
  this.GoogleMap();

}
onSubmit(){
  this.orderservice.addOrder(this.userInfo)
    .subscribe(order => order);
    this.myForm.reset();
    let alert = this.alertCtrl.create({
    title: 'Done',
    subTitle: 'Your Order Sent Successfully',
    buttons: ['Dismiss']
  });
  alert.present();
    
}
  saveDraft(){
   this.draft.pickup = this.userInfo.address;
   this.draft.order = this.userInfo.orderId;
   this.draft.dropoff = "Egypt";
   this.draftservice.addDraft(this.draft)
    .subscribe(draft => draft);

    this.myForm.reset();
    let alert = this.alertCtrl.create({
    title: 'Done',
    subTitle: 'Your Order Saved in Drafts',
    buttons: ['Dismiss']
  });
  alert.present();
  }
  Cancel(){
    this.myForm.reset();
  }

 


}
