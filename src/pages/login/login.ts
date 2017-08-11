import { Component} from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {FormGroup, FormBuilder,Validators} from "@angular/forms";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home'

import { Storage } from '@ionic/storage';
import { User } from '../../shared/user';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm : FormGroup;
  responseData:any;

  user : User = {email:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    public auth : AuthServiceProvider
 ) {}
ngOnInit(){
      this.loginForm = this.formBuilder.group({
        email : ['', Validators.required],
        password:  ['', Validators.required],
        remember: true
      });
      
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 dismiss(){
   this.viewCtrl.dismiss();
 }

 signIn(){
   
this.auth.postData(this.user, '/business/login').then(res=>{
  this.responseData = res;
  console.log(this.responseData);
  localStorage.setItem('userData', JSON.stringify(this.responseData));
})

 }
  onSubmit(){
    
    this.user.email = this.loginForm.get('email').value;
    this.user.password= this.loginForm.get('password').value;
    this.signIn();
    this.loginForm.reset();
    this.navCtrl.popTo(HomePage);
  }
}
