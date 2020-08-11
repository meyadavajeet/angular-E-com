import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error: string;
  public success: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signup(event: Event) {
    event.preventDefault();
    console.log(event.target);
    let form = <HTMLFormElement>event.target;
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
    console.log({ user });

    //subscribe this userService observer to perform signup 
    this.userService.signup(user).subscribe(
      
        {
        next:(result : { message:string }) =>{
          console.log(result);
          this.success = result.message;
          this.error = undefined;
        },
        error:(response : HttpErrorResponse,)=>{
          console.log(response);
          this.error = response.error.error.message;
          this.success = undefined;
        }
      }
/**
 * Console the status
 */
      // {
      //   next:(result)=>{
      //     console.log(result);
      //   },
      //   error:(err)=>{
      //     console.log(err);
          
      //   }

      // }
      
    /**
* end Console the status
*/
      //another way of handling request of result and error
      // (result) => {

      // },
      // (err) => {

      // }
    )


  }
}
