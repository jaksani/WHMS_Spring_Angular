import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { WhmComponent } from './components/whm/whm/whm.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer/manufacturer.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:LoginComponent},
  { path:'warehousemanager',redirectTo:'warehousemanager/home',pathMatch:'full'},
  { path:'warehousemanager',component:WhmComponent},
  { path:'manufacturer',redirectTo:'manufacturer/home',pathMatch:'full'},
  { path:'manufacturer',component:ManufacturerComponent}
  // { path:"**",component:PageNotFoundComponent}//need to be looked at the end of the project
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