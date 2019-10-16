import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerDetails } from 'src/app/models/customer-details';
import { error } from 'protractor';

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
  private customerDetails:CustomerDetails;
  
  ngOnInit() {
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
    let code:number=customerDetails.customer_code;
    this.whmService.getDetails(code).subscribe(
      data =>
      {
        this.customerDetails=data;
        if(this.customerDetails!=null)
        {
          this.isDisplay=true;
          this.ngOnInit();
        }
      },
      error =>
      {
        this.isMessage=true;
        this.ngOnInit();
      }
    );
    
  }


}
