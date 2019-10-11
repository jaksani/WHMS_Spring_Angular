import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerHomeComponent } from './manufacturer-home/manufacturer-home.component';
import { ManufacturerViewOrdersComponent } from './manufacturer-view-orders/manufacturer-view-orders.component';



@NgModule({
  declarations: [ManufacturerHomeComponent,
                 ManufacturerViewOrdersComponent],
  imports: [
    CommonModule,
    ManufacturerRoutingModule
  ]
})
export class ManufacturerModule { }
