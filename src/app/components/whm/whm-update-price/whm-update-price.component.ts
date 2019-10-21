import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemDetails } from 'src/app/models/item-details';
import { error } from 'protractor';

@Component({
  selector: 'app-whm-update-price',
  templateUrl: './whm-update-price.component.html',
  styleUrls: ['./whm-update-price.component.css']
})
export class WhmUpdatePriceComponent implements OnInit {

  
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted:boolean=false;
  private isMessage:boolean=false;
  private isDisplay:boolean=false;
  private code:number;
  private itemDetails:ItemDetails;
  
  ngOnInit() {
    this.submitted=false;
    this.updateForm.reset();
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
    this.code=itemDetails.item_code;    
    this.whmService.updatePrice(itemDetails).subscribe(
      data =>
      {
        if(data!=null)
        {
          this.itemDetails=data;
          this.isDisplay=true;
          this.ngOnInit();
          this.isMessage=false;
        }
        else
        { 
          this.isMessage=true;
          this.ngOnInit();
          this.isDisplay=false;
        }
      }
    );
    
  }

}
