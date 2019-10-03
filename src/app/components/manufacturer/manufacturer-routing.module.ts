import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerHomeComponent } from './manufacturer-home/manufacturer-home.component';
import { ManufacturerViewOrdersComponent } from './manufacturer-view-orders/manufacturer-view-orders.component';


const routes: Routes = [
  {path:'maufacturer',component:ManufacturerComponent,
    children:[
      { path:'home',component:ManufacturerHomeComponent},
      { path:'viewOrders',component:ManufacturerViewOrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
