import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-whm-customer-details',
  templateUrl: './whm-customer-details.component.html',
  styleUrls: ['./whm-customer-details.component.css']
})
export class WhmCustomerDetailsComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;
  
  ngOnInit() {
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

    this.whmService.getDetails(customerDetails.customer_code).subscribe(
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
