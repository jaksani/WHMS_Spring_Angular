import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { serverPath } from '../constant/server-constant';
import { ItemDetails } from '../models/item-details';
import { OrderDetails } from '../models/order-details';
import { PurchaseDetails } from '../models/purchase-details';
import { CustomerDetails } from '../models/customer-details';

@Injectable({
  providedIn: 'root'
})
export class WhmService {

  constructor(private httpClient : HttpClient) { }

  viewItems():Observable<ItemDetails[]>
  {
    return this.httpClient.get<ItemDetails[]>(serverPath+"rest_viewItems");
  }

  getMyOrders(username:String):Observable<OrderDetails[]>
  {
    return this.httpClient.get<OrderDetails[]>(serverPath+"rest_myOrders/"+username);
  }

  generateBill(billingDetails:PurchaseDetails):Observable<PurchaseDetails>
  {
    return this.httpClient.post<PurchaseDetails>(serverPath+"rest_Billing",billingDetails);
  }

  getDetails(customer_code:number):Observable<CustomerDetails>
  {
    return this.httpClient.get<CustomerDetails>(serverPath+"rest_getCustomerDetails/"+customer_code);
  }

  registerCustomer(registrationDetails:CustomerDetails):Observable<CustomerDetails>
  {
    return this.httpClient.post<CustomerDetails>(serverPath+"rest_customerRegister",registrationDetails);
  }

  deleteItem(itemDetails:ItemDetails):Observable<String>
  {
    return this.httpClient.delete<String>(serverPath+"rest_DeleteItem/"+itemDetails.item_code);
  }

  updatePrice(itemDetails:ItemDetails):Observable<ItemDetails>
  {
    return this.httpClient.put<ItemDetails>(serverPath+"rest_UpdatePrice",itemDetails);
  }

  getPurchases(purchaseDetails:PurchaseDetails):Observable<PurchaseDetails[]>
  {
    return this.httpClient.get<PurchaseDetails[]>(serverPath+"rest_ListPurchase/"+purchaseDetails.date_of_purchase);
  }

  placeOrder(orderDetails:OrderDetails):Observable<OrderDetails>
  {
    return this.httpClient.post<OrderDetails>(serverPath+"rest_PlaceOrder",orderDetails);
  }
}
