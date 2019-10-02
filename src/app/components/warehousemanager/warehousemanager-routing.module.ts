import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewItemsComponent } from './view-items/view-items.component';
import { WareHouseManagerComponent } from './ware-house-manager/ware-house-manager.component';


const routes: Routes = [
  
    { path:'viewItems',component:ViewItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousemanagerRoutingModule { }
