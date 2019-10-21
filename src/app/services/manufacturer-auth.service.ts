import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerAuthService {

  constructor(private router:Router) { }
  
  hasAccess():boolean
  {
    let manufacturerDetails:User=JSON.parse(sessionStorage.getItem('manufacturerDetails'));
    
    if(manufacturerDetails != null && manufacturerDetails.user_type == "Manufacturer")
    {
      return true;
    }
    else
    {
      sessionStorage.clear();
      this.router.navigate(['home']);
    }
  }
}
