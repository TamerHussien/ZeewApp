import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from "@angular/forms";
import { NavController,AlertController, Events} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

//import { Order } from '../../shared/order';
import { Draft } from '../../shared/draft';
import {OrderProvider} from '../../providers/order/order';
import {DraftProvider} from '../../providers/draft/draft';

import { Zeew } from '../../shared/zeew'

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public guid : string;


  responseData:any;
  session : string;
  map:any;
  image:any;
  orders: Zeew ={session : '' ,
    zuuid :0,
    pickUp :{
	         address :{ country : '' , latitude :'' , longitude :'' , locality : ''  , postal_code : ''  , route : ''  , street_number : ''  },
	         businessName : ''  , email : ''  , phone : ''  ,
	         website : ''  },
	dropOff :{
		         firstName : ''  , lastName : ''  , businessName : ''  , phone : ''  , email : ''  , instructions : '' ,
		         address :{
			     route : ''  , locality : ''  , country : ''  , latitude :'' , longitude :'' }, apt_no : ''  },
	orderInfo :
			{ 
            id : ''  , memo : ''  , when : ''  ,
			    delivery_date :{ date : ''  , hours : ''  , minutes : ''  },
			                    small :'' , medium :'' , large :'' },
			
	status : 'PENDING' }
  orderErrMess: string;
  myForm: FormGroup;
  public pickUpAddress : any; //{
 country: string;
latitude: string;
longitude: string;
locality: string;
 postal_code: string;
route: string;
street_number: string;
bussinessName:string;
address:{};
email:string;
phone:string;
website:string;
// };
  public Details : {};
 // public zeewInfo: zeew [];
 public userOrder;
  draft = new Draft();
  constructor(private alertCtrl: AlertController,public formBuilder: FormBuilder,public navCtrl: NavController,
    private orderservice: OrderProvider,private draftservice: DraftProvider,public events : Events,public auth : AuthServiceProvider
  ) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.Details = data;

    
    //this.session = this.Details;
    //console.log(data);    
    }

  // GoogleMap(){
  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 8,
  //         center: {lat: 56.9496487, lng: 24.10518639999998}
  //       });

  //       this.image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  //       var beachMarker = new google.maps.Marker({
  //         position: {lat: 56.9496487, lng: 24.10518639999998},
  //         map: this.map,
  //         icon: this.image
  //       });


  // }
      ionViewDidLoad(){
    //     this.events.subscribe('recipe: added',(data) =>{
    //       this.zeewInfo = data;
    //       console.log(this.zeewInfo);
          
    // console.log(this.session);
    //     });
  
  this.guid = localStorage.getItem('guid');
  console.log(this.guid);
 this.country = localStorage.getItem('country'); //{"country":"Latvia","latitude":'56.955471',"longitude":'24.153497900000048',"locality":"Rīga","postal_code":"LV-1009","route":"Pērnavas iela","street_number":"39"}
 console.log(this.country); 
 this.latitude = localStorage.getItem('latitude');
  this.locality = localStorage.getItem('locality');
  this.longitude= localStorage.getItem('longitude');
  this.postal_code= localStorage.getItem('postal_code');
  this.route= localStorage.getItem('route');
  this.street_number= localStorage.getItem('street_number');
  this.bussinessName = localStorage.getItem('businessName');
  console.log(this.route);
  this.email = localStorage.getItem('email');
  this.phone = localStorage.getItem('phone');
  this.website = localStorage.getItem('website');
  this.session = this.guid.toString();
        
      }

ngOnInit(){
this.myForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    businessname:['', Validators.required],
    address:['', Validators.required],
    apt_no:['', Validators.required],
    phoneNum:['', Validators.required],
    email:['', Validators.required],
    specialInst:['', Validators.required],
   letter: ['', Validators.required],
    small: ['', Validators.required],
    large:['', Validators.required],
    orderId: ['', Validators.required],
    memo:['', Validators.required],
    periority:['', Validators.required],
    Time:['', Validators.required],
    Date:['', Validators.required],
    minute:['', Validators.required]
    

});
  
  //this.GoogleMap();

  // this.events.subscribe('recipe: added',(data) =>{
  //         this.zeewInfo = data;
  //         console.log(data);
  //       });
  
}
onSubmit(){
  // this.orderservice.addOrder(this.userInfo)
  //   .subscribe(order => order);
  //   this.myForm.reset();
  //   let alert = this.alertCtrl.create({
  //   title: 'Done',
  //   subTitle: 'Your Order Sent Successfully',
  //   buttons: ['Dismiss']
  // });
  // alert.present();
    
 
  
this.getOrderInfo();
  this.auth.postData(this.orders, '/order/open').then(res=>{
  this.responseData = res;

  });


}

getOrderInfo(){
   this.orders.session = this.session;
this.orders.pickUp.address.country = this.country //{"country":"Latvia","latitude":'56.955471',"longitude":'24.153497900000048',"locality":"Rīga","postal_code":"LV-1009","route":"Pērnavas iela","street_number":"39"}
  this.orders.pickUp.address.latitude = this.latitude;
  this.orders.pickUp.address.locality = this.locality;
  this.orders.pickUp.address.longitude= this.longitude;
  this.orders.pickUp.address.postal_code= this.postal_code;;
  this.orders.pickUp.address.route= this.route
  this.orders.pickUp.address.street_number= this.street_number;
  this.orders.pickUp.businessName = this.bussinessName;
  
  this.orders.dropOff.address = {"route":"Aleksandra Čaka iela","locality":"Rīga","country":"لاتفيا","latitude":'56.9589301',"longitude":'24.141407000000072'};
  this.orders.dropOff.firstName = this.myForm.get('firstName').value;
  this.orders.dropOff.lastName = this.myForm.get("lastName").value;
  this.orders.dropOff.businessName = this.myForm.get('businessname').value;
  this.orders.dropOff.apt_no = this.myForm.get('apt_no').value;
  this.orders.dropOff.phone = this.myForm.get('phoneNum').value;
  this.orders.dropOff.instructions = this.myForm.get('specialInst').value;
  this.orders.orderInfo.id = this.myForm.get('orderId').value;
  this.orders.orderInfo.small = this.myForm.get('letter').value;
  this.orders.orderInfo.large = this.myForm.get('large').value;
  this.orders.orderInfo.medium = this.myForm.get('small').value;
  this.orders.orderInfo.when = this.myForm.get('periority').value;
  this.orders.orderInfo.delivery_date.date = this.myForm.get('Date').value;
  this.orders.orderInfo.delivery_date.hours = this.myForm.get('Time').value;
  this.orders.orderInfo.delivery_date.minutes = this.myForm.get('minute').value;
}
  saveDraft(){
   //this.draft.pickup = this.userInfo.address;
   //this.draft.order = this.userInfo.orderId;
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
