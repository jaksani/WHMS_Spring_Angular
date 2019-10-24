import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderDetails } from 'src/app/models/order-details';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-whm-place-order',
  templateUrl: './whm-place-order.component.html',
  styleUrls: ['./whm-place-order.component.css']
})
export class WhmPlaceOrderComponent implements OnInit {

  
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted=false;
  private isOrdered=false;
  private isError=false;
  private errorMessage:String;
  private orderDetails:OrderDetails;
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
    let whmDetails:User=JSON.parse(sessionStorage.getItem('whmDetails'));
    orderDetails.manager_name=whmDetails.user_name;
    this.whmService.placeOrder(orderDetails).subscribe(
      data =>
      {
        if(data)
        {
          this.orderDetails=data;
          this.isOrdered=true;     
          this.ngOnInit();     
          this.isError=false;
        }
        // else
        // {
        //   this.isError=true;
        //   this.ngOnInit();
        //   this.isOrdered=false;
        // }
      },
      (error:HttpErrorResponse)=>
      {
        this.errorMessage=error.error.message;
        this.isError=true;
        this.ngOnInit();
        this.isOrdered=false;
      }
    );
    
  }

}
