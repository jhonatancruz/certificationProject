import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';

const loginUri = 'http://localhost:3000/login/login';
const registerUri = 'http://localhost:3000/login/register';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  async validate(username:string, password:string) : Promise<boolean>{
    let loginSuccess = false;
    let credentials = {username:username, password:password};

    let promise = this.http.post<User>(loginUri, credentials).toPromise();
    await promise
      .then(user =>{        
        console.log(user);
        
        localStorage.setItem('username', user.username)
        localStorage.setItem('email', user.email)
        localStorage.setItem('name', user.name)
        localStorage.setItem('token', user.token)
        
        loginSuccess = true;
      })
      .catch(err =>{
        loginSuccess = false;
      })

    return loginSuccess;
  }

  register(data : any){
    return this.http.post(registerUri, data);

  }

  logout() 
  {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
  }

  getUsername(){
    return localStorage.getItem('username');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}


