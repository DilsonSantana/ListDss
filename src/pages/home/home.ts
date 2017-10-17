import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private _socialSharing: SocialSharing) {

  }

  compilemsg(index): string {
    
    return "compartilhado por Dilson Santana";
  }

  whatsappShare(index) {
    var msg = this.compilemsg(index);
    this._socialSharing.shareViaWhatsApp(msg, "www/assets/icon/user.jpg", null);
  }

  regularShare(index) {
    var msg = this.compilemsg(index);
    this._socialSharing.share(msg, null, null, null);
  }

  twitterShare(index) {
    var msg = this.compilemsg(index);
    this._socialSharing.shareViaTwitter(msg, null, null);
  }

  facebookShare(index) {
    var msg = this.compilemsg(index);
    this._socialSharing.shareViaFacebook(msg, "www/assets/icon/user.jpg", null);
  }

}
