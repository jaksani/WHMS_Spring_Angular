import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemDetails } from 'src/app/models/item-details';

@Component({
  selector: 'app-whm-update-price',
  templateUrl: './whm-update-price.component.html',
  styleUrls: ['./whm-update-price.component.css']
})
export class WhmUpdatePriceComponent implements OnInit {

  
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;
  
  ngOnInit() {
  }

  updateForm = this.formBuilder.group({
    item_code:['',Validators.required],
    item_price:['',Validators.required]
  });

  get form()
  {
    return this.updateForm.controls
  }
  
  onSubmit(itemDetails:ItemDetails)
  { 
    this.submitted=true;

    this.whmService.updatePrice(itemDetails).subscribe(
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
