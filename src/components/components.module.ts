import { NgModule } from '@angular/core';
import { ComponentCustomModalComponent } from './component-custom-modal/component-custom-modal';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [ComponentCustomModalComponent],
	imports: [ 
		IonicPageModule.forChild(ComponentCustomModalComponent)
	],
	exports: [ComponentCustomModalComponent]
})
export class ComponentsModule {}
