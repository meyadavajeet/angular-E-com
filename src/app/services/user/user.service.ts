import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSignupUrl = 'http://localhost:8090/api/users/signup';
  private userLoginUrl =  'http://localhost:8090/api/users/login';
  
  constructor(private http: HttpClient) { }

  signup(user:User){
   return this.http.post(this.userSignupUrl,user);

  }

  login(credentials : {email: string, password: string}){
    return this.http.post(this.userLoginUrl,credentials);
  }
}
