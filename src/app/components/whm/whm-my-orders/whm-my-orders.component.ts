import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';

@Component({
  selector: 'app-whm-my-orders',
  templateUrl: './whm-my-orders.component.html',
  styleUrls: ['./whm-my-orders.component.css']
})
export class WhmMyOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  constructor(private whmService: WhmService, private router : Router) { }
  username:String=JSON.parse(sessionStorage.getItem('username'));
  ngOnInit() {
    this.whmService.getMyOrders(this.username).subscribe(
      data =>{
        if(data)
        {
            this.orderList=data;   
        }
      }
    )
  }

}

