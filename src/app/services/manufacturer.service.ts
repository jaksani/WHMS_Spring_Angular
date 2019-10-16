import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { serverPath } from '../constant/server-constant';
import { OrderDetails } from '../models/order-details';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private httpClient : HttpClient) { }

  getOrders(username:String):Observable<OrderDetails[]>
  {
    return this.httpClient.get<OrderDetails[]>(serverPath+"rest/viewOrders/"+username);
  }

  acceptOrder(orderDetails:OrderDetails):Observable<OrderDetails>
  {
    return this.httpClient.put<OrderDetails>(serverPath+"rest/acceptOrder",orderDetails);
  }

  rejectOrder(orderDetails:OrderDetails):Observable<OrderDetails>
  {
    return this.httpClient.put<OrderDetails>(serverPath+"rest/rejectOrder",orderDetails);
  }
}