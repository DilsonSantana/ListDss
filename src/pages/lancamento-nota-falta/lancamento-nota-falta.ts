import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DetailsFaltas } from "../../model/faltas/details-faltas.model";
import * as moment from 'moment';

/**
 * Generated class for the LancamentoNotaFaltaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lancamento-nota-falta',
  templateUrl: 'lancamento-nota-falta.html',
})
export class LancamentoNotaFaltaPage {
  public showFaltas: boolean;
  public materia: string; 
  public detalhes: Array<DetailsFaltas>;
  public lancamento:string;
  public nota:string;
  public type = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
  }

  ionViewDidLoad() {
    this.materia = this.navParams.get("materia");
    this.nota = this.navParams.get("nota");
    this.lancamento = this.navParams.get("lancamento");
    this.detalhes = this.navParams.get("detalhes");
    this.type = this.navParams.get("type");

    console.log(this.detalhes)
  }

  dismiss() {
    let data: any = null;
    this.viewCtrl.dismiss(data);
  }

  checkList(){
    if(this.type == 'faltas')
      return true;
    else 
      return false;
  }

  getDateFormated(date, includeHours){
    if(date){
      let dtString = date.replace("T", " ").replace("-", "/");
      if(includeHours){
        return moment(dtString).format("DD/MM/YYYY HH:mm");
      }else{
        return moment(dtString).format("DD/MM/YYYY");
      }
    }else{
      return "";
    }
  }

}
