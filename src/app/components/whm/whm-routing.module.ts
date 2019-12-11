import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhmComponent } from './whm/whm.component';
import { WhmViewItemsComponent } from './whm-view-items/whm-view-items.component';
import { WhmMyOrdersComponent } from './whm-my-orders/whm-my-orders.component';
import { WhmBillingComponent } from './whm-billing/whm-billing.component';
import { WhmCustomerDetailsComponent } from './whm-customer-details/whm-customer-details.component';
import { WhmCustomerRegistrationComponent } from './whm-customer-registration/whm-customer-registration.component';
import { WhmDeleteItemComponent } from './whm-delete-item/whm-delete-item.component';
import { WhmPlaceOrderComponent } from './whm-place-order/whm-place-order.component';
import { WhmPurchaseOnADateComponent } from './whm-purchase-on-a-date/whm-purchase-on-a-date.component';
import { WhmUpdatePriceComponent } from './whm-update-price/whm-update-price.component';


const routes: Routes = [
  { path:'warehousemanager',component:WhmComponent,
    children:[
      { path:'viewItems',component:WhmViewItemsComponent},
      { path:'myOrders',component:WhmMyOrdersComponent},
      { path:'billing' ,component:WhmBillingComponent},
      { path:'customerDetails' ,component:WhmCustomerDetailsComponent},
      { path:'customerRegistration' ,component:WhmCustomerRegistrationComponent},
      { path:'deleteItem',component:WhmDeleteItemComponent},
      { path:'placeOrder' ,component:WhmPlaceOrderComponent},
      { path:'purchaseOnDate' ,component:WhmPurchaseOnADateComponent},
      { path:'updatePrice' ,component:WhmUpdatePriceComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhmRoutingModule { }
