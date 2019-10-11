import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PurchaseDetails } from 'src/app/models/purchase-details';

@Component({
  selector: 'app-whm-purchase-on-a-date',
  templateUrl: './whm-purchase-on-a-date.component.html',
  styleUrls: ['./whm-purchase-on-a-date.component.css']
})
export class WhmPurchaseOnADateComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;
  isForm:boolean;
  isDisplay:boolean;
  purchaseList:PurchaseDetails[];
  date:any;

  ngOnInit() {
    this.isForm=true;
    this.isDisplay=false;
  }

  purchaseForm = this.formBuilder.group({
    date_of_purchase:['',Validators.required],
  });

  get form()
  {
    return this.purchaseForm.controls
  }
  
  onSubmit(purchaseDetails:PurchaseDetails)
  { 
    this.submitted=true;

    this.whmService.getPurchases(purchaseDetails).subscribe(
      data =>
      {
        if(data)
        {
          this.isDisplay=true;
          this.isForm=false;
          this.date=purchaseDetails.date_of_purchase;
          this.purchaseList=data;
        }
      }
    );
    
  }

}
