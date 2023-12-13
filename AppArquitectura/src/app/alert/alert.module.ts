import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AlertComponent} from './alert.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class alertModule {} 