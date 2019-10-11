import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderDetails } from 'src/app/models/order-details';

@Component({
  selector: 'app-whm-place-order',
  templateUrl: './whm-place-order.component.html',
  styleUrls: ['./whm-place-order.component.css']
})
export class WhmPlaceOrderComponent implements OnInit {

  
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;
  
  ngOnInit() {
  }

  orderForm = this.formBuilder.group({
    item_code:['',Validators.required],
    manufacturer_name:['',Validators.required],
    item_quantity:['',Validators.required]
  });

  get form()
  {
    return this.orderForm.controls
  }
  
  onSubmit(orderDetails:OrderDetails)
  { 
    this.submitted=true;
    orderDetails.manager_name=JSON.parse(sessionStorage.getItem('username'));
    this.whmService.placeOrder(orderDetails).subscribe(
      data =>
      {
        if(data)
        {
          console.log(data);
          
        }
      }
    );
    
  }

}
