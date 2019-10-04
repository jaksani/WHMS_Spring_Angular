import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WhmViewItemsComponent } from './components/whm/whm-view-items/whm-view-items.component';
import { WhmMyOrdersComponent } from './components/whm/whm-my-orders/whm-my-orders.component';
import { ManufacturerViewOrdersComponent } from './components/manufacturer/manufacturer-view-orders/manufacturer-view-orders.component';
import { WhmModule } from './components/whm/whm.module';
import { ManufacturerModule } from './components/manufacturer/manufacturer.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WhmViewItemsComponent,
    WhmMyOrdersComponent,
    ManufacturerViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WhmModule,
    ManufacturerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
