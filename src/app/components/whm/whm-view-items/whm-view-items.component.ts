import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from 'src/app/services/view-items.service';
import { Router } from '@angular/router';
import { ItemDetails } from 'src/app/beans/item-details';

@Component({
  selector: 'app-whm-view-items',
  templateUrl: './whm-view-items.component.html',
  styleUrls: ['./whm-view-items.component.css']
})
export class WhmViewItemsComponent implements OnInit {
   private itemList:ItemDetails[];
  constructor(private viewItemsService: ViewItemsService, private router : Router) { }
  
  ngOnInit() {
    this.viewItemsService.viewItems().subscribe(
      data =>{
        if(data)
        {
            this.itemList=data;   
        }
      }
    )
  }
  
}
