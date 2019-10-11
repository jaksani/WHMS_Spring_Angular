import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/order-details';

@Component({
  selector: 'app-manufacturer-view-orders',
  templateUrl: './manufacturer-view-orders.component.html',
  styleUrls: ['./manufacturer-view-orders.component.css']
})
export class ManufacturerViewOrdersComponent implements OnInit {

  private orderList:OrderDetails[];
  constructor(private manufacturerService: ManufacturerService, private router : Router) { }
  username:String=JSON.parse(sessionStorage.getItem('username'));
  ngOnInit() {
    this.manufacturerService.getOrders(this.username).subscribe(
      data =>{
        if(data)
        {
            this.orderList=data;   
        }
      }
    )
  }

}


