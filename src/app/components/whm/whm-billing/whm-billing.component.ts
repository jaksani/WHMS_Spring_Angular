import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  Validators} from '@angular/forms';
import { PurchaseDetails } from 'src/app/models/purchase-details';
import { WhmService } from 'src/app/services/whm.service';
import { HttpErrorResponse } from '@angular/common/http/http';

@Component({
  selector: 'app-whm-billing',
  templateUrl: './whm-billing.component.html',
  styleUrls: ['./whm-billing.component.css']
})
export class WhmBillingComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted:boolean=false;
  private isDisplay:boolean=false;
  private isMessage:boolean=false;
  private errorMessage:string;
  // private isCustomer:boolean=false;
  // private isItem:boolean=false;
  // private isStock:boolean=false;
  // private itemCode:number;
  // private customerCode:number;
  private purchaseDetails:PurchaseDetails=null;

  
  ngOnInit() {
  }

  billingForm = this.formBuilder.group({
    customer_code:['',Validators.required],
    item_code:['',Validators.required],
    quantity:['',Validators.required]
  });

  get form()
  {
    return this.billingForm.controls
  }
  
  onSubmit(billingDetails:PurchaseDetails)
  { 
    this.submitted=true;
    this.whmService.generateBill(billingDetails).subscribe(
      data =>
      {
        if(data!=null)
        { 
          this.purchaseDetails=data;
          this.isDisplay=true;
          this.ngOnInit();
          this.isMessage=false;
        }
      },
      (error:HttpErrorResponse)=>
      {
        this.errorMessage=error.error.message;      
        this.isMessage=true;
        this.ngOnInit();
        this.isDisplay=false;
      }
    );
  }
}
