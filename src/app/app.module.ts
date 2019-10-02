import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ManufacturerModule } from './components/manufacturer/manufacturer.module';
import { WarehousemanagerModule } from './components/warehousemanager/warehousemanager.module';
import { ViewItemsComponent } from './components/warehousemanager/view-items/view-items.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ViewItemsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ManufacturerModule,
    WarehousemanagerModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
