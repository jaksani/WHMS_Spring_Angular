import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemDetails } from 'src/app/models/item-details';

@Component({
  selector: 'app-whm-delete-item',
  templateUrl: './whm-delete-item.component.html',
  styleUrls: ['./whm-delete-item.component.css']
})
export class WhmDeleteItemComponent implements OnInit {

  
  constructor(private whmService:WhmService,private router : Router,private formBuilder:FormBuilder) { }
  private submitted=false;
  private isDeleted=false;
  private isNull=false;

  ngOnInit() {
    this.submitted=false;
    this.deleteForm.reset();
  }

  deleteForm = this.formBuilder.group({
    item_code:['',Validators.required],
   
  });

  get form()
  {
    return this.deleteForm.controls
  }
  
  onSubmit(itemDetails:ItemDetails)
  { 
    this.submitted=true;

    this.whmService.deleteItem(itemDetails).subscribe(
      (data) =>
      {
        if(data)
        {
          this.isDeleted=true;
          this.ngOnInit();
          this.isNull=false;
        }
        else
        {
          this.isNull=true;
          this.ngOnInit();
          this.isDeleted= false;
        }
      }
    );
    
  }

}
