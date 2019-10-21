import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WhmAuthService {

  constructor(private router:Router) { }
  
  hasAccess():boolean
  {
    let whmDetails:User=JSON.parse(sessionStorage.getItem('whmDetails'));
    
    if(whmDetails != null && whmDetails.user_type == "WareHouse_Manager")
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
