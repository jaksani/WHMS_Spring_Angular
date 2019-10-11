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
  submitted=false;
  
  ngOnInit() {
  }

  registrationForm = this.formBuilder.group({
    customer_name:['',Validators.required],
    address:['',Validators.required],
    phone_number:['',Validators.required]
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
          console.log(data);
        }
      }
    );
    
  }

}
