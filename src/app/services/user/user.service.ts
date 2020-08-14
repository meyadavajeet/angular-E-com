import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSignupUrl = 'http://localhost:8090/api/users/signup';
  private userLoginUrl =  'http://localhost:8090/api/users/login';
  
  constructor(private http: HttpClient) { }

  signup(user:User){
   return this.http.post(this.userSignupUrl,user)
   .pipe(
     map(result =>{
       return <{message:string}>result
     })
   );

  }

  login(credentials : {email: string, password: string}){
    return this.http.post(this.userLoginUrl,credentials)
    .pipe(
      map(result=>{
        return <loginResultResponse>result
      })
    )
  }
}


//getting response by defining interface
interface loginResultResponse{
  token :string,
  message : string
}