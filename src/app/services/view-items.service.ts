import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { serverPath } from '../constant/server-constant';
import { ItemDetails } from '../beans/item-details';

@Injectable({
  providedIn: 'root'
})
export class ViewItemsService {

  constructor(private httpClient : HttpClient) { }

  viewItems():Observable<ItemDetails[]>
  {
    return this.httpClient.get<ItemDetails[]>(serverPath+"rest_viewItems");
  }
}
