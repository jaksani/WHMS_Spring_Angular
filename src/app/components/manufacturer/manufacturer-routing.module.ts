import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerViewOrdersComponent } from './manufacturer-view-orders/manufacturer-view-orders.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'manufacturer',component:ManufacturerComponent,
    children:[
      { path:'viewOrders',component:ManufacturerViewOrdersComponent}
    ]
  },
  { path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
