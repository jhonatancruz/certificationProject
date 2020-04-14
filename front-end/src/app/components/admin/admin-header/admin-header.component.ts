import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  handleLogOut(){
    console.log('inside handle logout');
    this.loginService.logout();
    this.router.navigate(['admin/login'])
    
  }

}
