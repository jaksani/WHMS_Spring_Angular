import { Injectable } from '@angular/core';
import { User } from '../beans/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  private path="http://localhost:8087/verify/";

  login(loginForm:User):Observable<User>
  {
    return this.httpClient.post<User>(this.path+"login",loginForm);
  }
}
