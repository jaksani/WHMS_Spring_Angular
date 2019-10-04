import { Component, OnInit } from '@angular/core';
import { ViewOrdersService } from 'src/app/services/view-orders.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/beans/order-details';

@Component({
  selector: 'app-manufacturer-view-orders',
  templateUrl: './manufacturer-view-orders.component.html',
  styleUrls: ['./manufacturer-view-orders.component.css']
})
export class ManufacturerViewOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  constructor(private viewItemsService: ViewOrdersService, private router : Router) { }
  username:String=JSON.parse(sessionStorage.getItem('username'));
  ngOnInit() {
    this.viewItemsService.getOrders(this.username).subscribe(
      data =>{
        if(data)
        {
            this.orderList=data;   
        }
      }
    )
  }

}


