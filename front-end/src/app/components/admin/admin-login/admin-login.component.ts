import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  
  usernameErr: string = '';
  passwordErr: string = '';
  loginErr: string = '';

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  validate() {
    let valid = true;
    this.usernameErr = '';
    this.passwordErr = '';

    if (this.username === '') {
      this.usernameErr = 'Username cannot be blank';
      valid = false;
    }

    if (this.password === '') {
      this.passwordErr = 'Description cannot be blank';
      valid = false;
    }
    return valid;
  }

  async handleSubmit()
  {
    if(this.validate()){
      if (await this.loginService.validate(this.username, this.password)){
        this.router.navigate(['/admin'])
      } else{
        console.log('login failure');
        this.loginErr = 'username or password is invalid!'
      }
   
    }
  }

}
