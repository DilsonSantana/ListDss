import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursoFaltas } from '../../model/faltas/curso-faltas.model';
import { Faltas } from '../../model/faltas/faltas.model';
import { BimestreFaltas } from '../../model/faltas/bimestre-faltas.model';
import { DetailsFaltas } from '../../model/faltas/details-faltas.model';
import { ModalService } from "modal-service";
import { ComponentCustomModalComponent } from '../../components/component-custom-modal/component-custom-modal';
import { LancamentoNotaFaltaPage } from '../lancamento-nota-falta/lancamento-nota-falta';

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

  @ViewChild(ComponentCustomModalComponent)

  private modal: ComponentCustomModalComponent;

  private onNotaFaltaPageDismissSubscription: any;

  // public faltas: Faltas = []
    
//     graduacao: [
//     {
//       nome: "DIREITO CIVIL IV                        ",
//       codigo: "0304",
//       totalFaltas: 0,
//       limiteFaltas: 27, bimestres: [
//         {
//           name: "1° BIM",
//           number: 1,
//           totalFaltas: 0,
//           detalhesFaltas: [
//             {
//               data: "2017-01-01T00:00:00",
//               totalFaltas: 0
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   posgraduacao:[],
//   praticas:[]
// ]
//     },
//     posgraduacao:[],
//     praticas:[
//       {
//         nome: "PJ CIVIL", codigo: "75", totalFaltas: 0, limiteFaltas: 30, bimestres: [{
//           name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }
//           ]
//         }
//         ]
//       }
//     ]
//   }
// }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _modalService: ModalService) {

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
    this.openFaltasModal(materia, detalhes);

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


  openFaltasModal(materia, detalhes) {
    console.log("mostrando faltas modal");
    this._modalService.presentModal(LancamentoNotaFaltaPage, { type: 'faltas', materia: materia, detalhes: detalhes });
    this.onNotaFaltaPageDismissSubscription = this._modalService.onModalDismiss.subscribe(data => {
      this.onNotaFaltaPageDismissSubscription.unsubscribe();
    })
  }

}



// graduacao: [
//   {
//     nome: "DIREITO CIVIL IV                        ",
//     codigo: "0304",
//     totalFaltas: 0,
//     limiteFaltas: 27, bimestres: [
//       {
//         name: "1° BIM",
//         number: 1,
//         totalFaltas: 0,
//         detalhesFaltas: [
//           {
//             data: "2017-01-01T00:00:00",
//             totalFaltas: 0
//           }
//         ]
//       }
//     ]
//   },
//   posgraduacao:[],
//   praticas:[
//     {
//       nome: "PJ CIVIL", codigo: "75", totalFaltas: 0, limiteFaltas: 30, bimestres: [{
//         name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }
//         ]
//       }
//       ]
//     }
//   ]
// }
  // { nome: "DIREITO COMERCIAL II                    ", codigo: "0402", totalFaltas: 0, limiteFaltas: 27, bimestres: [{ name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }] }] },
  // { nome: "DIREITO PENAL III                       ", codigo: "0603", totalFaltas: 0, limiteFaltas: 27, bimestres: [{ name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }] }] },
  // { nome: "DIREITO PROCESSUAL CIVIL II             ", codigo: "0502", totalFaltas: 0, limiteFaltas: 27, bimestres: [{ name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }] }] },
  // { nome: "DIREITO PROCESSUAL PENAL                ", codigo: "0407", totalFaltas: 0, limiteFaltas: 35, bimestres: [{ name: "1° BIM", number: 1, totalFaltas: 0, detalhesFaltas: [{ data: "2017-01-01T00:00:00", totalFaltas: 0 }] }] }],


  // notas: {
  //   provas: {
  //     codigo: "1011",
  //     avaliacoes: [
  //       { materia: { codigo: "0304", nome: "DIREITO CIVIL IV", limiteFaltas: 27, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "614", nome: null }, turma: "04BN", avaliacao: "N01", valor: 3.5, lancamento: "2017-05-28T21:35:59.113", serie: 4 }, { professor: { codigo: "614", nome: null }, turma: "04BN", avaliacao: "N02", valor: 5.5, lancamento: "2017-07-05T20:49:21.06", serie: 4 }, { professor: { codigo: "614", nome: null }, turma: "04BN", avaliacao: "N03", valor: 8.0, lancamento: "2017-10-10T09:41:20.653", serie: 4 }] },
  //       { materia: { codigo: "0402", nome: "DIREITO COMERCIAL II", limiteFaltas: 27, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "526", nome: null }, turma: "04BN", avaliacao: "N01", valor: 9.0, lancamento: "2017-05-25T16:02:01.647", serie: 4 }, { professor: { codigo: "526", nome: null }, turma: "04BN", avaliacao: "N02", valor: 9.0, lancamento: "2017-08-03T14:43:48.177", serie: 4 }] },
  //       { materia: { codigo: "0603", nome: "DIREITO PENAL III", limiteFaltas: 27, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "725", nome: null }, turma: "04BN", avaliacao: "N01", valor: 7.5, lancamento: "2017-08-09T18:38:23.587", serie: 4 }, { professor: { codigo: "725", nome: null }, turma: "04BN", avaliacao: "N02", valor: 10.0, lancamento: "2017-09-13T18:52:55.937", serie: 4 }] },
  //       { materia: { codigo: "0502", nome: "DIREITO PROCESSUAL CIVIL II", limiteFaltas: 27, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "317", nome: null }, turma: "04BN", avaliacao: "N01", valor: 7.5, lancamento: "2017-06-10T18:02:19.74", serie: 4 }, { professor: { codigo: "317", nome: null }, turma: "04BN", avaliacao: "N02", valor: 4.0, lancamento: "2017-09-14T21:40:13.507", serie: 4 }] },
  //       {
  //         materia: { codigo: "0407", nome: "DIREITO PROCESSUAL PENAL", limiteFaltas: 35, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "1179", nome: null }, turma: "04BN", avaliacao: "N01", valor: 7.0, lancamento: "2017-05-19T17:18:31.327", serie: 4 }, { professor: { codigo: "1179", nome: null }, turma: "04BN", avaliacao: "N02", valor: 7.0, lancamento: "2017-08-11T20:37:18.003", serie: 4 }, { professor: { codigo: "1179", nome: null }, turma: "04BN", avaliacao: "N03", valor: 7.0, lancamento: "2017-10-17T17:24:35.727", serie: 4 }
  //         ]
  //       }
  //     ]
  //   },
  //   praticas: {
  //     codigo: "1012", avaliacoes: [
  //       {
  //         materia: { codigo: "75", nome: "PJ CIVIL", limiteFaltas: 30, totalFaltas: 0, serie: 4 }, notas: [{ professor: { codigo: "364", nome: null }, turma: "04BN", avaliacao: "N01", valor: 6.5, lancamento: "2017-05-29T00:13:34.31", serie: 4 }, { professor: { codigo: "364", nome: null }, turma: "04BN", avaliacao: "N02", valor: 4.0, lancamento: "2017-08-26T12:26:38.103", serie: 4 }
  //         ]
  //       }
  //     ]
  //   }