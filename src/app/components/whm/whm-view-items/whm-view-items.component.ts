import { Component, OnInit } from '@angular/core';
import { WhmService } from 'src/app/services/whm.service';
import { Router } from '@angular/router';
import { ItemDetails } from 'src/app/models/item-details';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-whm-view-items',
  templateUrl: './whm-view-items.component.html',
  styleUrls: ['./whm-view-items.component.css']
})
export class WhmViewItemsComponent implements OnInit {
  private itemList:ItemDetails[];
  constructor(private whmService: WhmService, private router : Router) { }
  
  ngOnInit() {
    this.getItems();            
  }

  getItems()
  {
    this.whmService.viewItems().subscribe(
      data =>{
        if(data)
        {
            this.itemList=data;   
        }
      },
      error=>
      {
        
      }
    )
  }

  
}
