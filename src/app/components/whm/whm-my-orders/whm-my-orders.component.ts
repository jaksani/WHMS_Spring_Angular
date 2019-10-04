import { Component, OnInit } from '@angular/core';
import { WhmOrdersService } from 'src/app/services/whm-orders.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/beans/order-details';

@Component({
  selector: 'app-whm-my-orders',
  templateUrl: './whm-my-orders.component.html',
  styleUrls: ['./whm-my-orders.component.css']
})
export class WhmMyOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  constructor(private viewItemsService: WhmOrdersService, private router : Router) { }
  username:String=JSON.parse(sessionStorage.getItem('username'));
  ngOnInit() {
    this.viewItemsService.getMyOrders(this.username).subscribe(
      data =>{
        if(data)
        {
            this.orderList=data;   
        }
      }
    )
  }

}

