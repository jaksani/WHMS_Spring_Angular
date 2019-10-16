import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-manufacturer-view-orders',
  templateUrl: './manufacturer-view-orders.component.html',
  styleUrls: ['./manufacturer-view-orders.component.css']
})
export class ManufacturerViewOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  private orderDetails:OrderDetails;
  isMessage=false;
  isDisplay=false;
  constructor(private manufacturerService: ManufacturerService, private router : Router) { }
  manufacturerDetails:User=JSON.parse(sessionStorage.getItem('manufacturerDetails'));
  ngOnInit() {
    this.manufacturerService.getOrders(this.manufacturerDetails.user_name).subscribe(
      data =>{
        this.orderList=data; 
        if(this.orderList.length!=0)
        {
          this.isDisplay=true;
        }
        else
        {
          this.isDisplay=false;

        }
      }
    )
  }

  acceptOrder(order:OrderDetails)
  {
    order.status="Accepted";
    this.manufacturerService.acceptOrder(order).subscribe(
      data =>{
        if(data)
        {
            this.orderDetails=data;  
            this.isMessage=true; 
        }
      }
    )
  }

  rejectOrder(order:OrderDetails)
  {
    order.status="Rejected";
    this.manufacturerService.rejectOrder(order).subscribe(
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


