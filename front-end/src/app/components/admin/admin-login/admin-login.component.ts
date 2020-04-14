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

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  async handleSubmit()
  {
    if (await this.loginService.validate(this.username, this.password)){
      this.router.navigate(['/admin'])
    } else{
      console.log('login failure');
    }
 
  }

}
