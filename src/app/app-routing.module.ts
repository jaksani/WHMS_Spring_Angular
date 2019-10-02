import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { WareHouseManagerComponent } from './components/warehousemanager/ware-house-manager/ware-house-manager.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer/manufacturer.component';

const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:LoginComponent},
  { path:'warehousemanager',component:WareHouseManagerComponent},
  { path:'manufacturer',component:ManufacturerComponent},
  { path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,
                                PageNotFoundComponent,
                                WareHouseManagerComponent,
                                ManufacturerComponent]