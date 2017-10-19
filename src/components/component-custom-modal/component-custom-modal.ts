import { Component } from '@angular/core';
import { BimestreFaltas } from '../../model/faltas/bimestre-faltas.model';
import { DetailsFaltas } from '../../model/faltas/details-faltas.model';

/**
 * Generated class for the ComponentCustomModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-custom-modal',
  templateUrl: 'component-custom-modal.html'
})
export class ComponentCustomModalComponent {

  showFaltas = false;
  materianame: string;
  lancamento: string;
  nota: string;
  private showing = false;
  text: string;
  listaBimestre: BimestreFaltas;
  detalhesFaltas: DetailsFaltas[];
  totalFaltas: number;

  constructor() {
    console.log('Hello ComponentCustomModalComponent Component');
    this.text = 'Hello World';
  }
  closeModal() {
    this.showing = false;
  }

  showModal(materia, nota, lancamento) {
    this.materianame = materia;
    this.nota = nota;
    this.lancamento = lancamento;
    this.showing = true;

    this.showFaltas = false;
  }

  showModalFaltas(materia: string, detalhes: Array<DetailsFaltas>) {
    this.materianame = materia;
    this.detalhesFaltas = detalhes;

    this.showing = true;
    this.showFaltas = true;
  }

  checkList() {
    if (this.showFaltas)
      return true;
    else
      return false;
  }
}
