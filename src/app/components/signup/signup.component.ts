import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error: string;
  public success: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToLoginPage() {
    this.router.navigate(["login"]); //path always should be in array
  }

  readValuesFromForms(form: HTMLFormElement) {
    // let form = <HTMLFormElement>event.target;
    let name = (<HTMLInputElement>form.elements.namedItem('name')).value;
    let phone = (<HTMLInputElement>form.elements.namedItem('phone')).value;
    let email = (<HTMLInputElement>form.elements.namedItem('email')).value;
    let password = (<HTMLInputElement>form.elements.namedItem('password')).value;
    // console.log({
    //   name , email , phone , password
    // });

    let user: User = {
      name,
      email,
      phone,
      password
    }
    return user;
  }

  signup(event: Event) {
    event.preventDefault();
    // console.log(event.target);
    //getting form data
    let form = <HTMLFormElement>event.target;
    let user = this.readValuesFromForms(form);
    // console.log({ user });
    this.createUser(user, form);
  }

    //subscribe this userService observer to perform signup 
    createUser(user : User , form : HTMLFormElement){
      this.userService.signup(user).subscribe(

        {
          next: (result) => {
            console.log(result);
            this.success = result.message;
            this.error = undefined;
            form.reset();
            this.navigateToLoginPage();
          },
          error: (response: HttpErrorResponse,) => {
            console.log(response);
            this.error = response.error.error.message;
            this.success = undefined;
          }
        }
    ) //end of subscribe


  }
}
