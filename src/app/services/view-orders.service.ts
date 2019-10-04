import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { serverPath } from '../constant/server-constant';
import { OrderDetails } from '../beans/order-details';

@Injectable({
  providedIn: 'root'
})
export class ViewOrdersService {

  constructor(private httpClient : HttpClient) { }

  getOrders(username:String):Observable<OrderDetails[]>
  {
    return this.httpClient.get<OrderDetails[]>(serverPath+"rest_viewOrders/"+username);
  }
}