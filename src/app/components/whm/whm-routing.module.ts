import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhmComponent } from './whm/whm.component';
import { WhmViewItemsComponent } from './whm-view-items/whm-view-items.component';
import { WhmMyOrdersComponent } from './whm-my-orders/whm-my-orders.component';
import { WhmHomeComponent } from './whm-home/whm-home.component';


const routes: Routes = [
  { path:'warehousemanager',component:WhmComponent,
    children:[
      { path:'home',component:WhmHomeComponent},
      { path:'viewItems',component:WhmViewItemsComponent},
      { path:'myOrders',component:WhmMyOrdersComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhmRoutingModule { }
