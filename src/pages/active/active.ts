import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Active } from '../../shared/active';
import { Order } from '../../shared/order';

import { ActiveProvider } from '../../providers/active/active';
import { OrderProvider } from '../../providers/order/order';
/**
 * Generated class for the ActivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage implements OnInit{

  active : Active[];
  order: Order[];
  activeErrMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private activeservice: ActiveProvider,private orderservice: OrderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }
  ngOnInit(){
    this.activeservice.getActiveList()
    .subscribe(active => this.active = active);
    this.orderservice.getOrderList()
    .subscribe(order => this.order = order)

  }
}
