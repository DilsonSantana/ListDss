import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  private _body = 'Realizando teste de compartilhamento';
  private _subject = 'Livro compartilhado por Dilson';
  private _emails = ['dilson.santos@tripletech.com.br'];

  private _message = "Realizando teste de compartilhamento";
  private _image = '../assets/icon/user.jpg';
  private _url = "http://www.uol.com.br";

  constructor(public navCtrl: NavController, private _socialSharing: SocialSharing) {

  }


  public canSharingEmail() {

    this._socialSharing.canShareViaEmail().then(() => {
      this.sharingEmail();
    }).catch(() => {
      alert("Email nao disponivel");
    });
  };

  public sharingEmail() {

    this._socialSharing.shareViaEmail(this._body, this._subject, this._emails).then(() => {
      alert('Compartilhamento realizado!');
    }).catch(() => {
      alert('Compartilhamento não foi realizado!');
    });

  };

  // public sharingWhatsapp() {

  //   this._socialSharing.shareViaWhatsApp(this._message, null, this._url).then(() => {
  //     alert('Compartilhamento realizado!');
  //   }).catch(err => {
  //     alert('Compartilhamento não foi realizado!');
  //   });

  // };


  // public sharing() {

  //   this._socialSharing.share("Genral Share Sheet", null/*Subject*/, null/*File*/, "http://pointdeveloper.com").then(() => {
  //     alert('Compartilhamento realizado!');
  //   }).catch(err => {
  //     alert('Compartilhamento não foi realizado!');
  //   });

  // };
}
