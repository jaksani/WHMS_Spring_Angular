import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { serverPath } from '../constant/server-constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  login(loginForm:User):Observable<User>
  {
    return this.httpClient.post<User>(serverPath+"verify/login",loginForm)
  }
}
