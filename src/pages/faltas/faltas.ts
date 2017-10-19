import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursoFaltas } from '../../model/faltas/curso-faltas.model';
import { Faltas } from '../../model/faltas/faltas.model';
import { BimestreFaltas } from '../../model/faltas/bimestre-faltas.model';
import { DetailsFaltas } from '../../model/faltas/details-faltas.model';

/**
 * Generated class for the FaltasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-faltas',
  templateUrl: 'faltas.html',
})

export class FaltasPage {
  public opcao: string = 'graduacao';
  public graduacao: CursoFaltas[];
  public posgraduacao: CursoFaltas[];
  public praticas: CursoFaltas[];
  public loader: any;
  public isModal = false;
  private curso = 0;
  private response: Faltas = new Faltas();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.response.graduacao = [
      {
        nome: "DIREITO ADMINISTRATIVO",
        codigo: "0209",
        bimestre_1: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 1 }],
            totalFaltas: 1
          }
        ],
        bimestre_2: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 2 }],
            totalFaltas: 2
          }
        ],
        bimestre_3: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 3 }],
            totalFaltas: 3
          }
        ],
        bimestre_4: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 4 }],
            totalFaltas: 4
          }
        ]
      },
      {
        nome: "DIREITO CIVIL III",
        codigo: "0209",
        bimestre_1: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 1 }],
            totalFaltas: 1
          }
        ],
        bimestre_2: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 2 }],
            totalFaltas: 2
          }
        ],
        bimestre_3: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 3 }],
            totalFaltas: 3
          }
        ],
        bimestre_4: [
          {
            detalhesFaltas: [{ data: "2017-02-22T00:00:00", totalFaltas: 4 }],
            totalFaltas: 4
          }
        ]
      }
    ];

    this.response.posgraduacao = [];
    this.response.praticas = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaltasPage');
    if (this.navParams.get("originModal")) {
      this.isModal = true;
    }


    this.getFaltas();
  }

  isGraduation() {
    return this.curso == 1011 || this.curso == 1012;
  }

  showModalFaltas(materia, detalhes) {
    console.log(materia, detalhes);
    // this.openFaltasModal(materia, detalhes);

  }

  showFaltasPraticas(materia) {
    var detalhes = Array<any>();

    materia.bimestres.forEach(b => {
      detalhes = detalhes.concat(b.detalhesFaltas);
    });

    // this.openFaltasModal(materia.nome, detalhes);
  }

  hasBimestre(materia, bimestre) {
    // return materia.bimestres.filter(b => b.number == bimestre).length > 0;
  }

  getFaltas() {


    this.graduacao = this.response.graduacao;
    this.posgraduacao = this.response.posgraduacao;
    this.praticas = this.response.praticas;

  }


  // openFaltasModal(materia, detalhes){
  //   console.log("mostrando faltas modal");
  //   this._modalService.presentModal(LancamentoNotaFaltaPage, {type: 'faltas', materia: materia, detalhes: detalhes });
  //   this.onNotaFaltaPageDismissSubscription = this._modalService.onModalDismiss.subscribe(data=>{
  //       this.onNotaFaltaPageDismissSubscription.unsubscribe();
  //   })
  // }

}
