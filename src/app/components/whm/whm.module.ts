import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WhmRoutingModule } from './whm-routing.module';
import { WhmHomeComponent } from './whm-home/whm-home.component';
import { WhmBillingComponent } from './whm-billing/whm-billing.component';
import { WhmPlaceOrderComponent } from './whm-place-order/whm-place-order.component';
import { WhmUpdatePriceComponent } from './whm-update-price/whm-update-price.component';
import { WhmPurchaseOnADateComponent } from './whm-purchase-on-a-date/whm-purchase-on-a-date.component';
import { WhmCustomerRegistrationComponent } from './whm-customer-registration/whm-customer-registration.component';
import { WhmCustomerDetailsComponent } from './whm-customer-details/whm-customer-details.component';
import { WhmDeleteItemComponent } from './whm-delete-item/whm-delete-item.component';
import { WhmViewItemsComponent } from './whm-view-items/whm-view-items.component';
import { WhmMyOrdersComponent } from './whm-my-orders/whm-my-orders.component';


@NgModule({
  declarations: [WhmHomeComponent,
                 WhmBillingComponent,
                 WhmPlaceOrderComponent, 
                 WhmUpdatePriceComponent, 
                 WhmPurchaseOnADateComponent, 
                 WhmCustomerRegistrationComponent, 
                 WhmCustomerDetailsComponent, 
                 WhmDeleteItemComponent,
                 WhmViewItemsComponent,
                 WhmMyOrdersComponent],
  imports: [
    CommonModule,
    WhmRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WhmModule { }
