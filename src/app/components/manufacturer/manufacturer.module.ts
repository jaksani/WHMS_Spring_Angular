import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerHomeComponent } from './manufacturer-home/manufacturer-home.component';



@NgModule({
  declarations: [ManufacturerHomeComponent],
  imports: [
    CommonModule,
    ManufacturerRoutingModule
  ]
})
export class ManufacturerModule { }
