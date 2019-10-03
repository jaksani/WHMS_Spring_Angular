import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhmRoutingModule } from './whm-routing.module';
import { WhmHomeComponent } from './whm-home/whm-home.component';


@NgModule({
  declarations: [WhmHomeComponent],
  imports: [
    CommonModule,
    WhmRoutingModule
  ]
})
export class WhmModule { }
