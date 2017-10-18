import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  mensagens = [
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Felipe Velozo",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    },
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Dilson",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    },
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Bahia doidao",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    },
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Gaby Corinthiana",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    },
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Germinal",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    },
    {
      titulo: "Violência, direito e trabalho na organização social",
      autor: "Borges, Wilson Hilario",
      data: "1997.",
      editor: "Germinal",
      assunto: ["violência", "trabalho", "direito", "estrutura social", "movimento social"]
    }
   ];

  constructor(public navCtrl: NavController, private _socialSharing: SocialSharing) {

  }

  whatsappShare(msg) {
    this._socialSharing.shareViaWhatsApp(msg, null);
  }

  regularShare(msg) {
    var mensagem = 'Titulo: ' + msg.titulo + "\n" + 'Autor: ' + msg.autor + "\n" + 'Data: ' + msg.data + "\n" + 'Editor: ' + msg.editor + "\n" + 'Assunto: ' + msg.assunto;
    this._socialSharing.share(mensagem, "Arquivo compartilhado", "www/assets/icon/favicon.ico", "http://www.uol.com.br");
  }

  twitterShare(msg) {
    this._socialSharing.shareViaTwitter(msg, null, null);
  }

  facebookShare(msg) {
    this._socialSharing.shareViaFacebookWithPasteMessageHint(msg, "www/assets/icon/user.jpg", null, null);
  }

}
