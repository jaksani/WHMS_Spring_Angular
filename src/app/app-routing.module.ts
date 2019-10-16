import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { WhmComponent } from './components/whm/whm/whm.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer/manufacturer.component';
import { WhmGuard } from './auth/whm.guard';
import { ManufacturerGuard } from './auth/manufacturer.guard';

const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:LoginComponent},
  { path:'warehousemanager',component:WhmComponent, canActivate : [WhmGuard] },
  { path:'manufacturer',component:ManufacturerComponent,canActivate:[ManufacturerGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,
                                PageNotFoundComponent,
                                WhmComponent,
                                ManufacturerComponent]