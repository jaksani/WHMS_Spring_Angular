import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  Validators} from '@angular/forms';
import { PurchaseDetails } from 'src/app/models/purchase-details';
import { WhmService } from 'src/app/services/whm.service';

@Component({
  selector: 'app-whm-billing',
  templateUrl: './whm-billing.component.html',
  styleUrls: ['./whm-billing.component.css']
})
export class WhmBillingComponent implements OnInit {

  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;
  
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
        if(data)
        {

        }
      }
    );
    
  }

}
