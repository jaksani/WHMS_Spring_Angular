import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WhmModule } from './components/whm/whm.module';
import { ManufacturerModule } from './components/manufacturer/manufacturer.module';
import { LogoutComponent } from './components/logout/logout.component';
import { WhmGuard } from './auth/whm.guard';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
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
