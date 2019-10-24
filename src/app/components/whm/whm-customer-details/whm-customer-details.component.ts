import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerDetails } from 'src/app/models/customer-details';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-whm-customer-details',
  templateUrl: './whm-customer-details.component.html',
  styleUrls: ['./whm-customer-details.component.css']
})
export class WhmCustomerDetailsComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted=false;
  private isMessage=false;
  private isDisplay=false;
  private code:number;
  private errorMessage:String;
  private customerDetails:CustomerDetails;
  
  ngOnInit() {
    this.submitted=false;
    this.detailsForm.reset();
  }

  detailsForm = this.formBuilder.group({
    customer_code:['',Validators.required],
  });

  get form()
  {
    return this.detailsForm.controls
  }
  
  onSubmit(customerDetails:CustomerDetails)
  { 
    this.submitted=true;
    this.code=customerDetails.customer_code;
    this.whmService.getDetails(this.code).subscribe(
      data =>
      {
        if(data!=null)
        {
          this.customerDetails=data;
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
