import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LancamentoNotaFaltaPage } from './lancamento-nota-falta';

@NgModule({
  declarations: [
    LancamentoNotaFaltaPage,
  ],
  imports: [
    IonicPageModule.forChild(LancamentoNotaFaltaPage),
  ],
  exports: [
    LancamentoNotaFaltaPage
  ]
})
export class LancamentoNotaFaltaPageModule {}
