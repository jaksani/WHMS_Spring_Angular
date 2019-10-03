import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router : Router) { }
  ngOnInit() {
  }
  
  onClick(loginForm:User)
  { 
    this.loginService.login(loginForm).subscribe(
      data =>
      {
        if(data)
        {
            sessionStorage.setItem("username",JSON.stringify(data.user_name));
            if(data.user_type == "WareHouse_Manager")
            {
              this.router.navigate(['warehousemanager']);
            }
            else if(data.user_type == "Manufacturer")
            {
              this.router.navigate(['manufacturer']);
            }
        }
    }
    );
    
    
  }
}
