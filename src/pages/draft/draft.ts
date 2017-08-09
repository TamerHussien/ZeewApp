import { Component, OnInit, /*Inject*/ } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Draft } from '../../shared/draft';
import { DraftProvider } from '../../providers/draft/draft'
/**
 * Generated class for the DraftPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-draft',
  templateUrl: 'draft.html',
})
export class DraftPage implements OnInit{

  draft : Draft[];
  draftErrMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private draftservice: DraftProvider, 
 /* @Inject('BaseURL') private BaseURL*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DraftPage');
  }
ngOnInit(){
    this.draftservice.getDraftList()
    .subscribe(draft => this.draft = draft,

    )
  }
}
