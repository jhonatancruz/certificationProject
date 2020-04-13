import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user/users'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
users: Observable<Users[]>;
  
constructor(private router: Router, private user : UserService )
 { }

  ngOnInit(): void {
  }


  handleSubmit() {
    // this.users =  this.user.getUsers(); // IDK what to do after here
      if (this.userName === 'admin' && this.password === 'admin') {
        //navigate to tasks.
        this.router.navigate(['/home']);
      }else if
      (this.userName === 'user' && this.password === 'user') {
        //navigate to tasks.
        this.router.navigate(['/home-user']);
    }
  }
}
