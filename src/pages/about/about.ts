import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
