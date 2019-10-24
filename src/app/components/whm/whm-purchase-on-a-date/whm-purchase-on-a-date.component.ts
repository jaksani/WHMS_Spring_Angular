import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PurchaseDetails } from 'src/app/models/purchase-details';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-whm-purchase-on-a-date',
  templateUrl: './whm-purchase-on-a-date.component.html',
  styleUrls: ['./whm-purchase-on-a-date.component.css']
})
export class WhmPurchaseOnADateComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted=false;
  private isDisplay=false;
  private isMessage=false;
  private date:any;
  purchaseList:PurchaseDetails[];

  ngOnInit() {
    this.submitted=false;
    this.purchaseForm.reset();
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
    this.date=purchaseDetails.date_of_purchase;
    this.whmService.getPurchases(purchaseDetails).subscribe(
      data =>
      { 
        this.purchaseList=data;
        if(this.purchaseList.length!=0)
        {
          this.isDisplay=true;
          this.ngOnInit();
          this.isMessage=false;
        }
        else
        {
          this.isMessage=true;
          this.ngOnInit();
          this.isDisplay=false
        }
      }
    );
    
  }

}
