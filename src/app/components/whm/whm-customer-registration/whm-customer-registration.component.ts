import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-whm-customer-registration',
  templateUrl: './whm-customer-registration.component.html',
  styleUrls: ['./whm-customer-registration.component.css']
})
export class WhmCustomerRegistrationComponent implements OnInit {

 
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted:boolean=false;
  private isDisplay:boolean=false;
  private isMessage:boolean=false;
  private customerDetails:CustomerDetails;

  ngOnInit() {
    this.submitted=false;
    this.registrationForm.reset();
  }

  registrationForm = this.formBuilder.group({
    customer_name:['',Validators.required],
    address:['',Validators.required],
    phone_number:['',Validators.required,Validators.pattern('[\d{10}]')]
  });

  get form()
  {
    return this.registrationForm.controls
  }
  
  onSubmit(registrationDetails:CustomerDetails)
  { 
    this.submitted=true;
    this.whmService.registerCustomer(registrationDetails).subscribe(
      data =>
      {
        if(data)
        {
          this.customerDetails=data;
          this.isDisplay=true;
          this.ngOnInit();
          this.isMessage=false; 
        }
        else
        {
          this.isMessage=false;
          this.ngOnInit();
          this.isDisplay=false;
        }
      }
    );
    
  }

}
