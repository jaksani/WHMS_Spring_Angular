import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder,  Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router : Router,private formBuilder:FormBuilder) { }
  submitted=false;

  ngOnInit() {
  }

  loginForm = this.formBuilder.group({
    user_name:['',Validators.required],
    password:['',Validators.required]
  });

  get form()
  {
    return this.loginForm.controls
  }
  
  onSubmit(loginDetails:User)
  { 
    this.submitted=true;

    this.loginService.login(loginDetails).subscribe(
      data =>
      {
        if(data)
        {
            
            if(data.user_type == "WareHouse_Manager")
            {
              sessionStorage.setItem("whmDetails",JSON.stringify(data));  
              this.router.navigate(['warehousemanager']);
            }
            else if(data.user_type == "Manufacturer")
            {
              sessionStorage.setItem("manufacturerDetails",JSON.stringify(data));
              this.router.navigate(['manufacturer']);
            }
        }
    }
    );
    
  }
}
