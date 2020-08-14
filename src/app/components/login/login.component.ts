import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : HTMLFormElement;
  success :string;
  error : string;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    console.warn("login works");
    
    this.form = <HTMLFormElement>event.target;
    this.readValuesFromForm();
  }

  readValuesFromForm(){
    let email =(<HTMLInputElement>this.form.elements.namedItem('email')).value;
    let password = (<HTMLInputElement>this.form.elements.namedItem('password')).value;
    let credentials={
      email,
      password
    };

    console.warn(credentials);

      this.userService.login(credentials)
      .subscribe(
        {
          next : (result :{message: string, token: string})=>{
            console.log(result);
            this.success = result.message;
            this.error = undefined;
          },
          error: (response) =>{
            console.log(response);
            this.error = response.error.error.message;
            this.success = undefined;
          }
        }
      )
    
    
    } 
}
