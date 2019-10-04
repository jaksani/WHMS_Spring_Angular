import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { serverPath } from '../constant/server-constant';
import { OrderDetails } from '../beans/order-details';


@Injectable({
  providedIn: 'root'
})
export class WhmOrdersService {

  constructor(private httpClient : HttpClient) { }

  getMyOrders(username:String):Observable<OrderDetails[]>
  {
    return this.httpClient.get<OrderDetails[]>(serverPath+"rest_myOrders/"+username);
  }
}
