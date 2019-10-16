import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-whm-my-orders',
  templateUrl: './whm-my-orders.component.html',
  styleUrls: ['./whm-my-orders.component.css']
})
export class WhmMyOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  private orderDetails:OrderDetails;
  private isMessage=false;
  constructor(private whmService: WhmService, private router : Router) { }
  whmDetails:User=JSON.parse(sessionStorage.getItem('whmDetails'));
  username:String=this.whmDetails.user_name;
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


  cancelOrder(order:OrderDetails)
  {
    order.status="Canceled";
    this.whmService.cancelOrder(order).subscribe(
      data =>{
        if(data)
        {
            this.orderDetails=data;  
            this.isMessage=true; 
        }
      }
    )
  }

}

