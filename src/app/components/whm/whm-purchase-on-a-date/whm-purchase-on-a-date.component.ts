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
  isDisplay:boolean;
  isMessage=false;
  purchaseList:PurchaseDetails[];
  date:any;

  ngOnInit() {
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
          this.date=purchaseDetails.date_of_purchase;
          this.purchaseList=data;
        }
        else
        {
          this.isMessage=true;
        }
      }
    );
    
  }
  
  onReset()
  {
    this.isDisplay=false;
    this.submitted=false;
    this.isMessage=false;
    this.purchaseForm.reset();
  }

}
